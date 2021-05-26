import React, { useState, useEffect } from "react";
import "./AdminPanel.css";
import "../components/css/bootstrap.min.css";
import "../components/css/style.css";
import "../components/css/responsive.css";
import "../components/css/animate.css";
import "../components/css/select2.min.css";
import "../components/css/typography.css";
import { Pagination } from "@material-ui/lab";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
export default function UserTable() {
  const [users, setUser] = useState([]);
  const [Page, setPage] = useState(1);
  const [TotalPages, setTotalPages] = useState();
  const [Sorted, setSorted] = useState(false);
  const [show, setShow] = useState(true);
  const [search, setSearch] = useState({ text: "" });
  const [id, setId] = useState();
  const [updateIndex, setUpdateIndex] = useState();
  let history = useHistory();
  let { path, url } = useRouteMatch();
  console.log("url", url);
  console.log("path", path);
  useEffect(() => {
    if (search.text === "") {
      getUsers(Page);
    }
    if (search.text !== "") {
      SearchAPI();
    }
  }, [search]);

  async function getUsers(pageno) {
    await axios
      .get(`http://localhost:5000/api/pagiUsers/${pageno}`)
      .then((res) => {
        console.log("API", res);
        setUser(res.data.Users);
        setTotalPages(res.data.totalPages);
      });
  }

  const handleChange = (item, page) => {
    getUsers(page);
    setPage(page);
  };

  async function SearchBar(e) {
    setSearch({ text: e.target.value });
  }

  async function SearchAPI() {
    await axios
      .post("http://localhost:5000/api/getUser", { firstName: search.text })
      .then((resp) => {
        if (resp.data != "") {
          setUser([resp.data]);
        }
        console.log(resp.data, " Reasponse");
        console.log(search);
      });
  }

  const SortUsers = async () => {
    await axios.get("http://localhost:5000/api/sortUsers").then((resp) => {
      console.log(resp);
      setSorted(true);
      setUser(resp.data);
    });
  };

  const deleteUser = async (id) => {
    await axios
      .post(`http://localhost:5000/api/deleteUser/${id}`)
      .then((resp) => {
        console.log(resp, "deleted");
        if (Sorted == true) {
          SortUsers();
        } else {
          getUsers(Page);
        }
      });
  };
  const ActivateStatus = async (i) => {
    await axios
      .put("http://localhost:5000/api/activateAndDeactivateUser", {
        email: users[i].email,
        isActive: !users[i].isActive,
      })
      .then((resp) => {
        console.log(resp, "console");
        if (Sorted == true) {
          SortUsers();
        } else {
          getUsers(Page);
        }
      });
  };

  function selectUser(id, index) {
    setShow(false);
    setUpdateIndex(index);
    setId(id);
  }

  const JoinDate = (i) => {
    var origDateFormat = users[i].createdAt;
    var newDateFormat = moment(origDateFormat).format("DD-M-YYYY");
    return newDateFormat;
  };

  const UpdateUser = async (e) => {
    e.preventDefault();
    await axios
      .patch(`http://localhost:5000/api/updateUser/${id}`, {
        firstName: users[updateIndex].firstName,
        lastName: users[updateIndex].lastName,
        email: users[updateIndex].email,
      })
      .then((resp) => {
        console.log(resp, " resp");
        getUsers(Page);
        setShow(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const InputEvent = (e) => {
    const { id, value } = e.target;
    var item = [...users];
    if (id == "firstName") {
      item[updateIndex].firstName = value;
    }
    if (id == "lastName") {
      item[updateIndex].lastName = value;
    }
    if (id == "email") {
      item[updateIndex].email = value;
    }
    setUser(item);
  };
  return (
    <>
      {show ? (
        <>
          <div id="content-page" class="content-page">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-12">
                  <div class="iq-card">
                    <div class="iq-card-header d-flex justify-content-between">
                      <div class="iq-header-title">
                        <h4 class="card-title">User List</h4>
                      </div>
                    </div>
                    <div class="iq-card-body">
                      <div class="table-responsive">
                        <div class="row justify-content-between">
                          <div class="col-sm-12 col-md-6">
                            <div
                              id="user_list_datatable_info"
                              class="dataTables_filter"
                            >
                              <form class="mr-3 position-relative">
                                <div class="form-group mb-0">
                                  <input
                                    type="search"
                                    class="form-control"
                                    value={search.text}
                                    onChange={SearchBar}
                                    id="exampleInputSearch"
                                    placeholder="Search"
                                    aria-controls="user-list-table"
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-6">
                            <div class="user-list-files d-flex float-right">
                              <a
                                onClick={SortUsers}
                                class="iq-bg-primary"
                                href="javascript:void();"
                              >
                                Sort List
                              </a>
                            </div>
                            <div class="user-list-files d-flex float-right">
                              <Link to="/AdminPanel/AddUser"><a class="iq-bg-primary" href="javascript:void();">
                                <i class="las la-plus mr-1"></i>
                                Add User
                              </a></Link>
                            </div>
                          </div>
                        </div>
                        <table
                          id="user-list-table"
                          class="table table-striped table-bordered mt-4"
                          role="grid"
                          aria-describedby="user-list-page-info"
                        >
                          <thead>
                            <tr>
                              <th></th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Role</th>
                              <th>JoinDate</th>
                              <th>Activate/Deactivate</th>
                              <th>Operations</th>
                            </tr>
                          </thead>
                          <tbody class="text-center">
                            {users.map((item, i) => {
                              return (
                                <tr key={i}>
                                  <td>{5 * (Page - 1) + i + 1}</td>
                                  <td>
                                    {item.firstName} <br></br>&nbsp;
                                    {item.lastName}
                                  </td>
                                  <td>{item.email}</td>
                                  <td>
                                    {item.isAdmin ? (
                                      <span class="badge iq-bg-danger">
                                        Admin
                                      </span>
                                    ) : (
                                      <span class="badge iq-bg-warning">
                                        User
                                      </span>
                                    )}
                                  </td>
                                  <td class="text-align-center">
                                    {JoinDate(i)}
                                  </td>
                                  <td class="text-center">
                                    {item.isActive ? (
                                      <span
                                        style={{ cursor: "pointer" }}
                                        onClick={() => ActivateStatus(i)}
                                        class="badge iq-bg-success"
                                      >
                                        Activated
                                      </span>
                                    ) : (
                                      <span
                                        style={{ cursor: "pointer" }}
                                        onClick={() => ActivateStatus(i)}
                                        class="badge iq-bg-danger"
                                      >
                                        Deactivated
                                      </span>
                                    )}
                                  </td>
                                  <td>
                                    <div class="d-flex align-items-center justify-content-center list-user-action">
                                      <a
                                        class="iq-bg-primary"
                                        onClick={() => selectUser(item._id, i)}
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Edit"
                                        data-original-title="Edit"
                                      >
                                        <i class="ri-pencil-line"></i>
                                      </a>
                                      <a
                                        class="iq-bg-primary"
                                        onClick={() => deleteUser(item._id)}
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Delete"
                                        data-original-title="Delete"
                                      >
                                        <i class="ri-delete-bin-line"></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      <div class="row justify-content-between mt-3">
                        <div id="user-list-page-info" class="col-md-6"></div>
                        <Pagination
                          class="pagination"
                          count={TotalPages}
                          variant="outlined"
                          color="secondary"
                          onChange={handleChange}
                          color="primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer class="iq-footer">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6">
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                      <a href="privacy-policy.html">Privacy Policy</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="terms-of-service.html">Terms of Use</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 text-right">
                  Copyright 2020 <a href="#">Astrology</a> All Rights Reserved.
                </div>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <>
          <div class="content-page" style={{ "margin-top": "40px" }}>
            <div class="iq-card">
              <div class="iq-card-header d-flex justify-content-between">
                <div class="iq-header-title">
                  <h4 class="card-title d-flex align-items-center">
                    <i
                      style={{ "font-size": "30px" }}
                      onClick={() => {
                        setShow(true);
                      }}
                      class="ri-arrow-left-s-line "
                    ></i>
                    &nbsp;<span>Update User Information</span>
                  </h4>
                </div>
              </div>
              <div class="iq-card-body">
                <div class="new-user-info">
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={Yup.object().shape({
                      email: Yup.string()
                        .email("Invalid Email Address")
                        .required("Email Required"),
                    })}
                    onSubmit={() => {
                      UpdateUser;
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleBlur,
                      handleChange,
                      isSubmitting,
                      handleSubmit,
                      isValid,
                      dirty,
                    }) => {
                      return (
                        <>
                          <form>
                            <div class="row">
                              <div class="form-group col-md-6">
                                <label for="fname">First Name:</label>
                                <input
                                  type="text"
                                  value={users[updateIndex].firstName}
                                  onChange={InputEvent}
                                  class="form-control"
                                  id="firstName"
                                  placeholder="First Name"
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label for="lname">Last Name:</label>
                                <input
                                  type="text"
                                  value={users[updateIndex].lastName}
                                  onChange={InputEvent}
                                  class="form-control"
                                  id="lastName"
                                  placeholder="Last Name"
                                />
                              </div>
                              <div class="form-group col-sm-12">
                                <label>Zodiac:</label>
                                <select
                                  style={{ height: "43px" }}
                                  onChange={InputEvent}
                                  class="form-control"
                                  id="selectzodiac"
                                >
                                  <option>Select Zodiac</option>
                                  <option>Aries (Ram)</option>
                                  <option>Taurus (Bull)</option>
                                  <option>Gemini (Twins)</option>
                                  <option>Cancer (Crab)</option>
                                  <option>Leo (Lion)</option>
                                  <option>Virgo (Virgin)</option>
                                  <option>Libra (Balance)</option>
                                  <option>Scorpius (Scorpion)</option>
                                  <option>Sagittarius (Archer)</option>
                                  <option>Capricornus (Goat)</option>
                                  <option>Aquarius (Water Bearer)</option>
                                  <option>Pisces (Fish)</option>
                                </select>
                              </div>
                              <div class="form-group col-md-6">
                                <label for="add1">Street Address 1:</label>
                                <input
                                  type="text"
                                  onChange={() => InputEvent}
                                  class="form-control"
                                  id="add1"
                                  placeholder="Street Address 1"
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label for="add2">Street Address 2:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  onChange={() => InputEvent}
                                  id="add2"
                                  placeholder="Street Address 2"
                                />
                              </div>
                              <div class="form-group col-md-12">
                                <label for="city">Town/City:</label>
                                <input
                                  type="text"
                                  onChange={() => InputEvent}
                                  class="form-control"
                                  id="city"
                                  placeholder="Town/City"
                                />
                              </div>
                              <div class="form-group col-sm-12">
                                <label>Country:</label>
                                <select
                                  style={{ height: "43px" }}
                                  class="form-control"
                                  onChange={InputEvent}
                                  id="selectcountry"
                                >
                                  <option>Select Country</option>
                                  <option>Canada</option>
                                  <option>Dubai</option>
                                  <option>USA</option>
                                  <option>India</option>
                                  <option>Africa</option>
                                </select>
                              </div>
                              <div class="form-group col-md-6">
                                <label for="mobno">Mobile Number:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="mobno"
                                  placeholder="Mobile Number"
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label for="altconno">Alternate Contact:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="altconno"
                                  placeholder="Alternate Contact"
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label for="email">Email:</label>
                                <input
                                  type="email"
                                  value={users[updateIndex].email}
                                  onChange={InputEvent}
                                  class="form-control"
                                  id="email"
                                  placeholder="Email"
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label for="pno">Pin Code:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="pno"
                                  placeholder="Pin Code"
                                />
                              </div>
                            </div>
                            <br></br>
                            <button
                              onClick={UpdateUser}
                              style={{ padding: " 5px 14px" }}
                              class="btn btn-primary"
                            >
                              Update
                            </button>
                            <button
                              style={{
                                marginLeft: "15px",
                                padding: " 5px 14px",
                              }}
                              onClick={() => setShow(true)}
                              class="btn iq-bg-danger"
                            >
                              Cancel
                            </button>
                          </form>
                        </>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
