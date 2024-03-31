function FeedbackPage(props){

  return (<>
  <div>
  {props.Title} and other stuff, too lazy to type for skeleton 
  </div>
  <div>NOW EVALUATE!</div>
  <button onClick={props.close}>Finish Viewing</button>
  </>)
}
export default FeedbackPage