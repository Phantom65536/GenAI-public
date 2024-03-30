import './InputBox.css';
import InputBox from './InputBox.js';
function DetailSection({value,description1,description2}){
  return (<>
    <div>Detail</div>
    <div>{description1}</div>
    <InputBox value={value}/> {/*pass style here?*/}
    
    <div>{description2}</div>
    <InputBox value={value}/> {/*pass style here?*/}
  </>)
}
export default DetailSection