import { useEffect, useRef } from "react";
import styles from "./Photos.module.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { boxVariant } from "../../Animation/Animate";

import useCloudinaryWidget from "./UploadWidget/UploadWidget";

import Button from "../Button/Button";
const Photos = ({ formData, setFormData, errors }) => {
  const { imageDetails, handleUploadClick } = useCloudinaryWidget();

  // const control = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   } else {
  //     control.start("hidden");
  //   }
  // }, [control, inView]);

   const fileInputRef = useRef(null);
  
  const handleChange = (event) => {
    event.preventDefault();
    // console.log(widgetRef.current.target);
    // // console.log(event.target);
    let { name, value } = event.target;
    const { url, secure_url } = imageDetails;
    (name = url), (value = secure_url);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(name, value);
  };

  return (
    <div
      // ref={ref}
      // variants={boxVariant}
      // initial="visible"
      // animate={control}
      className={styles.photos}
    >
      <h5>Photos</h5>
      <div className={styles.fileInputWrapper}>
        <div>
          <div>
            <input
              type="file"
              ref={fileInputRef}
              // onChange={handleChange}
              onClick={handleUploadClick}
              aria-label="photo"
            />
            <Button
              type="button"
              onClick={handleUploadClick}
              value={"Upload"}
            ></Button>
            {/* {imageDetails && <img src={imageDetails} alt="Uploaded file" />} */}
          </div>
        </div>
        {errors.photo && <span className={styles.error}>{errors.photo}</span>}
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
        {errors.video && <span className={styles.error}>{errors.video}</span>}
        <p>Width 640px and height 320px</p>
      </div>
    </div>
  );
};

export default Photos;
