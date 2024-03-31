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
  // useEffect(() => {/*send the request for the the description */
  //   const mockDescription = {
  //     RoleDesc:"What role will be there",
  //     AudienceDesc:"Who will read this",
  //     FormatDesc:"In what format?",
  //     TopicDesc: "Thing you want to say",
  //     ImportantDetailDesc: "Very important!",
  //     DetailedExaminationDesc: "Very detailed!",
  //     EndingDesc: "Conclude da things"
  //   };
  //   var Description=mockDescription
  //   const object = new FormData()
  //   object.append('topic',process.env.REACT_APP_TOPIC.replace("***", '\n'))
  //   console.log(object.get("topic"))
  //   console.log(JSON.stringify(object))
  //   console.log(process.env.REACT_APP_URL+"table")
  //   fetch(process.env.REACT_APP_URL+"table",{
  //     method:'POST',
  //     body: object
  //   }).then(response => response.json()).then(
  //     result => {
  //       console.log("message back! (table)")
  //       console.log(result);
  //       setDescData({
  //         ...descData,
  //         TopicDesc:result.T,
  //         ImportantDetailDesc:result.I,
  //         DetailedExaminationDesc:result.D,
  //         EndingDesc:result.E
  //       })
  //     }).catch(error => {
  //     // Handle any errors
  //     console.error(error)
  //   })
  //   const object1 = new FormData()
  //   object1.append('topic',process.env.REACT_APP_TOPIC.replace("***", '\n'))
  //   console.log(object.get("topic"))
  //   console.log(JSON.stringify(object1))
  //   console.log(process.env.REACT_APP_URL+"table_raft")
  //   fetch(process.env.REACT_APP_URL+"table_raft",{
  //     method:'POST',
  //     body: object1
  //   }).then(response => response.json()).then(
  //     result => {
  //       console.log("message back! (table raft)")
  //       console.log(result);
        
  //       setDescData({
  //         ...descData,
  //         RoleDesc:result.R,
  //         AudienceDesc:result.A,
  //         FormatDesc:result.F,
  //       })
  //     }).catch(error => {
  //     // Handle any errors
  //     console.error(error)
  //   })
  // }, []);
  return (
  <>
    <div>My topic is: {Title}</div>
    <RafSection value={RAF} description1={"What role will you be taking on in this writing task?"} description2={"Who are you writing this piece for?"} description3={"What type of writing will you be using to convey your message?"}/>
    <TopicSection value={Topic} description={"Global warming poses a grave threat to our planet, and as responsible citizens, we must take collective action to mitigate its effects."}/>
    <DetailSection value={Pairs} description1={"List the key factors contributing to global warming, such as recycling, fossil fuel consumption, and consumerism"} description2={"Discuss specific actions citizens can take to reduce their carbon footprint, such as reducing energy consumption, using renewable energy sources, and making sustainable lifestyle choices."}/>
    <EndingSection value={Ending} description={"Summarize the key points and reiterate the importance of individual actions in mitigating global warming."}/>
    <button onClick={startWriting}>Start Writing</button>
  </>
  )
}
export default InputPage