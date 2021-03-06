import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { database } from '../Firebase';

function Like2({userData,postData}) {
    const [like,setLike] = useState(null)
    useEffect(()=>{
        let check = postData.likes.includes(userData.userID)?true:false
        setLike(check)

    })
    const handleLike=()=>{
        if(like==true){
            let narr = postData.likes.filter((el)=>el!=userData.userID)
            database.posts.doc(postData.postID).update({
                likes:narr
            })
        }else{
            let narr = [...postData.likes,userData.userID]
            database.posts.doc(postData.postID).update({
                likes:narr
            })
        }
    }
    
  return (
    <div>
        {
            like!=null?
            <>
            {
                like==true?<FavoriteIcon style={{padding:'1rem',paddingTop:'0.5rem'}} className="like" onClick={handleLike}/>: <FavoriteBorderOutlinedIcon style={{padding:'1rem',paddingTop:'0.5rem'}} className="unlike2" onClick={handleLike}/>
            }
            </>:<></>
        }
    </div>
  )
}

export default Like2