import { useEffect, useState } from 'react';
import './Sections/InputBox.css';
import InputBox from './Sections/InputBox.js';
import Comment from './Sections/Comment.js';

function CreatePage(props){
  const [comment,setComment]=useState('')
  
  function clickFunction(){/*send the value to backend, update the comment */
  const object = new FormData()
  object.append('topic',value1)
  object.append('student_profile',value2)
  console.log(object.get("topic"))
  console.log(JSON.stringify(object))
  console.log(process.env.REACT_APP_URL+"suggestion")
  fetch(process.env.REACT_APP_URL+"suggestion",{
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
  var value1=""
  var value2=""
  return (<>
    <button onClick={clickFunction}>Evaluate</button>
    <div>Enter the Topic</div>
    <InputBox value={value1}/> {/*pass style here?*/}
    <div>Enter the Student Profile</div>
    <InputBox value={value2}/>
    <Comment comment={comment}/>
  </>)
}
export default CreatePage