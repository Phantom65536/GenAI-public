import { useEffect, useState } from 'react';
import './InputBox.css';
import InputBox from './InputBox.js';
import Comment from './Comment.js';
function TopicSection({value,description}){
  const [comment,setComment]=useState('')
  
  function clickFunction(){/*send the value to backend, update the comment */
    const object={
      topic:value,
      student_profile:process.env.STUDENT_PROFILE
    }
    console.log(object)
    console.log(JSON.stringify(object))
    console.log(process.env.REACT_APP_URL+"suggestion")
    fetch(process.env.REACT_APP_URL+"suggestion", {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object)
    })
      .then(response => response.json())
      .then(result => {
        console.log("message back!")
        console.log(result);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
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