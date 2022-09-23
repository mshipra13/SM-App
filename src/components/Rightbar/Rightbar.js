import React from 'react'
import "./Rightbar.css"

export default function Rightbar() {
  return (
    <>
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src="assest/gift-png.webp" alt="" />
          <span className='birthday Text'>
           <b> Robert Ponting</b> and <b>3 other friends </b>
          </span>
        </div>
        <img className='rightbarAd' src="assest/immg.jpg" alt="" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend '>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src="assest/pic/2.jpg" alt="" />
              <span className='rightbarOnline'></span>

            </div>
            <span className='rightbarUsername'>Ruby deo</span>
          </li>

          <li className='rightbarFriend '>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src="assest/pic/2.jpg" alt="" />
              <span className='rightbarOnline'></span>

            </div>
            <span className='rightbarUsername'>Ruby deo</span>
          </li>
          <li className='rightbarFriend '>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src="assest/pic/2.jpg" alt="" />
              <span className='rightbarOnline'></span>

            </div>
            <span className='rightbarUsername'>Ruby deo</span>
          </li>
          <li className='rightbarFriend '>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src="assest/pic/2.jpg" alt="" />
              <span className='rightbarOnline'></span>

            </div>
            <span className='rightbarUsername'>Rushi deo</span>
          </li>
          <li className='rightbarFriend '>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src="assest/pic/2.jpg" alt="" />
              <span className='rightbarOnline'></span>

            </div>
            <span className='rightbarUsername'>Ruby deo</span>
          </li>

        </ul>
      </div>
    </div>
    </>
  )
}
