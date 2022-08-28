import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";

const Signup = () => {
  const [signUpData, setSignUpData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  const handleSubmit=()=>{
    navigate('/login')
  }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(signUpData);
  //   let res = await fetch("https://blueflyapp.herokuapp.com/Auth/signup", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(signUpData),
  //   });
  //   let data = await res.json();
  //   console.log(data);
  //   if (data.response == "Account created succesfully") {
  //     alert(data.response);
  //     navigate("/login");
  //   } else {
  //     alert("Something Went wrong! Please try again");
  //   }
  // };
  return (
    <div className={styles.singnup_wrapper}>
      <div className={styles.heading}>
        <h3>Create Account</h3>
      </div>
      <div className={styles.form}>

        <form onSubmit={handleSubmit}>
          <div className={styles.item}>
            <label> First Name</label>
            <input
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              type="text"
              required
            />
          </div>
          <div className={styles.item}>
            <label> Last Name</label>
            <input
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              type="text"
              required
            />
          </div>
          <div className={styles.item}>
            <label> Email</label>
            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              type="email"
              required
            />
          </div>
          <div className={styles.item}>
            <label>Password</label>
            <input
              name="password"
              placeholder="Password"
              onChange={handleChange}
              type="password"
            />
          </div>
          <div className={`${styles.item} ${styles.submit}`}>
            <input type="submit" value="CREATE" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
