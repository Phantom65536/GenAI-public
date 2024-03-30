import './InputBox.css';
import InputBox from './InputBox.js';
function EndingSection({value,description}){
  return (<>
    <div>Ending</div>
    <div>{description}</div>
    <InputBox value={value}/> {/*pass style here?*/}
  </>)
}
export default EndingSection