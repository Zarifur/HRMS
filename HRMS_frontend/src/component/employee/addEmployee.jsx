import React, { useState, useEffect } from "react";
import axios from "axios";
import Validation from "./Validation";

export default function AddEmployee() {
  const Submit = () => {
    var obj = {
      email: values.Email,
      Name: values.Name,
      password: values.password,
      Address: values.Address,
      PhoneNumber: values.Phone,
      Gender: values.Gender,
      Position: values.Position,
      Salary: values.Salary,
      Depertment: values.Depertment,
      joined: values.joined,
    };
    console.log(obj);
    axios
      .post("https://localhost:44368/api/employee/add", obj)
      .then((resp) => {
        var data = resp.data;
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
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
                  <h5>Add Employee</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="Name"
                            id="Name"
                            placeholder="Name"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Email</label>
                          <input
                            type="Email"
                            className="form-control"
                            name="Email"
                            id="Email"
                            placeholder="Email"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">password</label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="password"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Confirm password</label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="Confirm password"
                            onChange={handleChange}
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
                            id="Address"
                            placeholder="Address"
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
                            name="Phone"
                            id="Phone"
                            placeholder="Phone: 016 9999-9999"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Gender</label>
                          <select
                            className="form-control"
                            name="Gender"
                            id="Gender"
                            onChange={handleChange}
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
                            name="Position"
                            id="Position"
                            placeholder="Position"
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
                            name="Salary"
                            id="Salary"
                            placeholder="0000"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Depertment</label>
                          <input
                            type="text"
                            className="form-control"
                            name="Depertment"
                            id="Depertment"
                            placeholder="Depertment"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">join Date</label>
                          <input
                            type="date"
                            name="joined"
                            id="joined"
                            //value="10/24/1984"
                            className="form-control"
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
