import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "../../Styles/Pages/Home.module.css";
import AditionalSide from "../ChildComponents/AditionalSideComponent/AditionalSide";
import HomePostMain from "../ChildComponents/HomePageChildComponent/HomePostMain";
import ShortProfile from "../ChildComponents/HomePageChildComponent/ShortProfile";

function Home() {
  let navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);
  return (
    <>
      <div className={classes.main_page}>
        <ShortProfile />
        <HomePostMain />
        <AditionalSide />
      </div>
    </>
  );
}

export default Home;
