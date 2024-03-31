import InputPage from './InputPage.js'
import WritingPage from './WritingPage.js'
import FeedbackPage from './FeedbackPage.js';
import { useState } from 'react';
function InputWritingPage(props){
  const [open,setOpen]=useState(true)
  const [writing,setWriting]=useState(false)
  const object = {
    ...props,
    open: ()=>{setOpen(true);},
    close: ()=>{setOpen(false);},
    startWriting: ()=>{setWriting(true)}
  };
  return(
  <>
      {open ? (
        <div>
          <InputPage {...object} />
          {writing ? <WritingPage {...object} /> : null}
        </div>
      ) : 
      <div>
        
      </div>}
  </>)
}
export default InputWritingPage