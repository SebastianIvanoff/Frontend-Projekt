import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import BackButton from "../Components/BackButton";

const Login = () => {
  const { updateAuth } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/users/login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.data;

      // Update both token and userId in AuthContext
      updateAuth(data.token, data.userId);
        console.log(data.token)
      // Navigate to the home page
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <BackButton />

      <div className="form-wrapper">
        <div className="form-title">
          <h1>Logga in</h1>
        </div>

        <form className="form-group" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="userName" className="form-label">
              Email:
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              className="form-control"
              placeholder="Email..."
              value={loginData.userName}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="password" className="form-label">
              Lösenord:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Lösenord"
              value={loginData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-bottom">
             <Link to={"/register"} className='form-Link'>Registrera dig</Link>
          <button className="form-btn">Logga in</button>
          </div>
         
        </form>
      </div>
    </>
  );
};

export default Login;
