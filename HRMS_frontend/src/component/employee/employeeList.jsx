import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import ava from "../../assets/user1.png";

export default function EmployeeList() {
  const [data, setdata] = useState([]);
  var obj;
  useEffect(() => {
    axios
      .get("https://localhost:44368/api/employee/get")
      .then((resp) => {
        console.log(resp.data);
        setdata(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //   axios
  //     .get("https://localhost:44368/api/employee/get", obj)
  //     .then((resp) => {
  //       setdata(resp.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  return (
    <>
      <div className="pcoded-main-container">
        <div className="row">
          <div className="col-sm-12">
            <div className="tab-content">
              <div
                className="modal fade add-members"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel3"
                aria-hidden="true"
              ></div>
              <div
                className="modal fade edit-member"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
              >
                <div className="modal-dialog modle-510">
                  <div className="modal-content">
                    <div className="modal-header pl-5 pt-5 pr-5 pb-0">
                      <h4 className="modal-title text-uppercase font-weight-bold">
                        edit member
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        ×
                      </button>
                    </div>
                    <div className="modal-body  p-5">
                      <div className="form-group row">
                        <label className="control-label  text-dark font-weight-bold col-md-4">
                          Profile photo
                        </label>
                        <div className="col-md-8">
                          <div className="row">
                            <div className="col-2">
                              <div className="round-img">
                                <img
                                  src="assets/images/user/avatar-2.jpg"
                                  alt="user"
                                  className="img-radius"
                                />
                              </div>
                            </div>
                            <div className="col-9">
                              {" "}
                              <i
                                className="fa fa-upload text-light-blue"
                                aria-hidden="true"
                              ></i>{" "}
                              <span className="text-light-blue">
                                Upload photo
                              </span>
                              <br />
                              <span className="op-4">not more 1 Mb </span>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="text-dark font-weight-bold col-md-4">
                          Name
                        </label>
                        <div className="col-md-8">
                          <input
                            type="text"
                            placeholder="Name"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="text-dark font-weight-bold col-md-4">
                          Surname
                        </label>
                        <div className="col-md-8">
                          <input
                            type="text"
                            placeholder="Surname"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="text-dark font-weight-bold col-md-4">
                          Position
                        </label>
                        <div className="col-md-8">
                          <input
                            type="text"
                            placeholder="Surname"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="text-dark font-weight-bold col-md-4">
                          Email address
                        </label>
                        <div className="col-md-8">
                          <input
                            type="text"
                            placeholder="Email address"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="text-dark font-weight-bold col-md-4">
                          Phone number
                        </label>
                        <div className="col-md-8">
                          <input
                            type="text"
                            placeholder="Phone number"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="modal-footer  p-4">
                      <button
                        type="button"
                        className="btn btn-rounded btn-success"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="btn btn-rounded  btn-secondary"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3 col-md-3 col-lg-3">
                      <h5 className="card-title float-left align-self-center text-uppercase">
                        Employee
                      </h5>
                    </div>
                    <div className="col-sm-9 col-md-9 col-lg-9 mb-4">
                      <div className="float-right d-none d-xl-inline-block d-lg-inline-block">
                        <div className="search">
                          {" "}
                          <span className="fa fa-search"></span>
                          <input placeholder="Search.." />
                        </div>
                        <a
                          data-toggle="modal"
                          href="#"
                          data-target=""
                          className="btn waves-effect waves-light btn-rounded btn-primary float-right ml-4"
                        >
                          Add Employee
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="clearfix"></div>
                  <div className="table-responsive">
                    <table className="table color-table primary-table">
                      <thead>
                        <tr>
                          <th> </th>
                          <th>Member</th>
                          <th>Posistion</th>
                          <th>Email address</th>
                          <th>Phone</th>
                          <th> </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr></tr>
                        {console.log(data)}
                        {data.map((data, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                <div className="round-img">
                                  <img
                                    src={ava}
                                    alt="user"
                                    className="img-radius"
                                  />
                                </div>
                              </td>
                              <td className="font-bold"> {data.Name} </td>
                              <td>{data.Position}</td>
                              <td>{data.Email}</td>
                              <td>{data.PhoneNumber}</td>
                              <td className="text-light-blue">
                                <a
                                  href="#"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-v"></i>
                                </a>
                                <div className="dropdown-menu">
                                  {" "}
                                  {/* <a
                                    className="dropdown-item"
                                    data-toggle="modal"
                                    href="#"
                                    data-target=".edit-member"
                                  >
                                    Edit
                                  </a> */}
                                  <Link
                                    to="Admin/UpdateEmployee"
                                    state={{ Uval: data.UId }}
                                    className="dropdown-item"
                                    data-toggle="modal"
                                    data-target=".edit-member"
                                  >
                                    <span className="pcoded-mtext">
                                      Update Employee
                                    </span>
                                  </Link>{" "}
                                  <a className="dropdown-item" href="">
                                    Send Message
                                  </a>{" "}
                                  <a
                                    className="dropdown-item text-light-danger"
                                    href="#"
                                    state={{ Uval: data.UId }}
                                    //onClick={DeleteEmployee(data.UId)}
                                  >
                                    Delete
                                  </a>{" "}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-md-6 text-right page-n">
                      Prev{" "}
                      <a href="#" className="active">
                        1
                      </a>{" "}
                      <a href="#">2</a> <a href="#">3</a> ... <a href="#">10</a>{" "}
                      <a href="#">11</a> <a href="#">12</a> <a href="#">Next</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  //   function DeleteEmployee(ob) {
  //     console.log("Hello");
  //     let { state } = useLocation();

  //     console.log(state.Uval);
  //     // axios
  //     //   .get("https://localhost:44368/api/employee/update", obj)
  //     //   .then((resp) => {
  //     //     var data = resp.data;
  //     //     localStorage.setItem("user", JSON.stringify(data));
  //     //   })
  //     //   .catch((err) => {
  //     //     console.log(err);
  //     //   });
  //   }
}
