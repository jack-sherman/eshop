import { Badge, Menu } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useNavigate} from "react-router-dom"

const Container = styled.div`
    height: 60px;
    background-color: white;
    margin: 10px;
`;

const Wrapper = styled.div`
    padding-right:20px;
    padding-left:20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
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
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`
const PicLogo = styled.img`
    max-height: 100%;
    max-width: 100%;
    cursor: pointer;
`
const ImageContainer = styled.div`
    height:60px;
    margin: 0;


`

const Navbar = () => {
    const routeHome = (id) =>{
    navigate(id)
}
  let navigate = useNavigate(); 


    

  return (
      
    <Container>
        <Wrapper>
            <Left>
                <ImageContainer>
                    <PicLogo onClick={()=> routeHome("/")} src='https://i.ibb.co/9yhf221/duck.png'/>
                </ImageContainer>
            </Left>
            <Center><Logo onClick={()=> routeHome("/")}>DUCK</Logo></Center>
            <Right>
                <MenuItem onClick={()=> routeHome("/Product")}>APPAREL</MenuItem>
                <MenuItem style={{textDecoration:"line-through", cursor:"default", fontWeight:"100"}}>ACCESSORIES</MenuItem>
                <MenuItem>
                    <Badge onClick={()=> routeHome("/Cart")} badgeContent={0} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar