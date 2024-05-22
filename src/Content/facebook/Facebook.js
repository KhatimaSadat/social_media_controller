import user1 from "../../Assets/user11.png";
import user2 from "../../Assets/user22.png";
import user2Post from '../../Assets/download.jpg';
import user1Post from '../../Assets/images.jpg';
import share from '../../Assets/share.png';
import like from '../../Assets/like.jpg';
import comment from '../../Assets/comment.png';
import { useNavigate } from "react-router-dom";
import "./Facebook.css";
import { setAccessTime, getRemainingTime } from "../../utils/timelimit";
import { useEffect, useState , useContext } from "react";
import { AuthContext } from "../../context/AuthConext";
function Facebook({ timeLimit }) {
  const [remainingTime, setRemainingTime] = useState(
    getRemainingTime(timeLimit)
  );
  
  const navigate = useNavigate();
  const activeCotroller = localStorage.getItem("activeCotroller")
  useEffect(() => {
    setAccessTime();
    const interval = setInterval(() => {
      const timeLeft = getRemainingTime(timeLimit);
      setRemainingTime(timeLeft);
      if ((timeLeft <= 0) && activeCotroller) {
        clearInterval(interval);
        navigate("/");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLimit, navigate]);
//   const [remainingTime, setRemainingTime] = useState(initialTime);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(prevTime => Math.max(prevTime - 1000, 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };


  return (
    <div className="faceBook-body">
      <header>
        <div class="container">
          <h1>Facebook</h1>
        </div>
      </header>
      <main>
        <div class="container">
         {localStorage.getItem("activeCotroller")?  <div className="timeShow">
          Time remaining: {formatTime(remainingTime)} minutes
          </div> : ""}
          <div class="create-post">
            <textarea placeholder="What's on your mind?"></textarea>
            <button>Post</button>
          </div>
          <div class="posts">
            <div class="post">
              <div class="post-header">
                <img src={user1} alt="User 1" class="avatar" />
                <div>
                  <h2>User 1</h2>
                  <time>2 hours ago</time>
                </div>
              </div>
              <img src={user1Post} alt="pictur"/>
              <div className="getIdea">
                 <div className="item"><img src={like} alt="like"/></div>
                 <div className="item"><img src={comment} alt="comment"/></div>
                 <div className="item"><img src={share} alt="share"/></div>
              </div>
            </div>
            <div class="post">
              <div class="post-header">
                <img src={user2} alt="User 2" class="avatar" />
                <div>
                  <h2>User 2</h2>
                  <time>4 hours ago</time>
                </div>
              </div>
              <img src={user2Post} alt="pictur"/>
              <div className="getIdea">
                 <div className="item"><img src={like} alt="like"/></div>
                 <div className="item"><img src={comment} alt="comment"/></div>
                 <div className="item"><img src={share} alt="share"/></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Facebook;
