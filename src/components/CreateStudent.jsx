import React, { useState } from 'react';
import Swal from "sweetalert2"
import ManagementDashboard from './ManagementDashboard';

const CreateStudent = () => {
  const [formData, setFormData] = useState({
    profileImg: "",
    fullName: "",
    dob: "",
    address: "",
    class: "",
    phone: "",
    email: "",
    note: ""
  });

  console.log(formData)

  const [picPreview, setPicPreview] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImg") {
      setFormData({ ...formData, profileImg: files[0] });
      handlePicPreview(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePicPreview = (file) => {
    setPicPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url=""
      
      const formDataA = new FormData();
      formDataA.append("fullName", formData.fullName);
      formDataA.append("email", formData.email);
      formDataA.append("phoneNumber", formData.phoneNumber);
      formDataA.append("address", formData.address);
      formDataA.append("dob", formData.dob);
      formDataA.append("class", formData.class);
      formDataA.append("profileImg", formData.profileImg);
      formDataA.append("note", formData.note);
 

      const loadingAlert = Swal.fire({
        title: "Loading",
        text: "Please wait...",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false
      });

      Swal.showLoading();

      try {
        const response = await axios.post(url, formDataA, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        console.log(response.data);
        loadingAlert.close();
        Swal.fire({icon:"success",text:"student created",showConfirmButton:false,timer:2000})


      } catch (error) {
        console.error(error);
        loadingAlert.close();
        if(error){
          // navigate("/emailredirectpage")
          Swal.fire({icon:"error",text:"something went wrong",showConfirmButton:true})
        }
      }
    } 


  return (
    <div className='Style1'>
      <ManagementDashboard/>
      <h2>Create Student</h2>
      <form className='Style2' onSubmit={handleSubmit}>
        {/* Form fields for creating a student */}
        <div className="form-group">
          <input
            onChange={handleChange}
            type="file"
            className="form-control"
            id="profileImg"
            name="profileImg"
            hidden
          />
          <label htmlFor='profileImg' style={{ width: "100px", height: "100px",backgroundColor:"lightgray",cursor:"pointer" }}>
            <img src={picPreview} alt="student profile photo" style={{ width: "100%", height: "100%" }} />
          </label>
        </div>
        <div className="form-group" style={{ display: "flex" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="date"
            className="form-control"
            placeholder="Date of Birth"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group" style={{ display: "flex" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Class"
            name="class"
            value={formData.class}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group" style={{ display: "flex" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Guardian Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            className="form-control"
            placeholder="Guardian Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Note"
            name="note"
            value={formData.note}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default CreateStudent;
