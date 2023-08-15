import { Send, Check } from "@material-ui/icons";
import styled from "styled-components";
import { createRef, useState } from "react";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  blackground-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 30%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  padding-bottom: 0;
  padding-top: 0;
`;
const Newsletter = () => {
  const textIn = createRef();
  const [news, setNews] = useState(false);
  const [icon, setIcon] = useState(<Send />);
  const handleClick = () => {
    console.log(textIn.current.value);
    // here is where you query to see if user is in news db
    setNews(true);
    setIcon(<Check />);
  };
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get updated when we release new products.</Description>
      <InputContainer>
        <Input ref={textIn} placeholder="Your email" />
        <Button onClick={handleClick} disabled={news}>
          {icon}
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
