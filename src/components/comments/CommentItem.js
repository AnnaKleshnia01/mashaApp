import React, { useState } from 'react';
import Moment from 'react-moment';
// import { connect } from 'react-redux';
// import { setCurrent } from "../../actions/commentActions";

 const CommentItem = ( {comment} ) => {
   const [attention, setAttention] = useState(false);
  const [isTruncated, setIsTruncated] = useState(true);
  
     const commentText =`${comment.text }`
  
                       
     const resultCommentText = isTruncated ? commentText.slice(0, 30) : commentText;
    
     const toggleIsTruncated =() => {
       setIsTruncated(!isTruncated)
     }

     const onChange =(e) => {
       setAttention(!attention);
     }
  return (
    <div>
      <div className="row">
    <div className="col s12 m4">
      <div className={`card ${comment.attention ? 'blue-grey lighten-2' : "blue-grey darken-1"}`} > 
        <div className="card-content grey-text text-lighten-2">
          <p> {resultCommentText}
      <span className="read-more" onClick={toggleIsTruncated}>{isTruncated ?  "...more" : "...less"}</span></p>
          <p className={isTruncated ? "hide" : "show"}>{comment.author}</p>
          <span className= {isTruncated ? "hide" : "show"}><Moment format='MMMM Do YYYY'>{comment.date}</Moment></span>
          <p className={isTruncated ? "hide" : "show"}>
            <label>
               <input type="checkbox" className="filled-in" checked={attention}  value={attention} onChange={onChange}/>
               <span>Send to ...</span>
            </label>
          </p>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default CommentItem;