import Student from "./Student";
import { useState } from "react";
import FeedbackPage from "./FeedbackPage";
function StudentListPage({names,FirstData}) {
  const [click,setClick]=useState(false)
  function studentClicked(){
    setClick(true)
  }
  function mapping(item, index){ 
    console.log(index)
    return (
    <div key={index}>
      <Student name={item} studentClicked={studentClicked}/>
    </div>
  )}
  return click? (<FeedbackPage {...FirstData}/>):(
    (<>
      <div>
        {names.map(mapping)}
      </div>
    </>)
  );
}
export default StudentListPage