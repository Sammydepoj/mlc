// import { useEffect, useRef } from "react";
// import styles from "./UploadWidget.module.css";

// const UploadWidget = ({ changeHandler, fileLink }) => {
//   const cloudinaryRef = useRef();
//   const widgetRef = useRef();

//   useEffect(() => {
//     cloudinaryRef.current = window.cloudinary;
//     // console.log(cloudinaryRef.current);
//     widgetRef.current = cloudinaryRef.current.createUploadWidget(
//       {
//         cloudName: "dgswpoatb",
//         uploadPreset: "de25si43",
//       },
//       function (error, result) {
//         // console.log(result);
//         fileLink = result.info.secure_url;
//         console.log(result.info.secure_url);
//       }
//     );
//   }, []);
//   return (
//     <input
//       type={"file"}
//       className={styles.button}
//       onClick={(e) => {
//         e.preventDefault();
//         widgetRef.current.open();
//       }}
//       onChange={changeHandler}
//     />
//   );
// };

// export default UploadWidget;

import { useState } from "react";

const useCloudinaryWidget = () => {
  const [imageDetails, setImageDetails] = useState("");

  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dgswpoatb",
      uploadPreset: "de25si43",
      sources: ["local", "camera"],
      showAdvancedOptions: true,
      cropping: false,
      multiple: true,
      maxFiles: 5,
      resourceType: "auto",
      theme: "minimal",
      styles: {
        palette: {
          window: "#ffffff",
          sourceBg: "#f4f4f5",
          windowBorder: "#90a0b3",
          tabIcon: "#0078ff",
          inactiveTabIcon: "#69778A",
          menuIcons: "#0078ff",
          link: "#0078ff",
          action: "#FF620C",
          inProgress: "#0078ff",
          complete: "#20B832",
          error: "#EA2727",
          textDark: "#000000",
          textLight: "#FFFFFF",
        },
        fonts: {
          default: null,
          "'Nunito Sans', sans-serif": {
            url: "https://fonts.googleapis.com/css?family=Nunito+Sans",
            active: true,
          },
        },
      },
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        setImageDetails(result.info);
        console.log(result);
      }
    }
  );

  const handleUploadClick = (name, value, event, setFormData) => {
    widget.open();

    // event.preventDefault();
    // const { url, secure_url } = imageDetails;
    // (name = url), (value = secure_url);
    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [name]: value,
    // }));
  };

  return { imageDetails, handleUploadClick };
};

export default useCloudinaryWidget;
