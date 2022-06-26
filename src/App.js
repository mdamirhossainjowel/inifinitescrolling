import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Component/Shared/Header";
import Footer from "./Component/Shared/Footer";
import RequireAuth from "./Component/Shared/RequireAuth";
import Registration from "./Component/Shared/Registration";
import Login from "./Component/Shared/Login";
import Home from "./Component/HomePage/Home";
import PagenotFound from "./Component/Shared/PagenotFound";

function App() {
  return (
    <div className="">
      <Header></Header>

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
          element={<Registration></Registration>}
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<PagenotFound></PagenotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
