import "./App.css";
import bg from "./Assets/shutterstock_1456780712.jpg";
import { Link } from "react-router-dom";
function App() {
  const resfresh = ()=>{
    localStorage.removeItem("specificPageAccessTime");
    alert("refreshed successfully");
  }
  return (
    <div className="App">
      <div className="rightSide">
        <img src={bg} alt="BackGround" />
      </div>
      <div className="leftSide">
        <div className="resfresh"><button onClick={resfresh}>Resfresh button</button></div>
        <div className="text">
          <h1>Excessaive Use Of Social Media</h1>
          <p>Most people use social media for long time and waste their time</p>
          <Link to="/Select">Demo the solution</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
