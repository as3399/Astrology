import "../AdminDashboard/AdminPanel.css";
import "./LoginPage.css";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import Navbar from "./NavBar";
import * as Yup from "yup";
import { Alert } from "@material-ui/lab";
import {MdError} from "react-icons/md"
import { ErrorMessage, Formik, Form, Field } from "formik";

export default function ResetPassword(props) {
  const [show, setShow] = useState({ alert: false, succeed: false });
  const [Msg, setMsg] = useState("");
  const history = useHistory();

  return (
    <>
      <div class="super_container">
      <Navbar />
      <div class="container">
        <div class="main">
          <h3>Reset Password</h3>
        </div>
        <Formik
          initialValues={{
            email: "",
            confirm_email: "",
          }}
          validationSchema={Yup.object().shape({
            password: Yup.string()
              .min(6, "Password must be of 6 characters")
              .required("Password Required"),
            confirm_password: Yup.string().oneOf(
              [Yup.ref("password"), null],
              "Password do not match"
            ),
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
            isSubmitting,
            handleSubmit,
          }) => {
            return (
              <>
                {show.alert ? (
                  <Alert
                    className="Alert"
                    style={{
                      width: "350px",
                      "margin-left": "20px",
                      "margin-top": "20px",
                    }}
                    variant="filled"
                    severity="error"
                  >
                    <span>{Msg}</span>
                  </Alert>
                ) : null}
                <form class="frm" onSubmit={handleSubmit}>
                  <input
                    type="password"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    placeholder="Enter Password"
                    className={
                      touched.password && errors.password
                        ? "has-error"
                        : "input"
                    }
                  />
                  {errors.password && <p class="err_msg">{errors.password}</p>}
                  <input
                    type="password"
                    name="confirm_password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.confirm_password}
                    placeholder="Confirm Password"
                    className={
                      touched.confirm_password && errors.confirm_password
                        ? "has-error"
                        : "input"
                    }
                  />
                  {errors.confirm_password && (
                    <p class="err_msg"><MdError/>&nbsp;{errors.confirm_password}</p>
                  )}
                  <button type="submit" class="frmbtn" value="Login">
                    Update
                  </button>
                </form>
                {show.succeed ? (
                  <Alert
                    className="Alert"
                    style={{
                      width: "350px",
                      "margin-left": "20px",
                      "margin-top": "20px",
                    }}
                    variant="filled"
                    severity="success"
                  >
                  <span>Congrats! Your Password has been Updated</span>  
                  </Alert>
                ) : null}
              </>
            );
          }}
        </Formik>
      </div>
      </div>
    </>
  );
}
