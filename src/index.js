import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RoutesController from './RoutesController';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesController />
  </React.StrictMode>
);
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import About from './About';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: './App.js',
//   },
// ]);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
