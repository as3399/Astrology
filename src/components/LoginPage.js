import "../AdminDashboard/AdminPanel.css";
import "./LoginPage.css";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Alert } from "@material-ui/lab";
import { Formik } from "formik";
import * as Yup from "yup";
import { MdError } from "react-icons/md";
import Navbar from "./NavBar";

 function LoginPage() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [Msg, setMsg] = useState("");



  return (
    <div class="super_container">
      <>
        <Navbar />
         <div class="container">
          <div class="main">
            <h3>Login</h3>
          </div>
          {show ? (
            <Alert
              open="false"
              className="Alert"
              variant="filled"
              severity="error"
            >
              <span> {Msg}</span>
            </Alert>
          ) : null}
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Invalid Email Address")
                .required("Email Required"),
              password: Yup.string()
                .min(6, "Password must of 6 characters")
                .required("Password Required"),
            })}
            onSubmit={async (values) => {
              console.log(values);
              await axios
                .post("http://localhost:5000/api/logIn", {
                  email: values.email,
                  password: values.password,
                })
                .then((response) => {
                  console.log(response);
                  if (
                    response.data.message == "Welcome to the admin dashboard"
                  ) {
                    history.push("/AdminDashboard");
                  }
                  if (
                    response.data.message == "Welcome to the user dashboard"
                  ) {
                    history.push("/UserDashboard");
                  }
                })
                .catch((error) => {
                  setMsg(error.response.data.message, "error");
                  if (error.response.status >= 400) {
                    setShow(true);
                  }
                });
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
            }) => {
              return (
                <form class="frm" onSubmit={handleSubmit}>
                  <div class="frm_container">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      placeholder="Enter Email"
                      onBlur={handleBlur}
                      value={values.email}
                      className={
                        errors.email && touched.email ? "has-error" : "input"
                      }
                    />
                    {errors.email && touched.email ? (
                      <div className="err_msg">
                        <MdError />
                        &nbsp;{errors.email}
                      </div>
                    ) : null}
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      placeholder="Enter Password"
                      value={values.password}
                      onBlur={handleBlur}
                      className={
                        touched.password && errors.password
                          ? "has-error"
                          : "input"
                      }
                    />
                    {errors.password && touched.password && (
                      <div className="err_msg">
                        <MdError />
                        &nbsp;{errors.password}
                      </div>
                    )}
                    <button
                      type="submit"
                      class="frmbtn"
                      style={{ cursor: "pointer" }}
                      value="Login"
                    >
                      Login
                    </button>
                    <Link to="/forgetPswd">
                      <div class="forget_pswd">Forgot Password ?</div>
                    </Link>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </>
    </div>
  );
}
export default LoginPage;
// export {isLogin};