 import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext, useState } from "react";
import Login from "./Login";
import { GlobalState } from "../GlobalState";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://abhayverma45.github.io/portfolio/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [user, setuser] = React.useState({
    email: "",
    password: "",
    fname:"",
    lname:""
  });
  const hinp = (e)=>{
     const {name,value} = e.target;
     setuser((prev)=>{
       return {
         ...prev,
         [name]:value
       }
     })
  }
  const state = useContext(GlobalState);
  const [loginstate, setLoginstate] = state.loginstate;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  // const [callback,setCallback]=callback1;
  const [login, setLogin] = useState(false);
  const handleSubmit2 = () => {
   const {email,password,fname,lname} = user;
   if(email.length===0||password.length==0||fname.length===0,lname.length===0) {
     return alert("Pls fill all fields")
   }
    setLoginstate(true);
    localStorage.setItem("firstLogin", true);
  };
  return (
    <>
      {login ? (
        <>
          <Login  />
          <Link
            href="#"
            variant="body2"
            onClick={() => {
              setLogin(false);
            }}
          >
            Create a new account? Register
          </Link>
        </>
      ) : (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="fname"
                      value={user.fname}
                      onChange={hinp}
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lname"
                      value={user.lname}
                      onChange={hinp}
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      value={user.email}
                      onChange={hinp}
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      value={user.password}
                      onChange={hinp}
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => {
                    handleSubmit2();
                  }}
                >
                 Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    {/* <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link> */}
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => {
                        setLogin(true);
                      }}
                    >
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}
