/** @format */

import background from "./assets/background.svg";
import mopaintsLogo from "./assets/mopaints-logo.svg";
import React, { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import httpClient from "react-http-client";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [openSignIn, setOpenSignIn] = React.useState(false);
  const [openSignUp, setOpenSignUp] = React.useState(false);

  const [signInEmail, setSignInEmail] = React.useState("");
  const [signInPassword, setSignInPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleOpenSignIn = () => setOpenSignIn(true);
  const handleCloseSignIn = () => setOpenSignIn(false);
  const handleOpenSignUp = () => setOpenSignUp(true);
  const handleCloseSignUp = () => setOpenSignUp(false);
  const signIn = async () => {
    const postResponse = await httpClient.post(
      "http://localhost:3000/signin",

      {
        email: signInEmail,
        password: signInPassword,
      }
    );
    alert("Successfully signed in");
    handleCloseSignIn();
    console.log(postResponse);
  };
  const signUp = async () => {
    const postResponse = await httpClient.post(
      "http://localhost:3000/signup",

      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        address: address,
        phone: phone,
      }
    );
    alert("Registration Successful");
    handleCloseSignUp();
    console.log(postResponse);
  };
  return (
    <div
      className="App-header"
      style={{
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "20vh",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "100%",
            position: "absolute",
            backgroundColor: "red",
          }}
        >
          <Button
            className="button"
            style={{
              position: "fixed",
              right: "180px",
              top: "50px",
              color: "white",
              height: "30px",
              width: "100px",
              borderRadius: "15px",
              border: "none",
              padding: "5px",
              backgroundColor: "#F287F4",
            }}
            onClick={handleOpenSignUp}
            size="large"
          >
            Sign-Up
          </Button>
          <Button
            className="button"
            style={{
              position: "fixed",
              right: "50px",
              top: "50px",
              color: "white",
              height: "30px",
              width: "100px",
              borderRadius: "15px",
              border: "none",
              padding: "5px",
              backgroundColor: "#F287F4",
            }}
            onClick={handleOpenSignIn}
            size="large"
          >
            Sign-In
          </Button>
          <Modal
            open={openSignUp}
            onClose={handleCloseSignUp}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div style={{ marginBottom: "40px" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Sign-Up{" "}
                </Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "10px",
                  alignItems: "center",
                  width: "100%",
                  height: "auto",
                }}
              >
                <TextField
                  onChange={(val) => {
                    setFirstName(val.target.value);
                  }}
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  required="true"
                  fullWidth
                />
                <TextField
                  onChange={(val) => {
                    setLastName(val.target.value);
                  }}
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  onChange={(val) => {
                    setEmail(val.target.value);
                  }}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  required="true"
                  fullWidth
                />
                <TextField
                  onChange={(val) => {
                    setPassword(val.target.value);
                  }}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  required="true"
                  fullWidth
                />
                <TextField
                  onChange={(val) => {
                    setConfirmPassword(val.target.value);
                  }}
                  id="outlined-basic"
                  label="Confirm Password"
                  variant="outlined"
                  required="true"
                  fullWidth
                />
                <TextField
                  onChange={(val) => {
                    setAddress(val.target.value);
                  }}
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  required="true"
                  fullWidth
                />
                <TextField
                  onChange={(val) => {
                    setPhone(val.target.value);
                  }}
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    alignItems: "center",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <Button
                    className="button"
                    style={{
                      color: "white",
                      height: "30px",
                      width: "100px",
                      borderRadius: "15px",
                      border: "none",
                      backgroundColor: "#F287F4",
                    }}
                    onClick={signUp}
                    size="large"
                  >
                    Sign-Up
                  </Button>
                  <Button
                    className="button"
                    style={{
                      color: "white",
                      height: "30px",
                      width: "100px",
                      borderRadius: "15px",
                      border: "none",
                      backgroundColor: "grey",
                    }}
                    size="large"
                    onClick={handleCloseSignUp}
                  >
                    Cancel{" "}
                  </Button>
                </div>
              </div>
            </Box>
          </Modal>
          <Modal
            open={openSignIn}
            onClose={handleCloseSignIn}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div style={{ marginBottom: "40px" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Sign-In{" "}
                </Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "20px",
                  alignItems: "center",
                  width: "100%",
                  height: "auto",
                }}
              >
                <TextField
                  onChange={(val) => {
                    setSignInEmail(val.target.value);
                  }}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  required="true"
                  fullWidth
                />
                <TextField
                  onChange={(val) => {
                    setSignInPassword(val.target.value);
                  }}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  required="true"
                  fullWidth
                />
                <div
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={handleOpenSignUp}
                >
                  Register for a new account!
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    alignItems: "center",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <Button
                    className="button"
                    style={{
                      color: "white",
                      height: "30px",
                      width: "100px",
                      borderRadius: "15px",
                      border: "none",
                      backgroundColor: "#F287F4",
                    }}
                    onClick={signIn}
                    size="large"
                  >
                    Sign-In
                  </Button>
                  <Button
                    className="button"
                    style={{
                      color: "white",
                      height: "30px",
                      width: "100px",
                      borderRadius: "15px",
                      border: "none",
                      backgroundColor: "grey",
                    }}
                    onClick={handleCloseSignIn}
                    size="large"
                  >
                    Cancel{" "}
                  </Button>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;
