import React from "react";
import "./Signup.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { TextField } from "@mui/material";
import Fab from "@mui/material/Fab";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Register = () => {
  const navigate = useNavigate();

  const form = useRef();

  const formvalidationSchema = yup.object({
    username: yup
      .string()
      .required("Name is required ⚠️")
      .min(3, "Name must be at least 3️⃣ characters long"),
    email: yup
      .string()
      .required("email is required ⚠️")
      .min(3, "email must be at least 3️⃣ characters long")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email address"
      ),
    Profilepicture: yup
      .string()
      .required("Profilepicture is required ⚠️")
      .min(3, "Profilepicture must be at least 3️⃣ characters long"),
    Dob: yup
      .string()
      .required("date of birth is required ⚠️")
      .min(3, "date of birth is must be at least 3️⃣ characters long"),
    address: yup
      .string()
      .required("Address is required ⚠️")
      .min(3, "Address must be at least 3️⃣ characters long"),
    password: yup
      .string()
      .required("password is required ⚠️")
      .min(3, "password must be at least 3️⃣ characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match 🔐 ")
      .required("Password confirmation is required ⚠️"),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        Profilepicture: "",
        Dob: "",
        address: "",
        password: "",
        passwordConfirm: "",
      },
      validationSchema: formvalidationSchema,
      onSubmit: (values) => {
        sendEmail(values);
      },
    });

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_py8x1km",
        "template_62hk2mi",
        form.current,
        "g98GDVEY00gBAoOHI"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("email send successfully to your register email");
          localStorage.setItem("username", values.username);
          localStorage.setItem("email", values.email);
          localStorage.setItem("password", values.password);
          localStorage.setItem("address", values.address);
          localStorage.setItem("dob", values.Dob);
          localStorage.setItem("profilepic", values.Profilepicture);
          navigate("/login");
        },
        (error) => {
          console.log(error.text);
          window.alert("registration unsuccessful");
        }
      );
  };

  return (
    <div className="register">
      <div className="register-card">
        <Typography
          className="reg-text"
          sx={{ fontSize: 40, fontWeight: 600 }}
          gutterBottom
        >
          REGISTER
        </Typography>
        <form ref={form} onSubmit={handleSubmit}>
          <Typography component="div" className="regtextfield">
            <TextField
              label="User Name"
              variant="standard"
              size="large"
              type="text"
              style={{ width: "80%" }}
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.username && touched.username}
              helperText={
                errors.username && touched.username ? errors.username : ""
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BadgeOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Typography>
          <Typography component="div" className="regtextfield">
            <TextField
              label="Profile picture"
              variant="standard"
              size="large"
              type="text"
              style={{ width: "80%" }}
              name="Profilepicture"
              value={values.Profilepicture}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.Profilepicture && touched.Profilepicture}
              helperText={
                errors.Profilepicture && touched.Profilepicture
                  ? errors.Profilepicture
                  : ""
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BadgeOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Typography>
          <Typography component="div" className="regtextfield">
            <TextField
              label="Date of Birth"
              variant="standard"
              size="large"
              type="text"
              style={{ width: "80%" }}
              name="Dob"
              value={values.Dob}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.Dob && touched.Dob}
              helperText={errors.Dob && touched.Dob ? errors.Dob : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BadgeOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Typography>
          <Typography component="div" className="regtextfield">
            <TextField
              label="Address"
              variant="standard"
              size="large"
              type="text"
              style={{ width: "80%" }}
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.address && touched.address}
              helperText={
                errors.address && touched.address ? errors.address : ""
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BadgeOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Typography>
          <Typography component="div" className="regtextfield">
            <TextField
              label="Email"
              variant="standard"
              size="large"
              type="email"
              style={{ width: "80%" }}
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email}
              helperText={errors.email && touched.email ? errors.email : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Typography>
          <Typography component="div" className="regtextfield">
            <TextField
              label="Password"
              type="password"
              variant="standard"
              size="large"
              style={{ width: "80%" }}
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password && touched.password}
              helperText={
                errors.password && touched.password ? errors.password : ""
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Typography>
          <Typography component="div" className="regtextfield">
            <TextField
              style={{ width: "80%", marginTop: "10px" }}
              name="passwordConfirm"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passwordConfirm}
              label="Confirm Password"
              variant="standard"
              error={errors.passwordConfirm && touched.passwordConfirm}
              helperText={
                errors.passwordConfirm && touched.passwordConfirm
                  ? errors.passwordConfirm
                  : ""
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Typography>
          <Typography style={{ fontSize: "12px", padding: "10px" }}>
            *your personal information will be kept confidential and will not be
            shared with any third parties.
          </Typography>
          <Typography style={{ padding: "10px", marginBottom: "10px" }}>
            <Fab
              variant="extended"
              color="primary"
              aria-label="add"
              type="submit"
            >
              <AppRegistrationIcon sx={{ mr: 1 }} />
              REGISTER
            </Fab>
          </Typography>
        </form>
      </div>
      <Card className="log-card">
        <CardMedia
          component="img"
          image="https://www.sme-news.co.uk/wp-content/uploads/2021/11/Login.jpg"
          alt="green iguana"
          className="reg-logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            LOGIN
          </Typography>
          <Typography variant="body2">
            If you already have an account, click on the "Login" option and
            enter your email address and password.
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/login" className="link">
            <Button
              size="small"
              style={{ color: "white" }}
              startIcon={<LoginIcon />}
            >
              login
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Register;
