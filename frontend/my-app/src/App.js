import './App.css';
import FeedbackPage from './FeedbackPage';
import StudentListPage from './StudentListPage';
import InputWritingPage from './InputWritingPage';
const mockData={
  RAF: ["main character", "my fans", "Essay"],
  Title: "Fun things in Canada",
  Topic: "Top 20 ways to leave Canada",
  Pairs: [["pt1", "ela1"], ["pt2", "ela2"], ["pt3", "ela3"]],
  Ending: "In conclusion, Canada is a good place to leave",
  writing:"This is a good essay.\nThis is a good essay.\nThis is a good essay.\nThis is a good essay.\n"
}
const mockAssignmentList={names:["Peter","Mark","Tom","Jerry","Marie"],mockData}
function App() {
  const ele = <div>{/*<StudentListPage {...mockAssignmentList}/> <InputWritingPage {...mockData}/>*/<InputWritingPage {...mockData}/> }</div>;
  return (
    <>
      <div>
        {ele}
      </div>
    </>
  );
}

export default App;
