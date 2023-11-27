import { React, useState } from "react";
import "./Login.css";
import { AxiosInstance } from "./AxiosInstance";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await AxiosInstance.post("/auth/login/jwt/create/", {
        email: username,
        password: password,
      });

      //   retreve the tokens in successful request
      const accessToken = response.data.access;
      const refreshToken = response.data.refresh;

      //   store the token in local storage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      //   navigate to the homepage
      navigate("/home");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
