import { useState } from "react";
import styles from "./Photos.module.css";
import Button from "../Button/Button";

import { storage } from "../../../../../../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const PhotoTest = ({ formData, setFormData, errors }) => {
  const [photoFiles, setPhotoFiles] = useState([]);
  const [percent, setPercent] = useState(0);

  const [localPhotoLinks, setLocalPhotoLinks] = useState([]);

  // const handleFileChange = (event) => {
  //   const uploadedPhotos = Array.from(event.target.files);
  //   setPhotoFiles(uploadedPhotos);
  //   const links = uploadedPhotos.map((file) => file.name);
  //   setLocalPhotoLinks((prevLinks) => [...prevLinks, ...links]);
  // };

  const handleFileChange = (event) => {
    setPhotoFiles(event.target.files[0]);
  };

  // const handleUploadClick = async () => {
  //   if (!photoFiles.length) return;

  //   // try {
  //   //   const uploadedPhotoUrls = [];

  //   //   // Upload each photo file to Firebase Storage
  //   //   for (const file of photoFiles) {
  //   //     const storageRef = storage.ref().child(file.name);
  //   //     const snapshot = await storageRef.put(file);
  //   //     const downloadUrl = await snapshot.ref.getDownloadURL();
  //   //     uploadedPhotoUrls.push(downloadUrl);
  //   //   }

  //   //   // Update the form data with the uploaded photo URLs
  //   //   setFormData((prevData) => ({
  //   //     ...prevData,
  //   //     photo: uploadedPhotoUrls,
  //   //   }));

  //   //   console.log(uploadedPhotoUrls);
  //   // } catch (error) {
  //   //   console.error(error);
  //   // }
  // };

  const handleUploadClick = async () => {
    if (!photoFiles) return;

    try {
      const storageRef = ref(storage, `/images/${photoFiles.name}`);

      const uploadTask = uploadBytesResumable(storageRef, photoFiles);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          // update progress
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
          });
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.photos}>
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
          />
          <Button
            type="button"
            value={"Upload"}
            onClick={handleUploadClick}
          ></Button>
        </div>
        <p>{percent} "% done"</p>
        {/* {errors.photo && <span className={styles.error}>{errors.photo}</span>} */}
        <p>Width 640px and height 320px</p>
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
        {/* {errors.video && <span className={styles.error}>{errors.video}</span>} */}
        <p>Width 640px and height 320px</p>
      </div>
    </div>
  );
};

export default PhotoTest;
