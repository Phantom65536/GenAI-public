import logo from './logo.svg';
import './App.css';
import InputPage from './InputPage.js'
const mockPage = {
  Title: "Fun things in Canada",
  Topic: "Top 20 ways to leave Canada",
  Pairs: [["pt1", "ela1"], ["pt2", "ela2"], ["pt3", "ela3"]],
  Ending: "In conclusion, Canada is a good place to leave"
};
function App() {
  return (
    <div>
      <InputPage  {...mockPage}/>
    </div>
  );
}

export default App;
