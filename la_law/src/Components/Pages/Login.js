import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import global from "../../assets/images/logo/glob.png";
import lowyer from "../../assets/images/logo/logo.png";
import fetchUserLogin from "../../redux/thunk/fetchUserLogin";
import fetchUserRegister from "../../redux/thunk/fetchUserRegister";
import classes from "../../Styles/Login.module.css";
import Loading from "../Loading";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [regemail, setRegemail] = useState("");
  const [regpassword, setRegpassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [practice_court, setPracticeCourt] = useState(false);
  const [current_status, setCurrentStatus] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, isLoading, isError } = userLogin;
  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [navigate, userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchUserLogin(email, password));
  };
  const signUpSubmitHandler = (e) => {
    e.preventDefault();
    if (regpassword !== confirmpassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        fetchUserRegister(
          first_name,
          last_name,
          regemail,
          phone_number,
          regpassword,
          practice_court,
          current_status
        )
      );
    }
  };
  const [login, setLogin] = useState(true);
  const [lawyerStudent, setLawyerStudent] = useState(true);
  return isLoading ? (
    <Loading />
  ) : (
    <div className={classes.profile_body}>
      <header className={classes.login_header}>
        <img src={lowyer} alt="lowyer" />
        <h1>LA-LAW</h1>
      </header>
      <div className={classes.login_body}>
        <div className={classes.lowyer_canvas}>
          <img src={global} alt="global" />
          <h2>
            Be Together, <br />
            <span>Get In Touch</span>
          </h2>
        </div>
        {login ? (
          <div className={classes.login_panel}>
            <h1 style={{ margin: "20px", color: "#383B31" }}>Login Portal</h1>
            <form action={submitHandler} method="post">
              <input
                type="email"
                name="text"
                id="email"
                placeholder="Enter Your Email Or Username"
                className={`${classes.user_email} ${classes.login_input}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                className={`${classes.user_password} ${classes.login_input}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              {isError && (
                <div
                  style={{ fontSize: "20px", color: "red", marginLeft: "25px" }}
                >
                  You Are Not Authorize
                </div>
              )}
              <button
                type="submit"
                className={classes.login_btn}
                onClick={submitHandler}
              >
                Log In
              </button>{" "}
              <br />
              <div className={classes.forget_password}>
                <a href="/">Forget-Password</a>
              </div>
              <br />
              <button
                type="submit"
                className={classes.signup_btn}
                onClick={() => {
                  setLogin(false);
                }}
              >
                Sign Up
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h1 style={{ margin: "0 20px" }}>Sign Up</h1>
            <form>
              <input
                type="text"
                placeholder="Enter First Name"
                className={classes.login_input}
                value={first_name}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Last Name"
                className={classes.login_input}
                value={last_name}
                onChange={(e) => setLastname(e.target.value)}
              />

              <input
                type="email"
                placeholder="Enter Your Email"
                className={classes.login_input}
                value={regemail}
                onChange={(e) => setRegemail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Enter Your Phone Number"
                className={classes.login_input}
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {message && (
                <div
                  style={{ fontSize: "20px", color: "red", marginLeft: "25px" }}
                >
                  {message}
                </div>
              )}
              <input
                type="password"
                placeholder="Enter Your Password"
                className={classes.login_input}
                value={regpassword}
                onChange={(e) => setRegpassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter Your Confirm Password"
                className={classes.login_input}
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className={classes.control}>
                <p
                  style={{
                    fontSize: "20px",
                    color: "black",
                    margin: "5px 30px",
                  }}
                >
                  Are You Lawyer Student
                </p>
                <label className={classes.radio}>
                  <input
                    type="radio"
                    name="student_answer"
                    value="yes"
                    onChange={(e) => {
                      setLawyerStudent(true);
                      setPracticeCourt(true);
                    }}
                  />
                  <p
                    style={{
                      fontSize: "20px",
                      color: "black",
                      margin: "0 30px",
                    }}
                  >
                    Yes
                  </p>
                </label>
                <label className={classes.radio}>
                  <input
                    type="radio"
                    name="student_answer"
                    value="no"
                    onChange={(e) => {
                      setLawyerStudent(false);
                    }}
                  />
                  <p
                    style={{
                      fontSize: "20px",
                      color: "black",
                      margin: "0 30px",
                    }}
                  >
                    No
                  </p>
                </label>
              </div>

              {lawyerStudent ? (
                ""
              ) : (
                <div className={classes.control}>
                  <p
                    style={{
                      fontSize: "20px",
                      color: "black",
                      margin: "5px 30px",
                    }}
                  >
                    Are You Practise In Court
                  </p>
                  <label className={classes.radio}>
                    <input
                      type="radio"
                      name="practise_lawyer_answer"
                      value="yes"
                      onChange={(e) => {
                        setPracticeCourt(true);
                      }}
                    />
                    <p
                      style={{
                        fontSize: "20px",
                        color: "black",
                        margin: "0 30px",
                      }}
                    >
                      Yes
                    </p>
                  </label>
                  <label className={classes.radio}>
                    <input
                      type="radio"
                      name="practise_lawyer_answer"
                      value="no"
                      onChange={(e) => {
                        setPracticeCourt(false);
                      }}
                    />
                    <p
                      style={{
                        fontSize: "20px",
                        color: "black",
                        margin: "0 30px",
                      }}
                    >
                      No
                    </p>
                  </label>
                </div>
              )}
              {lawyerStudent ? (
                ""
              ) : practice_court ? (
                <input
                  type="text"
                  placeholder="Enter Your Practise Court Name"
                  className={classes.login_input}
                  value={current_status}
                  onChange={(e) => setCurrentStatus(e.target.value)}
                />
              ) : (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p
                    style={{
                      fontSize: "20px",
                      color: "black",
                      margin: "0 20px",
                    }}
                  >
                    Enter Your Bar ID:{""}
                  </p>
                  <input
                    type="text"
                    name="barid"
                    style={{
                      width: "240px",
                      height: "40px",
                      margin: "0 20px",
                      borderRadius: "15px",
                    }}
                    value={current_status}
                    onChange={(e) => setCurrentStatus(e.target.value)}
                  />
                </div>
              )}
              <div style={{ display: "flex", alignItems: "center" }}>
                <button
                  type="submit"
                  className={classes.sign_up_submit}
                  onClick={signUpSubmitHandler}
                >
                  Sign Up
                </button>
                <button
                  style={{ backgroundColor: "transparent", color: "black" }}
                  onClick={() => {
                    setLogin(true);
                  }}
                >
                  Have Already an Account ?
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
