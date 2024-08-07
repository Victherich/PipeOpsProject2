import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WelcomePage from './components/Welcomepage';
import ManagementDashboard from './components/ManagementDashboard';
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';
import StudentsByClass from './components/StudentsByClass';
import TransportationTab from './components/TransportationTab';
import AnnouncementTab from './components/AnouncementTab';
import SchemeWorkTab from './components/SchemeWorkTap';
import PrivateRoute from "./components/PrivateRoute"
import PrivateRoute2 from './components/PrivateRoute2';
import StudentDashboard from './components/StudentDashboard';
import WelcomePage2 from './components/WelcomePage2';
import HomePage from './components/LandingPage';
import ContactUs from './components/ContactUs';
import SchoolLogin from './components/SchoolLogin';
import StudentLogin from './components/StudentLogin';
import BatchUploadStudents from './components/BatchUploadStudents';
import SchoolFeesManagement from './components/SchoolFeesManagement';
import TeachersDashboard from './components/TeachersDashboard';
import CreateTeacherPage from './components/CreateTeacher';
import PrivateRoute3 from './components/PrivateRoute3';
import TeacherLogin from './components/TeacherLogin';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        {/* <Route path="/" element={<WelcomePage />} /> */}
        <Route path="/studentlogin" element={<StudentLogin/>}/>
        <Route path="/schoollogin" element={<SchoolLogin/>}/>
        <Route path="/welcome2" element={<WelcomePage2/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/teacherlogin" element={<TeacherLogin/>}/>
        <Route path="/create-student" element={<PrivateRoute element={<CreateStudent />} />} />
        <Route path="/students" element={<PrivateRoute element={<StudentList />} />} />
        <Route path="/students/:id" element={<PrivateRoute element={<StudentDetails />} />} />
        <Route path="/students-by-class" element={<PrivateRoute element={<StudentsByClass />} />} />
        <Route path="/transportation" element={<PrivateRoute element={<TransportationTab />} />} />
        <Route path="/announcements" element={<PrivateRoute element={<AnnouncementTab />} />} />
        <Route path="/scheme-work" element={<PrivateRoute element={<SchemeWorkTab />} />} />
        <Route path="/studentdashboard" element={<PrivateRoute2 element={<StudentDashboard/>}/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/batchuploadstudents" element={<PrivateRoute element={<BatchUploadStudents/>}/>}/>
        <Route path='/schoolfeesmanagemenet' element={<PrivateRoute element={<SchoolFeesManagement/>}/>}/>
        <Route path="/teachersdashboard" element={<PrivateRoute3 element={<TeachersDashboard/>}/>}/>
        <Route path="/createteacher" element ={<PrivateRoute element={<CreateTeacherPage/>}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
