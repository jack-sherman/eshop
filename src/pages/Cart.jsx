import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import styled from "styled-components"
import CartProduct from '../components/CartProduct'
import { LineWeightTwoTone } from '@material-ui/icons'

const Container = styled.div`
`

const Wrapper = styled.div`
    padding: 20px;

`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const CartContainer = styled.div`
    display: flex;
`

const CartItemContainer = styled.div`
    flex: 3;
    border: 1px solid grey;
`
const TotalsContainer = styled.div`
    flex: 2;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    height: 23vh;
    border: 1px solid gray;
`
const Summary = styled.h1`
    text-align:center;

`
const LineItem = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
`
const LineItemText = styled.p``

const Price = styled.p``

const ButtonContainer = styled.div`
    display: flex;
    height: 100vh;
`

const Button = styled.button`
    flex: 1;
    font-weight: bold;
    background-color: ${props=>props.color};
    color: ${props=>props.text};
    height: 100%;
    cursor:pointer;
`

const Cart = () => {
    let total = 0;
    if(localStorage.getItem("cart") === null){
        total = 0;
    }else{
        for(let i = 0; i< JSON.parse(localStorage.getItem("cart")).length; ++i){
            total += (JSON.parse(localStorage.getItem("cart"))[i].price * JSON.parse(localStorage.getItem("cart"))[i].quantity)
        }
    }
    const [totalPrice, setTotalPrice] = useState(total)
    const handler = (test) =>{
        setTotalPrice(totalPrice-test)
    }
  return (
    <Container>
        <Navbar/>
        <Title>YOUR CART</Title>
        <Wrapper>
            <CartContainer>
                <CartItemContainer>
                    {JSON.parse(localStorage.getItem("cart")).map(item =>
                        <CartProduct total={handler} item={item}/>
                        )}
                </CartItemContainer>
                <TotalsContainer>
                    <Summary>Order Summary</Summary>
                    <LineItem>
                        <LineItemText>Subtotal:</LineItemText>
                        <Price>$ {totalPrice}</Price>
                    </LineItem>
                    <LineItem>
                        <LineItemText>Shipping:</LineItemText>
                        <Price>$ 0</Price>
                    </LineItem>
                    <LineItem>
                        <LineItemText>Discount:</LineItemText>
                        <Price>- $ 0</Price>
                    </LineItem>
                    <LineItem>
                        <LineItemText>Total:</LineItemText>
                        <Price>$ {totalPrice}</Price>
                    </LineItem>

                    <ButtonContainer>
                        <Button color="black" text="white">Continue Shopping</Button>
                        <Button>Checkout</Button>
                    </ButtonContainer>
                </TotalsContainer>
            </CartContainer>
        </Wrapper>

        <Footer/>
    </Container>
  )
}

export default Cart