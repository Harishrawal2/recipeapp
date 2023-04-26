import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
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
    const { name, email, date, password } = inpval;
    if (name === "") {
      toast.error("name field is requred", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("Please enter valid email address", {
        position: "top-center",
      });
    } else if (date === "") {
      toast.error("Date field is requred", {
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
      localStorage.setItem("userrecipe", JSON.stringify([...data, inpval]));
      history("/signin");
      toast.success("Ragistration Successfull", {
        position: "top-center",
      });
      // console.log("Data is Added successfully");
    }
  };

  return (
    <div className="container mt-5">
      <section>
        <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
          <h3
            className="text-center col-lg-6"
            style={{ textTransform: "uppercase", fontWeight: "bold" }}
          >
            SignUp
          </h3>
          <Form>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
              <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicDate">
              <Form.Control type="date" name="date" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
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
            Already Have an Account{" "}
            <span>
              {" "}
              <NavLink to="/signin">SignIn</NavLink>{" "}
            </span>{" "}
          </p>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};
export default Register;
