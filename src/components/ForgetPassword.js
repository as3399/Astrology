import "./SignUp.css";
import axios from "axios";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./AdminDashboard/Imports";
import Navbar from "./NavBar";
import mailImg from "./images/login/mail.png";
export default function ForgetPassword() {
  const [show, setShow] = useState({ alert: false, succeed: false });
  const [Msg, setMsg] = useState("");

  return (
    <>
      <section class="sign-in-page">
        <div class="container p-0" id="sign-in-page-box">
          {!show.succeed ? (
            <>
              <div class="bg-white form-container sign-in-container">
                <div class="sign-in-page-data ">
                  <div class="sign-in-from w-100 m-auto">
                    <h1 class="mb-3 text-center d-block">Forgot Password</h1>
                    <p class="text-dark">
                      Enter your email address and we'll send you an email with
                      instructions to reset your password.
                    </p>
                    <Formik
                      initialValues={{ email: "" }}
                      validationSchema={Yup.object().shape({
                        email: Yup.string()
                          .email("Enter valid Email Address")
                          .required("Email Required"),
                      })}
                      onSubmit={async (values, { resetForm }) => {
                        await axios
                          .put("http://localhost:5000/api/forgotPassword", {
                            email: values.email,
                          })
                          .then((response) => {
                            setMsg(values.email);
                            setShow({ alert: false, succeed: true });
                            resetForm();
                          })
                          .catch((error) => {
                            setMsg(error.response.data.message);
                            setShow({ alert: true, succeed: false });
                          });
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                      }) => {
                        return (
                          <>
                            {show.alert ? (
                              <div class="alert alert-danger" role="alert">
                                <div class="iq-alert-icon">
                                  <i class="ri-information-line"></i>
                                </div>
                                <div class="iq-alert-text">{Msg}</div>
                              </div>
                            ) : null}

                            <form class="mt-4" onSubmit={handleSubmit}>
                              <div class="form-group md-50">
                                <label for="email">Email address: *</label>
                                <input
                                  name="email"
                                  id="email"
                                  value={values.email}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  class={
                                    touched.email && errors.email
                                      ? "form-control is-invalid invalid"
                                      : "form-control"
                                  }
                                />
                                {errors.email && (
                                  <p class="invalid-feedback">{errors.email}</p>
                                )}
                              </div>
                              <br></br>
                              <div class="d-inline-block w-100">
                                <button
                                  type="submit"
                                  class="btn btn-primary float-right"
                                >
                                  Reset Password
                                </button>
                              </div>
                            </form>
                          </>
                        );
                      }}
                    </Formik>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div class="bg-white form-container sign-in-container">
              <div class="sign-in-page-data">
                <div class="sign-in-from w-100 m-auto">
                  <div class="sign-in-from">
                    <img src={mailImg} width="80" alt="" />
                    <h1 class="mt-3 mb-0">Success !</h1>
                    <p class="text-dark">
                      A email has been send to {Msg} <br></br>
                      Please check for an email from company and click on the
                      included link to reset your password.
                    </p>
                    <div class="d-inline-block w-100">
                      <button type="submit" class="btn btn-primary mt-3">
                        Back to Home
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1 class="text-danger text-uppercase">Astrology</h1>
                <a class="sign-in-logo mb-5" href="#"></a>
                <p>
                  To Keep connected with us please login with your personal info
                </p>
                <button class="btn iq-border-primary mt-2" id="signIn">
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1 class="text-danger text-uppercase">Astrology</h1>
                <a class="sign-in-logo mb-5" href="#"></a>
                <p>Enter your personal details and start journey with us</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
