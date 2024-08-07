import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CreateStudent from './CreateStudent';
import "../CSS/StyleSheet1.css";
import { Context } from './Context';

const ManagementDashboard = () => {
  const [add, setAdd] = useState("");
  const navigate=useNavigate()
  const {setAdmin}=useContext(Context)

  useEffect(()=>{
    if(add==="single"){
      navigate("/create-student")
    }else if(add==="batch"){
      navigate("/batchuploadstudents")
    }else if(add==="teacher"){
      navigate("/createteacher")
    }
  },[add])

  return (
    <div className='Style1'>
      <div>
        <h2>Management Dashboard</h2>
        {/* <Link to="/create-student" className="btn btn-success">Create Student</Link> */}
        <select value={add} onChange={(e) => setAdd(e.target.value)} style={{padding:"10px"}}>
          <option value="">Registration</option>
          <option value="single">Add Single Student</option>
          <option value="batch">Add Batch Students</option>
          <option value="teacher">Add Teacher</option>
        </select>

        <Link to="/students" className="btn btn-primary ml-2">All Students</Link>
        <Link to="/students-by-class" className="btn btn-primary ml-2">Students by Class</Link>
        <Link to="/scheme-work" className="btn btn-secondary ml-2">Scheme of Work and Time Table</Link>
        <Link to="/announcements" className="btn btn-warning ml-2">Announcements</Link>
        <Link to="/schoolfeesmanagemenet" className='btn btn-warning ml-2'>School Fees Management</Link>
        <Link to="/" className="btn btn-danger ml-2" onClick={()=>setAdmin(false)}>LogOut</Link>
        {/* <Link to="/transportation" className="btn btn-info ml-2">Transportation & Pick-Up</Link> */}
      </div>
     
    </div>
  );
};

export default ManagementDashboard;
