import './InputBox.css';
import InputBox from './InputBox.js';
import Comment from './Comment.js';
import { useState } from 'react';
function RafSection({value,description1,description2,description3}){
  const [comment,setComment]=useState("")
  function clickFunction(){/*send the value to backend, update the comment */
  const object = new FormData()
  object.append('topic',value)
  object.append('component',1)
  object.append("response",value)
  console.log(object.get("topic"))
  console.log(JSON.stringify(object))
  console.log(process.env.REACT_APP_URL+"table_feedback_raft")
  fetch(process.env.REACT_APP_URL+"table_feedback_raft",{
    method:'POST',
    body: object
  }).then(response => response.json()).then(
    result => {
      console.log("message back!")
      console.log(result);
      setComment(result.feedback)
    }).catch(error => {
    // Handle any errors
    console.error(error)
  })
  };
  return (
  <>
  <div>
    <button onClick={clickFunction}>Evaluate</button> 
    <div style={{ display:"inline-block"}}>   
      <div>Role</div>
      <div>{description1}</div>
      <InputBox value={value[0]}/>
    </div>
    <div style={{ display:"inline-block", marginLeft: '10px' }}>    
      <div>Audience</div>
      <div>{description2}</div>
      <InputBox value={value[1]}/>
      {/*button can be put here? */}
    </div>
    <div style={{ display:"inline-block", marginLeft: '10px' }}>    
      <div>Format</div>
      <div>{description3}</div>
      <InputBox value={value[2]}/>
      {/*button can be put here? */}
    </div>
    <Comment comment={comment}/>
  </div>
  
  </>
  )
}
export default RafSection