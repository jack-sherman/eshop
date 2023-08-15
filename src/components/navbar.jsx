import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/userRedux";

const Container = styled.div`
  height: 60px;
  background-color: white;
  margin: 10px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 3, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const PicLogo = styled.img`
  max-height: 100%;
  max-width: 100%;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const ImageContainer = styled.div`
  height: 60px;
  margin: 0;
`;

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const routeHome = (id) => {
    navigate(id);
  };
  let navigate = useNavigate();

  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <ImageContainer>
            <PicLogo
              onClick={() => routeHome("/")}
              src="https://i.ibb.co/9yhf221/duck.png"
            />
          </ImageContainer>
        </Left>
        <Center>
          <Logo onClick={() => routeHome("/")}>DUCK</Logo>
        </Center>
        <Right>
          <MenuItem onClick={() => routeHome("/Products/apparel")}>
            APPAREL
          </MenuItem>
          {true && user.currentUser ? (
            <MenuItem onClick={() => dispatch(logoutUser())}>LOGOUT</MenuItem>
          ) : (
            <MenuItem onClick={() => routeHome("/login")}>LOGIN</MenuItem>
          )}
          <MenuItem>
            <Badge
              onClick={() => routeHome("/Cart")}
              badgeContent={quantity}
              color="primary"
            >
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
