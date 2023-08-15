import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vw;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  cursor: pointer;
  font-weight: 900;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    console.log("---------------", p1);
    console.log("info: ", username, email, p1);
    e.preventDefault();
    register(dispatch, { username, email, password: p1 });
  };
  console.log(username, email, p1);
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="name" />
            <Input placeholder="last name" />
            <Input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              style={{ WebkitTextSecurity: "disc" }}
              onChange={(e) => setP1(e.target.value)}
            />
            <Input
              placeholder="confirm password"
              style={{ WebkitTextSecurity: "disc" }}
              onChange={(e) => setP2(e.target.value)}
            />
            <Agreement>
              By creating an account, I consent to processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button
              disabled={p1 !== p2 || p1 === "" || p2 === ""}
              onClick={handleClick}
            >
              CREATE ACCOUNT
            </Button>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Register;
