import "./Topbar.css"
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import  {NotificationsActive}  from "@mui/icons-material";
import { Link } from "react-router-dom";


export default function Topbar(){
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
     <Link to='/'>   <span className="logo">SM-App</span></Link>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <SearchIcon className="searchIcon"/>
                <input
                 placeholder="search for friend,post or video"
                 className="searchInput" />
          </div>
        </div>
        < div className="topbarRight">
            <div className="topbarLink">
                <span className="topbarLink">Home</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                   <PersonIcon/> 
                   <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <ChatIcon/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                <NotificationsActive/>
                <span className="topbarIconBadge">1</span>
                </div>
            </div>
             
           <Link to ='/user'>  <img src="assest/pic/1.jpg" alt="" className="topbarImg"/></Link>
        </div>
    </div>
    
  );
}