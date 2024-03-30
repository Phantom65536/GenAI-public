import { useEffect, useState } from 'react';
import './InputBox.css';
import InputBox from './InputBox.js';
import Comment from './Comment.js';
function TopicSection({value,description}){
  const [comment,setComment]=useState('')
  
  function clickFunction(){/*send the value to backend, update the comment */
    setComment("this is a wonderful writing")
  }

  return (<>
    <div>Topic</div>
    <div>{description}</div>
    <button onClick={clickFunction}>Evaluate</button>
    <InputBox value={value}/> {/*pass style here?*/}
    <Comment comment={comment}/>
  </>)
}
export default TopicSection