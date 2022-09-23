import React from "react"
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar/>
      <div className="homecontainer">
      <Sidebar/>
      <Feed/>
      <Rightbar/>

      </div>

    </>
  )
}