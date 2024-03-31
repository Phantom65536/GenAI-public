import InputBox from "./Sections/InputBox"
function WritingPage(props){
  function click(){
    props.close()
  }
  return (<>
  <div>
  {props.Title} and other stuff, too lazy to type for skeleton 
  </div>
  <div>NOW WRITE!</div>
  <InputBox value={props.writing}/>
  <button onClick={click}>Finish Writing</button>
  </>)
}
export default WritingPage