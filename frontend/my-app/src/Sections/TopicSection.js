import './InputBox.css';
import InputBox from './InputBox.js';
function TopicSection({value,description}){

  function clickFunction(){/*send the value to backend, update the comment */

  }

  return (<>
    <div>Topic</div>
    <div>{description}</div>
    <button onClick={clickFunction}></button>
    <InputBox value={value}/> {/*pass style here?*/}
    <Comment comment={comment}/>
  </>)
}
export default TopicSection