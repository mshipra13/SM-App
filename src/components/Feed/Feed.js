import React from 'react'
import Post from '../Post/Post'
import Share from '../Share/Share'
import "./Feed.css"
import { posts } from '../../dummyData'

export default function Feed() {
  return (
    <div className='Feed'>
      <div className='feedWrapper'>
        <Share/>
        {posts.map((p)=>(<Post key={p.id} post={p}/>))}
        
      </div>

    </div>
  )
}
