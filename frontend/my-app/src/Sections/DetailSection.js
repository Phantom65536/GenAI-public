import './InputBox.css';
import InputBox from './InputBox.js';
import Comment from './Comment.js';
import { useState } from 'react';
function DetailSection({value,description1,description2}){
  function clickFunction(){/*send the value to backend, update the comment */
    var combinedResponse="Important Details\n"
    combinedResponse=combinedResponse+value.map((item, index) => (
      "-"+item[0]+"\n"
    )).join("")
    combinedResponse=combinedResponse+"Detailed Examination\n"
    combinedResponse=combinedResponse+value.map((item, index) => (
      "-"+item[1]+"\n"
    )).join("")
    const object = new FormData()
    object.append('topic',process.env.REACT_APP_TOPIC.replace("***", '\n'))
    object.append('component',1)
    object.append('response', combinedResponse)
    console.log(combinedResponse)
    console.log(object.get("topic"))
    console.log("object is "+JSON.stringify(object))
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
    
  }
  const [comment,setComment]=useState("")
  return (
  <>
  <div>
    <button onClick={clickFunction}>Evaluate</button> 
    <div style={{ display:"inline-block"}}>   
      <div>Important Detail</div>
      <div>{description1}</div>
      {value.map((item, index) => (
        <div key={index} style={{ flex: '1', marginRight: '10px' }}><InputBox value={item[0]}/></div>
      ))}
    </div>
    <div style={{ display:"inline-block", marginLeft: '10px' }}>    
      <div>Detailed Examination</div>
      <div>{description2}</div>
      {value.map((item, index) => (
        <div key={index} style={{ flex: '1', marginRight: '10px' }}><InputBox value={item[1]}/></div>
      ))}
      {/*button can be put here? */}
    </div>
    <Comment comment={comment}/>
  </div>
  
  </>
  )
}
export default DetailSection