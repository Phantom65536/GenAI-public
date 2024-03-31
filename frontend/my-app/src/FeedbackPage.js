function FeedbackPage(props){
  useEffect(() => {/*send the request for the the description */
    const object = new FormData()
    object.append('topic',process.env.REACT_APP_TOPIC.replace("***", '\n'))
    console.log(object.get("topic"))
    console.log(JSON.stringify(object))
    console.log(process.env.REACT_APP_URL+"table")
    fetch(process.env.REACT_APP_URL+"table",{
      method:'POST',
      body: object
    }).then(response => response.json()).then(
      result => {
        console.log(result);
        Description.TopicDesc=result.T
        Description.ImportantDetailDesc=result.I
        Description.DetailedExaminationDesc=result.D
        Description.EndingDesc=result.E
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