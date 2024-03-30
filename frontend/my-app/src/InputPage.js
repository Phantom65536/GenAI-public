import DetailSection from './Sections/DetailSection.js'
import EndingSection from './Sections/EndingSection.js'
import TopicSection from './Sections/TopicSection.js'
import React, { useState,useEffect } from 'react';

function InputPage({Title,Topic,Pairs,Ending,open,close,startWriting}){
  const [descData, setDescData] = useState({
    TopicDesc: '',
    ImportantDetailDesc: '',
    DetailedExaminationDesc: '',
    EndingDesc: '',
  });
  useEffect(() => {/*send the request for the the description */
    const mockDescription = {
      TopicDesc: "Thing you want to say",
      ImportantDetailDesc: "Very important!",
      DetailedExaminationDesc: "Very detailed!",
      EndingDesc: "Conclude da things"
    };

    setDescData(mockDescription);
  }, []);
  return (
  <>
    <div>I am a page!</div>
    <div>My topic is: {Title}</div>
    <TopicSection value={Topic} description={descData.TopicDesc}/>
    <DetailSection value={Pairs} description1={descData.ImportantDetailDesc} description2={descData.DetailedExaminationDesc}/>
    <EndingSection value={Ending} description={descData.EndingDesc}/>
    <button onClick={startWriting}>Start Writing</button>
  </>
  )
}
export default InputPage