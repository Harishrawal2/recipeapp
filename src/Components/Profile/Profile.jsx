import React, { useEffect, useState } from "react";
import { Button, Card, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [logindata, setLoginData] = useState([]);
  const history = useNavigate();

  var todayDate = new Date().toISOString().slice(0, 10);

  const birthday = () => {
    const getUser = localStorage.getItem("user_login");
    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);

      setLoginData(user);

      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate;
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
        }, 3000);
      }
    }
  };

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  useEffect(() => {
    birthday();
  }, []);

  return (
    <Container className="mt-3">
      {logindata.length === 0 ? (
        `Please Signin`
      ) : (
        <Card>
          <Card.Body>
            <h3
              className="text-center"
              style={{
                textTransform: "uppercase",
                fontFamily: "roboto",
                fontWeight: "bold",
              }}
            >
              Welcome to Recipe
            </h3>
            <Table className="mt-3" striped bordered hover>
              <thead>
                <tr>
                  <th>Name:</th>
                  <th>Email:</th>
                  <th>Birtday Date: (y-m-d)</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{logindata[0].name}</td>
                  <td>{logindata[0].email}</td>
                  <td>{logindata[0].date}</td>
                </tr>
              </tbody>
            </Table>
            <Button className="mb-3" variant="danger" xs onClick={userlogout}>
              LogOut
            </Button>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};
export default Profile;
