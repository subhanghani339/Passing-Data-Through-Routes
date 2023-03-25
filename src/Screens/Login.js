import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [loginuser, setUser] = useState("");
  const [loginpassword, setPassword] = useState("");

  const location = useLocation();
  const userEmail = location.state.email;
  console.log("Email is " + userEmail)

  const navigate = useNavigate();

  const signin = () => {
    if(loginpassword == location.state.password && loginuser == location.state.user ){
      navigate('/home',{
        state: {user:loginuser, mail: userEmail}
      })
    } else {
      alert("Username or Password does not match!")
    }
  };

  return (
    <>
      <div style={{ width: "100%", margin: "auto", height: "100%" }}>
        <Box
          sx={{
            width: "100%",
            // padding: "20px",
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h4" sx={{ padding: "20px" }}>
            SIGN IN
          </Typography>
          <TextField
            id="outlined-basic"
            label="Username"
            required 
            variant="outlined"
            color="primary"
            style={{ width: "400px", marginBottom: "20px" }}
            onChange={(e) => {
              setUser(e.target.value);
            }}
            value={loginuser}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            required 
            variant="outlined"
            color="primary"
            style={{ width: "400px", marginBottom: "20px" }}
            onChange={(e) => setPassword(e.target.value)}
            value={loginpassword}
          />
          <br />

          <Button variant="contained" onClick={signin}>
            Login
          </Button>
        </Box>
      </div>
    </>
  );
}
