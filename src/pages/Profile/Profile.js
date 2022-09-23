import React from 'react'
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import "./Profile.css"

export default function Profile() {
  return (
      <>
      {/* <Topbar/> */}
      <div className="Profile">
      <Sidebar/>
      <div className='profileRight'>
      <div className='profileRightTop'>
        <img className='profileCoverImg' src="assest/post/ps4.jpg" alt="" />
        <img className='profileUserImg' src="assest/pic/1.jpg" alt="" />

      </div>
      <div className='profileInfo'>
        <h4 className='profileInfoName'>Shipra Mishra</h4>
        <span className='profileInfoDesc'>Hello my friend</span>
      </div>
      < div className='profileRightBottom' style={{display:"flex"}}>
     <Feed/>
      <Rightbar/>
      </div>
      </div>
      </div>

    </>
  )
}
