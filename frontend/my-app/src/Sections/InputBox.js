import './InputBox.css';
import { useRef } from 'react';
function InputBox({value}){
  const textareaRef = useRef(null);
  const handleChange = () => {
    if (textareaRef.current) {
      value = textareaRef.current.value;
      console.log(value);
    } else console.log("not found!")
  };
  return (<>
        <textarea type="textare" 
          ref={textareaRef}
          name="textValue"
          style={{ width: '300px', height: '200px' }}
          defaultValue={value}
          onChange={handleChange}
        />
  
  </>)
}
export default InputBox