import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from './Component/Shared/Header'
import Footer from './Component/Shared/Footer'
import RequireAuth from './Component/Shared/RequireAuth'
import Registration from './Component/Shared/Registration'
import Login from './Component/Shared/Login'
import Home from "./Component/HomePage/Home";


// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
function App() {


  return (
    <div className="">
      <Header></Header>
      {/* <ToastContainer /> */}
      <Routes>
        
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/registration"
          element={
            <Registration></Registration>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Login></Login>
          }
        ></Route>
       
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
