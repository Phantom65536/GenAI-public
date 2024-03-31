import './InputBox.css';
import InputBox from './InputBox.js';
import Comment from './Comment.js';
import { useState } from 'react';
function EndingSection({value,description}){
  const [comment,setComment]=useState('')
  function clickFunction(){/*send the value to backend, update the comment */
  const object = new FormData()
  object.append('topic',process.env.REACT_APP_TOPIC.replace("***", '\n'))
  object.append('component',2)
  object.append('response', value)
  console.log(object.get("topic"))
  console.log(JSON.stringify(object))
  console.log(process.env.REACT_APP_URL+"table_feedback")
  fetch(process.env.REACT_APP_URL+"table_feedback",{
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
  return (<>
    <div>Ending</div>
    <div>{description}</div>
    <button onClick={clickFunction}>Evaluate</button>
    <InputBox value={value}/> {/*pass style here?*/}
    <Comment comment={comment}/>
  </>)
}
export default EndingSection