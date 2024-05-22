import "./SelectionPage.css";
import facebook from "../Assets/facebook.png";
import snapchat from "../Assets/SnapCHat.png";
import tic_toc from "../Assets/tic toc.png";
import instagram from "../Assets/Instagram.jpg";
import X from '../Assets/X.png'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthConext";
function SelectionPage() {
     const [isChecked, setIsChecked] = useState(false);
    //  const [activeButton , setActiveButton] = useContext(AuthContext);
  const handleCheckboxChange = (event) => {

    setIsChecked(event.target.checked);
    if(event.target.checked){
     
      setIsChecked(event.target.checked)
    }else{
      
    }
  };
  return (
    <div className="body">
    {/* <div id="active"><button>active Social media controller</button></div> */}
    <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked= {isChecked} onChange={handleCheckboxChange}></input>
        <label className="form-check-label" for="flexSwitchCheckDefault">Active social media Controller</label>
    </div>
      <div class="selectedPage_container">
        <h1>Social Media</h1>
        <div class="app-grid">
          <div class="app-icon">
            <Link to="/Select/facebook">
              <img src={facebook} alt="Facebook" />
              <span class="notification">5</span>
            </Link>
            <p>Facebook</p>
          </div>
          <div class="app-icon">
            <img src={snapchat} alt="Snapchat" />
            <p>SnapChat</p>
          </div>
          <div class="app-icon">
            <img src={instagram} alt="Instagram" />
            <p>Instagram</p>
          </div>
          <div class="app-icon">
            <img src={X} alt="Twitter" />
            <p>X</p>
          </div>
          <div class="app-icon">
            <img src={tic_toc} alt="TikTok" />
            <p>Tic Toc</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectionPage;
