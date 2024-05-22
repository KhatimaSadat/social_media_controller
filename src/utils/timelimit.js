// utils/timeLimit.js
export const setAccessTime = () => {
    localStorage.setItem('specificPageAccessTime', Date.now());
  };
  
  export const hasExceededTimeLimit = (limit) => {
    const accessTime = localStorage.getItem('specificPageAccessTime');
    if (!accessTime) return false;
    const currentTime = Date.now();
    console.log("Current-Time - accessTime =>", currentTime - accessTime > limit);
    return currentTime - accessTime > limit;
    // return false
   
  };
  export const getRemainingTime = (limit) => {
    const accessTime = localStorage.getItem('specificPageAccessTime');
    if (!accessTime) return limit;
    const currentTime = Date.now();
    const elapsedTime = currentTime - accessTime;
    return limit - elapsedTime;
  };
  