import './InputBox.css';
import InputBox from './InputBox.js';
import Comment from './Comment.js';
import { useState } from 'react';
function EndingSection({value,description}){
  const [comment,setComment]=useState('')
  function clickFunction(){/*send the value to backend, update the comment */
    setComment("this is a wonderful writing")
  }
  return (<>
    <div>Ending</div>
    <div>{description}</div>
    <button onClick={clickFunction}>Evaluate</button>
    <InputBox value={value}/> {/*pass style here?*/}
    <Comment comment={comment}/>
  </>)
}
export default EndingSection