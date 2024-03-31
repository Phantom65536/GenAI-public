import logo from './logo.svg';
import './App.css';
import InputWritingPage from './InputWritingPage.js';

const mockData={
  RAF: ["main character", "my fans", "Essay"],
  Title: "Fun things in Canada",
  Topic: "Top 20 ways to leave Canada",
  Pairs: [["pt1", "ela1"], ["pt2", "ela2"], ["pt3", "ela3"]],
  Ending: "In conclusion, Canada is a good place to leave"
}

function App() {
  return (
    <>
    <div>
    <InputWritingPage {...mockData}/>
    </div>
    </>
    );
  }

export default App;
