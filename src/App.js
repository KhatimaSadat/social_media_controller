import "./App.css";
import bg from "./Assets/shutterstock_1456780712.jpg";
import { Link } from "react-router-dom";
function App() {
  const resfresh = ()=>{
    localStorage.removeItem("specificPageAccessTime");
    localStorage.removeItem("activeCotroller");
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
          <div className="titleOfProject"><h1>Excessaive Use Of Social Media</h1></div>
          <Link to="/Select">Demo the solution</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
