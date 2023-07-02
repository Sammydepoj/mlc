import { useEffect, useState } from "react";
import styles from "./Photos.module.css";

import { storage } from "../../../../../../firebase/firebase";
import {
  ref as reference,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { boxVariant } from "../../Animation/Animate";

import Button from "../Button/Button";
const Photos = ({ formData, setFormData, errors }) => {
  const [photoFiles, setPhotoFiles] = useState([]);
  const [percent, setPercent] = useState(0);

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const handleFileChange = (event) => {
    setPhotoFiles(event.target.files);
  };
  const handleUploadClick = async () => {
    if (!photoFiles.length) {
      alert("Please select at least one image!");
      return;
    }

    try {
      const uploadedPhotoUrls = [];

      for (const file of photoFiles) {
        const storageRef = reference(storage, `/images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            // Update progress if needed
            setPercent(percent);
          },
          (err) => console.log(err),
          () => {
            // Get the download URL for each uploaded file
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              uploadedPhotoUrls.push(url);

              // console.log(uploadedPhotoUrls);

              // Check if all files have been uploaded and update the form data
              if (uploadedPhotoUrls.length === photoFiles.length) {
                setFormData((prevData) => ({
                  ...prevData,
                  photo: uploadedPhotoUrls,
                }));
              }
            });
          }
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const handleUploadClick = async () => {
  //   if (!photoFiles.length) return;
  //   // Prepare the form data for the upload request
  //   const formData = new FormData();
  //   photoFiles.forEach((file) => {
  //     formData.append("file", file);
  //   });
  //   formData.append("upload_preset", "de25si43");

  //   try {
  //     // Send the upload request to Cloudinary
  //     const response = await fetch(
  //       "https://api.cloudinary.com/v1_1/dgswpoatb/image/upload",
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );

  //     console.log(formData);
  //     console.log(response);
  //     const data = await response.json();
  //     console.log(data);

  //     setPhotoLinks((prevLinks) => [...prevLinks, data.secure_url]);
  //     // Store the Cloudinary URL in the parent component's state
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       // photo: data.secure_url,
  //       photo: photoLinks,
  //     }));
  //     console.log(photoLinks);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div
      ref={ref}
      variants={boxVariant}
      initial="visible"
      animate={control}
      className={styles.photos}
    >
      <h5>Photos</h5>
      <div className={styles.fileInputWrapper}>
        <div>
          <input
            type="file"
            name="photo"
            id="photo"
            onChange={handleFileChange}
            aria-label="photo"
            accept="/image/*"
            multiple
          />
          <Button
            type="button"
            value={"Upload"}
            onClick={handleUploadClick}
          ></Button>
        </div>
        <p>{percent}% done</p>
        {errors.photo && <span className={styles.error}>{errors.photo}</span>}
        <p>Width 640px and height 320px</p>

        {formData.photo.length > 0 && (
          <div>
            {formData.photo.map((file, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  width: "100%",
                }}
              >
                <img
                  src={file}
                  alt="Uploaded photo"
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "3/2",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <h5>Videos</h5>
      <div className={styles.fileInputWrapper}>
        <div>
          <input
            type="file"
            name="video"
            id="video"
            aria-label="video"
            // value={formData.video}
            // onChange={handleChange}
          />

          <Button value={"Upload"} type={"button"}></Button>
        </div>
        {errors.video && <span className={styles.error}>{errors.video}</span>}
        <p>Width 640px and height 320px</p>
      </div>
    </div>
  );
};

export default Photos;
