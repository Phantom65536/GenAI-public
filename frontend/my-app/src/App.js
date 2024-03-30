import logo from './logo.svg';
import './App.css';
import InputPage from './InputPage.js'
import WritingPage from './WritingPage.js'
import { useState } from 'react';

function App() {
  const [open,setOpen]=useState(true)
  const [writing,setWriting]=useState(false)
  const mockPage = {
    Title: "Fun things in Canada",
    Topic: "Top 20 ways to leave Canada",
    Pairs: [["pt1", "ela1"], ["pt2", "ela2"], ["pt3", "ela3"]],
    Ending: "In conclusion, Canada is a good place to leave",
    open: ()=>{setOpen(true);},
    close: ()=>{setOpen(false);},
    startWriting: ()=>{setWriting(true)}
  };
  return (
    <>
      {open ? (
        <div>
          <InputPage {...mockPage} />
          {writing ? <WritingPage {...mockPage} /> : null}
        </div>
      ) : <div></div>}
    </>
  );
}

export default App;
