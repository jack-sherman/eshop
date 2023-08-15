import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  position: relative;
  background-color: white;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: opaque;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 1;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;

  justify-content: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(
        slideIndex > 0 ? slideIndex - 1 : Object.keys(sliderItems).length - 1
      );
    } else {
      setSlideIndex(
        slideIndex < Object.keys(sliderItems).length - 1 ? slideIndex + 1 : 0
      );
    }
  };
  let navigate = useNavigate();
  const handleRedirect = (obj) => {
    console.log(obj);
    navigate(`/products/${obj.redirect}`);
  };
  return (
    <Container>
      {Object.keys(sliderItems).length > 1 && (
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
      )}
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide>
            <ImgContainer
              onClick={() => handleRedirect(item)}
              style={{ backgroundColor: item.color }}
            >
              <Image src={item.img} />
            </ImgContainer>

            {/*<InfoContainer>
                    <Title> {item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button> SHOP NOW </Button>
                </InfoContainer>*/}
          </Slide>
        ))}
      </Wrapper>
      {Object.keys(sliderItems).length > 1 && (
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      )}
    </Container>
  );
};

export default Slider;
