import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./index.css";
import SignIn from "./component/user/signin.jsx";
import Dash from "./component/Admin/dash.jsx";
import TopNav from "./component/inc/topNav.jsx";
import SideNav from "./component/inc/sideNav.jsx";
import EmployeeList from "./component/employee/employeeList.jsx";
import AddEmployee from "./component/employee/addEmployee.jsx";
import UpdateEmployee from "./component/employee/updateEmployee.jsx";

function App() {
  const [count, setCount] = useState(0);
  let location = useLocation();
  return (
    <>
      {location.pathname != "/" && (
        <>
          <TopNav />
        </>
      )}
      <div className="content-main  container">
        {location.pathname != "/" && (
          <>
            <SideNav />
          </>
        )}
        <Routes>
          {/* <Route exact path="/" element={<App />} /> */}
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="Admin/dash" element={<Dash />} />
          <Route exact path="Admin/EmployeeList" element={<EmployeeList />} />
          <Route exact path="Admin/AddEmployee" element={<AddEmployee />} />
          <Route
            exact
            path="/Admin/EmployeeList/Admin/UpdateEmployee"
            element={<UpdateEmployee />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
