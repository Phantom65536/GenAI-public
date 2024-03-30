import './InputBox.css';
function InputBox({value}){
  return (<>
        <textarea type="textare" 
          name="textValue"
          style={{ width: '300px', height: '200px' }}
          defaultValue={value}
          /*onChange={this.props.handleChange}*/
        />
  
  </>)
}
export default InputBox