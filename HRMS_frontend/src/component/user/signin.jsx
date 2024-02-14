import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SignInValidation from "./SignInValidation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function signin() {
  const navigate = useNavigate();
  const [dberror, setDberror] = useState("");

  const formLogin = () => {
    //Write your code here
    var obj = { email: values.email, password: values.password };
    axios
      .post("https://localhost:44368/api/login", obj)
      .then((resp) => {
        var data = resp.data;
        localStorage.setItem("user", JSON.stringify(data));
        let user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        if (user.UId != null) {
          setTimeout(() => {
            window.location.reload(false);
          }, 500);
          navigate("/Admin/dash");
          console.log(user.user_type);
        } else {
          setDberror("Invalid Input");
        }
      })
      .catch((err) => {
        setDberror("Invalid Input");
        console.log(err);
      });
  };
  const { handleChange, values, errors, submitErrors, handleSubmit } =
    SignInValidation(formLogin);
  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-content text-center">
          <img
            src="assets/images/logo-dark.png"
            alt=""
            className="img-fluid mb-4"
          />
          <div className="card">
            <div className="row align-items-center">
              <div className="col-md-12">
                <form onSubmit={handleSubmit}>
                  <div className="card-body">
                    <h4 className="mb-3 f-w-400">Signin</h4>
                    <div className="input-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                        id="email"
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-group mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        id="password"
                        name="password"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group text-left mt-2">
                      <div className="checkbox checkbox-primary d-inline">
                        <input
                          type="checkbox"
                          name="checkbox-fill-1"
                          id="checkbox-fill-a1"
                          defaultChecked
                        />
                        <label htmlFor="checkbox-fill-a1" className="cr">
                          {" "}
                          Save credentials
                        </label>
                      </div>
                    </div>
                    <button className="btn btn-block btn-primary mb-4 rounded-pill">
                      Signin
                    </button>
                    <p className="mb-2 text-muted">
                      Forgot password?{" "}
                      <a href="auth-reset-password.html" className="f-w-400">
                        Reset
                      </a>
                    </p>
                    <p className="mb-0 text-muted">
                      Don’t have an account?{" "}
                      <a href="auth-signup.html" className="f-w-400">
                        Signup
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="saprator my-4">
              <span>OR</span>
            </div>
            <button className="btn text-white bg-facebook mb-2 mr-2  wid-40 px-0 hei-40 rounded-circle">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="btn text-white bg-googleplus mb-2 mr-2 wid-40 px-0 hei-40 rounded-circle">
              <i className="fab fa-google-plus-g"></i>
            </button>
            <button className="btn text-white bg-twitter mb-2  wid-40 px-0 hei-40 rounded-circle">
              <i className="fab fa-twitter"></i>
            </button>
          </div>
        </div>
        <svg
          width="100%"
          height="250px"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="wave bg-wave"
        >
          <title>Wave</title>
          <defs></defs>
          <path id="feel-the-wave" d="" />
        </svg>
        <svg
          width="100%"
          height="250px"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="wave bg-wave"
        >
          <title>Wave</title>
          <defs></defs>
          <path id="feel-the-wave-two" d="" />
        </svg>
        <svg
          width="100%"
          height="250px"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="wave bg-wave"
        >
          <title>Wave</title>
          <defs></defs>
          <path id="feel-the-wave-three" d="" />
        </svg>
      </div>
    </>
  );
}

export default signin;
