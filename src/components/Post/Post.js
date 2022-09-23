import React, { useState } from 'react'
import "./Post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData'

export default function Post({post}) {
  const [like,setlike] =useState(post.like)
  const [isLiked,setIsLiked]= useState(false)

  const likeHandler =()=>{
    setlike(isLiked ? like-1: like+1)
    setIsLiked(!isLiked)

  }
  
  return (
    <div className='Post'>
        <div className='PostWrapper'>
        <div className='PostTop'>
        <div className='PostTopLeft'>
         <img className='postProfileImg' src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" /> 
            <span className='postUsername'>
              {Users.filter((u) => u.id === post.userId)[0].username} 
            </span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVertIcon/>
      </div>
        </div>
        <div className='postCenter'>
            <span className='postText'>{post.desc}</span>
            <img className='postImg' src={post.Photo} alt="" />
        </div>
        <div className='postBottom'>
            <div className='postBottomLeft'>
             <img className='likeIcon' src="assest/like.png" onClick={likeHandler} alt="" /> 
             <img className='likeIcon' src="assest/Heart.png" onClick={likeHandler} alt="" /> 
            <span className='postLikeCounter'>{like}</span>
            </div>
            <div className='postBottomRight'>
                <span className='postCommentText'>{post.Comment} Comments</span>
            </div>
            </div>
        </div>
    </div>
  )
}

