import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../Components/BackButton";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {
  const { updateToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setRegisterData((prevData) => {
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
        "http://localhost:8080/api/users/register",
        registerData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.data;
      updateToken(data.token);
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
        <div classname="form-title">
          <h1>Registrera</h1>
        </div>

        <form className="form-group" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="userName" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              className="form-control"
              value={registerData.userName}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={registerData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="confirm-password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              className="form-control"
              value={registerData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="form-bottom">
            <Link to={"/login"} className='form-Link'>Har du ett Konto? Logga in</Link>
            <button className="form-btn">Registrera</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
