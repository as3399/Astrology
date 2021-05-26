import "../../AdminDashboard/AdminPanel";
import "../LoginPage.css";
import "../SignUp.css";
import axios from "axios";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Alert } from "@material-ui/lab";
import Navbar from "../NavBar";
import { MdError } from "react-icons/md";

export default function ForgetPassword(props) {
  const [show, setShow] = useState({ alert: false, succeed: false });
  const [Msg, setMsg] = useState("");

  return (
      <div class="super_container">
    <>
        <Navbar />
        <div class="container">
          <div class="main">
            <h3>Forget Password</h3>
          </div>
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
                  console.log(error.response);
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
              isSubmitting,
              handleSubmit,
            }) => {
              return (
                <>
                  {show.alert ? (
                    <Alert
                      className="Alert"
                      style={{ width: "350px", "margin-top": "20px" }}
                      variant="filled"
                      severity="error"
                    >
                      <span>Email address not found!</span>
                    </Alert>
                  ) : null}
                  <form class="frm" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Email"
                      class={
                        touched.email && errors.email ? "has-error" : "input"
                      }
                    />
                    {errors.email && (
                      <p class="err_msg">
                        <MdError />
                        &nbsp;{errors.email}
                      </p>
                    )}
                    <button type="submit" class="frmbtn" value="Login">
                      Send Mail
                    </button>
                  </form>
                  {show.succeed ? (
                    <Alert
                      className="Alert"
                      style={{ width: "350px", "margin-top": "20px" }}
                      variant="filled"
                      severity="success"
                    >
                      <span>Password reset link has been sent to {Msg}</span>
                    </Alert>
                  ) : null}
                </>
              );
            }}
          </Formik>
        </div>
    </>
      </div>
  );
}
