import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import * as Yup from "yup";
import mailImg from "./images/pngkit_reset-png_3367222.png";
import { ErrorMessage, Formik, Form, Field } from "formik";

export default function ResetPassword(props) {
  const [show, setShow] = useState({ alert: false, succeed: false });
  const [Msg, setMsg] = useState("");
  const history = useHistory();

  return (
    <>
      <section class="sign-in-page">
        <div class="container p-0" id="sign-in-page-box">
          {!show.succeed ? (
            <>
              <div class="bg-white form-container sign-in-container">
                <div class="sign-in-page-data w-100 ">
                  <div class="sign-in-from w-100 m-auto">
                    <h1 class="mb-3 text-center d-block">Reset Password</h1>
                    <p class="text-dark">
                      Enter a new password for your account.
                    </p>
                    <Formik
                      initialValues={{
                        password: "",
                        confirm_password: "",
                      }}
                      validationSchema={Yup.object().shape({
                        password: Yup.string()
                          .min(6, "Password must be of 6 characters")
                          .required("Password Required"),
                        confirm_password: Yup.string()
                          .oneOf(
                            [Yup.ref("password"), null],
                            "Password do not match"
                          )
                          .required("Password Required"),
                      })}
                      onSubmit={async (values, { resetForm }) => {
                        await axios
                          .put("http://localhost:5000/api/resetPassword", {
                            resetLink: props.match.params.id,
                            newPass: values.password,
                          })
                          .then((response) => {
                            setShow({ alert: false, succeed: true });
                            setMsg(response.data);
                            resetForm();
                          })
                          .catch((err) => {
                            setMsg(err.response.data.message);
                            if (
                              err.response.data.message ===
                              "Incorrect token or it is expiredJsonWebTokenError: invalid token"
                            ) {
                              setMsg("Incorrect token or it is expired");
                            }
                            console.log(err.response.data.message);
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
                            <form onSubmit={handleSubmit} class="mt-4">
                              <div class="form-group md-50">
                                <label for="email">Enter New Password</label>
                                <input
                                  type="password"
                                  name="password"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.password}
                                  placeholder="Enter Password"
                                  class={
                                    touched.password && errors.password
                                      ? "form-control is-invalid invalid"
                                      : "form-control"
                                  }
                                />
                                {errors.password && (
                                  <p class="invalid-feedback">
                                    {errors.password}
                                  </p>
                                )}
                              </div>
                              <div class="form-group md-50">
                                <label for="email">Confirm Password *</label>
                                <input
                                  type="password"
                                  name="confirm_password"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.confirm_password}
                                  placeholder="Confirm Password"
                                  class={
                                    touched.confirm_password &&
                                    errors.confirm_password &&
                                    !errors.password
                                      ? "form-control is-invalid invalid"
                                      : "form-control"
                                  }
                                />
                                {!errors.password &&
                                  errors.confirm_password && (
                                    <p class="invalid-feedback">
                                      {errors.confirm_password}
                                    </p>
                                  )}
                              </div>
                              <br></br>
                              <div class="d-inline-block w-100">
                                <button
                                  type="submit"
                                  class="btn btn-primary float-right"
                                >
                                  Confirm
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
