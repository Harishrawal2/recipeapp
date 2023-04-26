import React from "react";
import { useNavigate } from "react-router-dom";

const Errror = () => {
  const history = useNavigate();

  return (
    <>
      <div className="container mt-5">
        <div className="error d-flex flex-column justify-content-lg-center align-items-center mt-5">
          <h4 className="mt-5">404 Error ! Page Not Found 😭</h4>
          <button className="btn btn-danger" onClick={() => history("/recipe")}>
            Redirect Login Page
          </button>
        </div>
      </div>
    </>
  );
};
export default Errror;
