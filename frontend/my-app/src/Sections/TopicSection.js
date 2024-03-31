import { useEffect, useState } from 'react';
import './InputBox.css';
import InputBox from './InputBox.js';
import Comment from './Comment.js';

function TopicSection({value,description}){
  const [comment,setComment]=useState('')
  
  function clickFunction(){/*send the value to backend, update the comment */
  const object = new FormData()
  object.append('grade', 8)/*hardcoded for demo */
  object.append('writing_topic',process.env.REACT_APP_TOPIC.replace("***", '\n'))
  object.append('essay',props.essay)
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
    <div>Topic</div>
    <div>{description}</div>
    <button onClick={clickFunction}>Evaluate</button>
    <InputBox value={value}/> {/*pass style here?*/}
    <Comment comment={comment}/>
  </>)
}
export default TopicSection