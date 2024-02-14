import React from "react";
import ava from "../../assets/images/avatar-2.jpg";
export default function TopNav() {
  return (
    <>
      <header className="navbar pcoded-header navbar-expand-lg navbar-light headerpos-fixed">
        <div className="content-main  container">
          <div className="m-header">
            <a className="mobile-menu" id="mobile-collapse" href="#!">
              <span></span>
            </a>
            <a href="index.html" className="b-brand">
              <img src="assets/images/logo-dark.png" alt="" className="logo" />
            </a>
            <a href="#!" className="mob-toggler">
              <i className="feather icon-more-vertical"></i>
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="#!" className="pop-search">
                  <i className="feather icon-search"></i>
                </a>
                <div className="search-bar">
                  <div className="container position-relative">
                    <input
                      type="text"
                      className="form-control border-0 shadow-none"
                      placeholder="Search here"
                    />
                    <button type="button" className="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <a
                    className="dropdown-toggle h-drop"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Dropdown
                  </a>
                  <div className="dropdown-menu profile-notification ">
                    <ul className="pro-body">
                      <li>
                        <a href="user-profile.html" className="dropdown-item">
                          <i className="fas fa-circle"></i> Profile
                        </a>
                      </li>
                      <li>
                        <a href="email_inbox.html" className="dropdown-item">
                          <i className="fas fa-circle"></i> My Messages
                        </a>
                      </li>
                      <li>
                        <a href="auth-signin.html" className="dropdown-item">
                          <i className="fas fa-circle"></i> Lock Screen
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li>
                <div className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="icon feather icon-bell"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right notification">
                    <div className="noti-head">
                      <h6 className="d-inline-block m-b-0">Notifications</h6>
                      <div className="float-right">
                        <a href="#!" className="m-r-10">
                          mark as read
                        </a>
                        <a href="#!">clear all</a>
                      </div>
                    </div>
                    <ul className="noti-body">
                      <li className="notification">
                        <div className="media">
                          <img
                            className="img-radius"
                            src="assets/images/user/avatar-1.jpg"
                            alt="Generic placeholder image"
                          />
                          <div className="media-body">
                            <p>
                              <strong>Sara Soudein</strong>
                              <span className="n-time text-muted">
                                <i className="icon feather icon-clock m-r-10"></i>
                                12 min
                              </span>
                            </p>
                            <p>currently login</p>
                          </div>
                        </div>
                      </li>
                      <li className="notification">
                        <div className="media">
                          <img
                            className="img-radius"
                            src="assets/images/user/avatar-2.jpg"
                            alt="Generic placeholder image"
                          />
                          <div className="media-body">
                            <p>
                              <strong>Joseph William</strong>
                              <span className="n-time text-muted">
                                <i className="icon feather icon-clock m-r-10"></i>
                                30 min
                              </span>
                            </p>
                            <p>Prchace New Theme and make payment</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="noti-footer">
                      <a href="#!">show all</a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown drp-user">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <img
                      src={ava}
                      className="img-radius"
                      alt="User-Profile-Image"
                    />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right profile-notification">
                    <div className="pro-head">
                      <img
                        src={ava}
                        className="img-radius"
                        alt="User-Profile-Image"
                      />
                      <span>John Doe</span>
                      <a
                        href="auth-signin.html"
                        className="dud-logout"
                        title="Logout"
                      >
                        <i className="feather icon-log-out"></i>
                      </a>
                    </div>
                    <ul className="pro-body">
                      <li>
                        <a href="user-profile.html" className="dropdown-item">
                          <i className="feather icon-user"></i> Profile
                        </a>
                      </li>
                      <li>
                        <a href="email_inbox.html" className="dropdown-item">
                          <i className="feather icon-mail"></i> My Messages
                        </a>
                      </li>
                      <li>
                        <a href="auth-signin.html" className="dropdown-item">
                          <i className="feather icon-lock"></i> Lock Screen
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
