import React, { useState } from "react";
import "./PopUp.css";
import "../../App.css";
import DefaultBackground from "../../assets/DefaultBackground.jpg";
import Bgremover from "../../Screens/BackgroundRemover/Bgremover";
const PopUp = () => {
  const [remove, setRemove] = useState(false);
  const [bgr, setBgr] = useState(DefaultBackground);

  const clicked = () => {
    console.log("clicked");
  };
  const onUploadHandler = (reqImage) => {
    setBgr(reqImage);
    setRemove(true);
  };
  const onDownload = () => {
    alert("Downloaded Successfully");
  };
  const onClear = () => {
    setBgr(DefaultBackground);
    setRemove(false);
  };
  return (
    <div>
      <Bgremover onUploadHandler={onUploadHandler} />
   
      
   <form className="popup_box">
     <div className='img-box'>
          <div className="Bgimg">
            <img src={bgr} alt="Image"></img>
          </div>
          </div>
          <div className="Buttons">
            <button className="btn-infinity" type="button" onClick={clicked}>
              Remove Background
            </button>

            <button className="btn-infinity" onClick={onClear} type="button">
              Clear
            </button>

            <button className="btn-infinity" onClick={onDownload} type="button">
              Download
            </button>
          </div>
        </form>
      
    </div>
  );
};

export default PopUp;
