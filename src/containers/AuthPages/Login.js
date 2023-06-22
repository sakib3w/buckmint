import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import CustomLink from "../../components/Link";
import AuthCardLayout from "./AuthCardLayout";
export let popupShow = false;
const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    user_id: "",
    password: "",
  });
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
     if(value.user_id === "admin" && value.password === "admin"){
      navigate("/dashboard");
     }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="rf_dashboard_login_page_wrapper">
        <AuthCardLayout
          style={{ backgroundColor: "rgb(0 0 0 / 17%)" }}
          className="rf_dashboard_login_card rf_all_card"
        >
          <div className="rf_section_title">
            <h2>Login</h2>
          </div>
          <div className="hr_border"></div>
          {/* <SocialIconForCardHearder /> */}
          <div className="rf_dashboard_login_content">
            <form onSubmit={handleSubmit}>
              <div className="form_group" style={{ display: "inherit" }}>
                <Input
                  label="User ID"
                  type="text"
                  name="user_id"
                  placeholder="Enter your user ID"
                  onChange={handleChange}
                  value={value.user_id}
                  className="userid_input input_field"
                  inputGroupClass="right"
                />
              </div>
              <div className="form_group" style={{ display: "inherit" }}>
                <Input
                  label="Password"
                  type={`${showPassword ? "text" : "password"}`}
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={value.password}
                  className="password_input input_field"
                  inputGroupClass="right"
                />
                <span
                  style={{ marginTop: "0px" }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </span>
              </div>
              <Button type="submit" className="submit_btn">
                Login
              </Button>
              <div className="go_to_register">
                <p>
                  <CustomLink href="/" className="log_page_nav_link">
                    Home
                  </CustomLink>{" "}
                </p>
                <p className="login_nav_break_point"> | </p>
                <p>
                  <CustomLink href="/" className="log_page_nav_link">
                    Register
                  </CustomLink>{" "}
                </p>
                <p className="login_nav_break_point"> | </p>
                <p>
                  <CustomLink href="/" className="log_page_nav_link">
                    Forget Password
                  </CustomLink>{" "}
                </p>
              </div>
            </form>
          </div>
        </AuthCardLayout>
      </div>
    </>
  );
};

export default Login;
