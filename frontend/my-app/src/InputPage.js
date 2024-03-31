import DetailSection from './Sections/DetailSection.js'
import EndingSection from './Sections/EndingSection.js'
import TopicSection from './Sections/TopicSection.js'
import RafSection from './Sections/RafSection.js';
import React, { useState,useEffect } from 'react';

function InputPage({RAF,Title,Topic,Pairs,Ending,open,close,startWriting}){
  const [descData, setDescData] = useState({
    TopicDesc: '',
    ImportantDetailDesc: '',
    DetailedExaminationDesc: '',
    EndingDesc: '',
  });
  useEffect(() => {/*send the request for the the description */
    const mockDescription = {
      RoleDesc:"What role will be there",
      AudienceDesc:"Who will read this",
      FormatDesc:"In what format?",
      TopicDesc: "Thing you want to say",
      ImportantDetailDesc: "Very important!",
      DetailedExaminationDesc: "Very detailed!",
      EndingDesc: "Conclude da things"
    };
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
        console.log("message back!")
        console.log(result);

      }).catch(error => {
      // Handle any errors
      console.error(error)
    })
    const object1 = new FormData()
    object1.append('topic',process.env.REACT_APP_TOPIC.replace("***", '\n'))
    console.log(object.get("topic"))
    console.log(JSON.stringify(object1))
    console.log(process.env.REACT_APP_URL+"table")
    fetch(process.env.REACT_APP_URL+"table",{
      method:'POST',
      body: object1
    }).then(response => response.json()).then(
      result => {
        console.log("message back!")
        console.log(result);

      }).catch(error => {
      // Handle any errors
      console.error(error)
    })
    setDescData(mockDescription);
  }, []);
  return (
  <>
    <div>I am a page!</div>
    <div>My topic is: {Title}</div>
    <RafSection value={RAF} description1={descData.RoleDesc} description2={descData.AudienceDesc} description3={descData.FormatDesc}/>
    <TopicSection value={Topic} description={descData.TopicDesc}/>
    <DetailSection value={Pairs} description1={descData.ImportantDetailDesc} description2={descData.DetailedExaminationDesc}/>
    <EndingSection value={Ending} description={descData.EndingDesc}/>
    <button onClick={startWriting}>Start Writing</button>
  </>
  )
}
export default InputPage