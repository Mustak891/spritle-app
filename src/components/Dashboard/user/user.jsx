import React from "react";
import "./user.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Dashboard = () => {

    const email = localStorage.getItem("email");
    const username = localStorage.getItem("username");
    const profilepic = localStorage.getItem("profilepic");
    const address = localStorage.getItem("address");
    const dob = localStorage.getItem("dob");

  return (
    <div className="dashboard">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "80px",
          margin: "10px",
        }}
      >
        <span>
          <b>WELCOME BACK</b>
        </span>
      </div>
      <div className="dashcard">
        <Card sx={{ minWidth: 400 }}>
          <CardContent>
          <Typography variant="h5" component="div">
            <img src={profilepic} style={{objectFit: "cover", maxHeight: "550px", display: "flex", justifyContent: "center", alignItems: "center"}} alt="human" />
            </Typography>
            &nbsp;
          <Typography variant="h5" component="div">
              Username: {username}
            </Typography>
            &nbsp;
            <Typography variant="h5" component="div">
              Email: {email}
            </Typography>
            &nbsp;
            <Typography variant="h5" component="div">
              Date of birth: {dob}
            </Typography>
            &nbsp;
            <Typography variant="h5" component="div">
            Address: {address}
            </Typography>
            &nbsp;
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
