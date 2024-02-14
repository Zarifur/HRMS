import React from "react";
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <>
      <nav className="pcoded-navbar menupos-fixed menu-light ">
        <div className="navbar-wrapper content-main  container">
          <div className="navbar-content scroll-div ">
            <ul className="nav pcoded-inner-navbar ">
              <li className="nav-item pcoded-menu-caption">
                <label>Dashboard</label>
              </li>
              <li className="nav-item">
                <Link to="Admin/dash" className="nav-link">
                  <span className="pcoded-micon">
                    <i className="feather icon-users"></i>
                  </span>
                  <span className="pcoded-mtext">Dashbord</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Admin/EmployeeList" className="nav-link">
                  <span className="pcoded-micon">
                    <i className="feather icon-users"></i>
                  </span>
                  <span className="pcoded-mtext">Employee List</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Admin/AddEmployee" className="nav-link">
                  <span className="pcoded-micon">
                    <i className="feather icon-users"></i>
                  </span>
                  <span className="pcoded-mtext">Add Employee</span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="Admin/UpdateEmployee" className="nav-link">
                  <span className="pcoded-micon">
                    <i className="feather icon-users"></i>
                  </span>
                  <span className="pcoded-mtext">Update Employee</span>
                </Link>
              </li> */}

              {/* <li className="nav-item pcoded-menu-caption">
                <label>Payment</label>
              </li>
              <li className="nav-item">
                <a href="index-analytics.html" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-activity"></i>
                  </span>
                  <span className="pcoded-mtext">Update Payment</span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
