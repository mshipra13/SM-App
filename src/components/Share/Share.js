import React from 'react'
import "./Share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
    <div className='share'>
        <div className='shareWrapper'>
            <div className='shareTop'>
             <img className='shareProfileImg' src="/assest/pic/1.jpg" alt="" />
                <input placeholder='What is in Your mind?'
                className='shareInput'/>
            </div>
            <hr className='shareHr'/>
            <div className='shareBottom'>
                <div className='shareOptions'>
                    <div className='shareOption'>
                <PermMediaIcon htmlColor='tomato' className='shareIcon'/>
                    <span className='shareOptionText'>Photo or Video</span>
                </div>
                <div className='shareOption'>
                <LabelIcon htmlColor='blue' className='shareIcon'/>
                    <span className='shareOptionText'>Tag</span>
                </div>
                <div className='shareOption'>
                <LocationOnIcon htmlColor='green' className='shareIcon'/>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className='shareOption'>
                <EmojiEmotionsIcon htmlColor='gold' className='shareIcon'/>
                    <span className='shareOptionText'>Feeling</span>
                </div>
            </div>
            <button className='shareButton'>Share</button>
            </div>
        </div>
      </div>
  )
}
