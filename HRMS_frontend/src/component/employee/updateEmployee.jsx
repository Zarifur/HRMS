import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Validation from "./Validation";

export default function UpdateEmployee() {
  let { state } = useLocation();
  var url = "https://localhost:44368/api/employee/get/" + state.Uval;
  const [emp, setdata] = useState([]);
  var obj;
  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data);
        setdata(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const Submit = () => {
    // var obj = { email: values.email, Name: values.Name };
    // console.log(obj);
    // axios
    //   .get("https://localhost:44368/api/employee/update", obj)
    //   .then((resp) => {
    //     var data = resp.data;
    //     localStorage.setItem("user", JSON.stringify(data));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  const { handleChange, values, errors, submitErrors, handleSubmit } =
    Validation(Submit);
  return (
    <>
      <section className="pcoded-main-container">
        <div className="pcoded-content">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>Form Validation</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Name</label>
                          <input
                            id="Name"
                            type="text"
                            className="form-control"
                            name="Name"
                            placeholder="Name"
                            value={emp.Name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Email</label>
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            value={emp.Email}
                            onChange={handleChange}
                            disabled
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            name="Address"
                            placeholder="Address"
                            value={emp.Address}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            name="validation-phone"
                            placeholder="Phone: (999) 999-9999"
                            value={emp.PhoneNumber}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Gender</label>
                          <select
                            className="form-control"
                            name="validation-select"
                            value={emp.Gender}
                          >
                            <option value disabled selected>
                              Select
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Position</label>
                          <input
                            type="text"
                            className="form-control"
                            name="validation-url"
                            placeholder="Position"
                            value={emp.Position}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Salary</label>
                          <input
                            type="text"
                            className="form-control"
                            name="validation-phone"
                            placeholder="0000"
                            value={emp.Salary}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Department</label>
                          <input
                            type="text"
                            className="form-control"
                            name="validation-url"
                            placeholder="Department"
                            value={emp.Depertment}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">join Date</label>
                          <input
                            type="text"
                            name="birthday"
                            placeholder="YYYY/MM/DD"
                            className="form-control"
                            value={emp.joined}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn  btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
