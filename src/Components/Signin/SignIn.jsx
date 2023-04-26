import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    // console.log(value, name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    const getUserArr = localStorage.getItem("userrecipe");
    console.log(getUserArr);
    const { email, password } = inpval;
    if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("Please enter valid email address", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password must be at least 5 characters", {
        position: "top-center",
      });
    } else {
      if (getUserArr && getUserArr.length) {
        const userdata = JSON.parse(getUserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        if (userlogin.length === 0) {
          toast.error("password is invalid", {
            position: "top-center",
          });
        } else {
          //   console.log("User login Successfully");
          localStorage.setItem("user_login", JSON.stringify(userlogin));
          history("/profile");
        }
      }
    }
  };

  return (
    <>
      <div className="container mt-5">
        <section>
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3
              className="text-center col-lg-6"
              style={{ textTransform: "uppercase", fontWeight: "bold" }}
            >
              Signin
            </h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-6"
                type="submit"
                onClick={addData}
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3" style={{ fontSize: "20px" }}>
              Create an Account{" "}
              <span>
                {" "}
                <NavLink to="/signup">SignUp</NavLink>{" "}
              </span>{" "}
            </p>
          </div>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};
export default SignIn;
