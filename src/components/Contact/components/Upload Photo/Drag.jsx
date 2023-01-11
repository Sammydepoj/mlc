import React, { useState, useRef } from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import styles from "./drag.module.css";

const Drag = (props) => {
  const { data, dispatch } = props;

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "SET_DROP_DEPTH", dropDepth: data.dropDepth + 1 });
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "SET_DROP_DEPTH", dropDepth: data.dropDepth - 1 });
    if (data.dropDepth > 0) return;
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let files = [...e.dataTransfer.files];

    if (files && files.length > 0) {
      const existingFiles = data.fileList.map((f) => f.name);
      files = files.filter((f) => !existingFiles.includes(f.name));

      dispatch({ type: "ADD_FILE_TO_LIST", files });
      e.dataTransfer.clearData();
      dispatch({ type: "SET_DROP_DEPTH", dropDepth: 0 });
      dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
    }
  };

  return (
    <div className={styles.drag}>
      <h3 className={styles.dragHeading}>Upload Photos</h3>
      <div
        className={
          data.inDropZone ? `${styles.dragArea}` : `${styles.dragAreaActive}`
        }
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragLeave={(e) => handleDragLeave(e)}
      >
        <p className={styles.dragDescription}>
          Drag your images here, or
          <span>
            <Label htmlFor={"fileInput"} className={styles.browseLabel}>
              browse
            </Label>
            <Input
              type={"file"}
              id={"fileInput"}
              className={styles.dragInputbtn}
              multiple
            />
          </span>
        </p>
        <p id={"formatShow"} className={styles.format}>
          Supported: JPG, JPEG, PNG
        </p>
      </div>
    </div>
  );
};

export default Drag;

// const dragItem = useRef();
// const dragOverItem = useRef();
// const [list, setList] = useState([
//   "Item 1",
//   "Item 2",
//   "Item 3",
//   "Item 4",
//   "Item 5",
//   "Item 6",
// ]);

// const dragStart = (e, position) => {
//   dragItem.current = position;
//   console.log(e.target.innerHTML);
// };

// const dragEnter = (e, position) => {
//   dragOverItem.current = position;
//   console.log(e.target.innerHTML);
// };

// const drop = (e) => {
//   const copyListItems = [...list];
//   const dragItemContent = copyListItems[dragItem.current];
//   copyListItems.splice(dragItem.current, 1);
//   copyListItems.splice(dragOverItem.current, 0, dragItemContent);
//   dragItem.current = null;
//   dragOverItem.current = null;
//   setList(copyListItems);
// };

{
  /* {list &&
        list.map((item, index) => (
          <div
            style={{
              backgroundColor: "lightblue",
              margin: "20px 25%",
              textAlign: "center",
              fontSize: "40px",
            }}
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable
          >
            {item}
          </div>
        ))} */
}
