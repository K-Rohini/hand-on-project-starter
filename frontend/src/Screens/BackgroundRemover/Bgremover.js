import React, { useState } from "react";
import "./Bgremover.css";
import logo from "../../assets/logo.png";
import Default from "../../assets/default.png";
import example from "../../assets/exp.png";
import {AiOutlineUpload} from 'react-icons/ai';
import {AiFillDelete} from 'react-icons/ai';
import { HiArrowNarrowRight } from "react-icons/hi";
//import PopUp from "../../components/Dropzone/PopUp";
const Bgr = (props) => {
  const [profile, setProfile] = useState(Default);
  const [remove, setRemove] = useState(false);
  const onUpload = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfile(reader.result);
        setRemove(true);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const uploadHandler=()=>{
    props.onUploadHandler(profile);
    setProfile(Default);
    setRemove(false);
  };
  
  const deleteImageHandler=(e)=>{
     setProfile(Default);
     setRemove(false)
  }

  return (
    <div>
      <form onSubmit={onSubmit}> 
      <div className="Logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="Container">
        <div className="block1">
          <div className="Header">
            <p>Remove image Background</p>
          </div>
          <div className="Content">
            <p>100% automatic and free</p>
          </div>
          <img src={example} className="Image"></img>
        </div>
        <div className="block2">
          <div className="circle">
            <img src={profile} className="icon"></img>
          </div>
          <div className="primary-content">
            {!remove ? (
              <p>File should be png,jpeg and less than 5mb </p>
            ) : (
              <></>
            )}
          </div>
          <div className="Button">
            {!remove ? (
              <label className="Uploadbtn" htmlFor="input">
                Upload Image{<HiArrowNarrowRight />}
              </label>
            ) : (
              <></>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={onUpload}
              id="input"
            />
            {remove ? <button className="Sendbtn" onClick={uploadHandler}>Upload {<AiOutlineUpload/>}</button> : <></>}
            {remove ? <button className="Sendbtn" onClick={deleteImageHandler}>Remove {<AiFillDelete/>}</button> : <></>}
          </div>
          {!remove ? (
            <p className="secondary-content">Or drop a file</p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>
        {/* <PopUp /> */}
      </div>
      </form>
    </div>
  );
};

export default Bgr;
