import './InputBox.css';
import InputBox from './InputBox.js';
import Comment from './Comment.js';
import { useState } from 'react';
function DetailSection({value,description1,description2}){
  function clickFunction(){/*send the value to backend, update the comment */
    setComment("Well said, you are really a gifted child!")
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