import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  let add = () => {
    navigate(`/login`, {
      state: { user : user, password: password, email: email },
    });
   
  };
 

  return (
    <div style={{ width: "100%", margin: "auto", height: "100%" }}>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h4" sx={{ padding: "20px" }}>
          SIGN UP
        </Typography>

        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          color="primary"
          style={{ width: "400px", marginBottom: "20px" }}
          onChange={(e) => {
            setUser(e.target.value);
          }}
          value={user}
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          color="primary"
          style={{ width: "400px", marginBottom: "20px" }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          color="primary"
          style={{ width: "400px", marginBottom: "20px" }}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <p>{user}</p>

        <Button variant="contained" onClick={add}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Signup;
