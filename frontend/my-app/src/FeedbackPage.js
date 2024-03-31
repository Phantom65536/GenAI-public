import { useEffect } from "react"
function FeedbackPage(props){
  useEffect(() => {/*send the request for the the description */
    const object = new FormData()
    object.append('grade', 8)/*hardcoded for demo */
    object.append('writing_topic',process.env.REACT_APP_TOPIC.replace("***", '\n'))
    object.append('essay',props.essay)
    console.log(object.get("topic"))
    console.log(JSON.stringify(object))
    console.log(process.env.REACT_APP_URL+"essay_feedback")
    fetch(process.env.REACT_APP_URL+"essay_feedback",{
      method:'POST',
      body: object
    }).then(response => response.json()).then(
      result => {
        console.log(result);
        
      }).catch(error => {
      // Handle any errors
      console.error(error)
    })
  })

  return (<>
  <div>
  {props.Title} and other stuff, too lazy to type for skeleton 
  </div>
  <div>NOW EVALUATE!</div>
  <button onClick={props.close}>Finish Viewing</button>
  </>)
}
export default FeedbackPage