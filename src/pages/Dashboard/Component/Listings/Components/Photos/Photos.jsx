import { useEffect, useState } from "react";
import styles from "./Photos.module.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { boxVariant } from "../../Animation/Animate";

import Button from "../Button/Button";
const Photos = ({ formData, setFormData, errors }) => {
  const [photoFiles, setPhotoFiles] = useState([]);
  const [photoLinks, setPhotoLinks] = useState([]);
  const [localPhotoLinks, setLocalPhotoLinks] = useState([]);

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
    const uploadedPhotos = Array.from(event.target.files);
    setPhotoFiles(uploadedPhotos);
    const links = photoFiles.map((file) => {
      return file.name;
    });
    setLocalPhotoLinks((prevLinks) => [...prevLinks, links.toString()]);
    console.log(links);
    console.log(localPhotoLinks);
  };
  const handleUploadClick = async () => {
    if (!photoFiles.length) return;
    // Prepare the form data for the upload request
    const formData = new FormData();
    photoFiles.forEach((file) => {
      formData.append("file", file);
    });
    formData.append("upload_preset", "de25si43");

    try {
      // Send the upload request to Cloudinary
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dgswpoatb/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      console.log(formData);
      console.log(response);
      const data = await response.json();
      console.log(data);

      setPhotoLinks((prevLinks) => [...prevLinks, data.secure_url]);
      // Store the Cloudinary URL in the parent component's state
      setFormData((prevData) => ({
        ...prevData,
        // photo: data.secure_url,
        photo: photoLinks,
      }));
      console.log(photoLinks);
    } catch (error) {
      console.error(error);
    }
  };

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
            multiple
          />
          <Button
            type="button"
            value={"Upload"}
            onClick={handleUploadClick}
          ></Button>
        </div>
        {errors.photo && <span className={styles.error}>{errors.photo}</span>}
        <p>Width 640px and height 320px</p>

        {/* {formData.photo.length > 0 && (
          <div>
            {formData.photo.map((file) => (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  width: "100%",
                }}
              >
                <img
                  key={file}
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
        )} */}

        {/* {localPhotoLinks.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              width: "100%",
            }}
          >
            {localPhotoLinks.map((file) => (
              <img
                key={file.name}
                src={URL.createObjectURL(file)}
                alt="Uploaded photo"
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "3/2",
                  objectFit: "contain",
                }}
              />
            ))}
          </div>
        )} */}
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
