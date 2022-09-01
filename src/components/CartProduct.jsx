import { Delete } from '@material-ui/icons'
import React, {useState} from 'react'
import styled from "styled-components"

const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    height: 15vh;
    border: 1px solid grey;
    margin: 5px;
`
const Image = styled.img`
    flex: 1;
    height: auto;
    width: auto;
    max-width: 100px;
    margin-left: 15px;
`

const DetailsContainer =styled.div`
    flex: 2;
    justify-content: center;
    padding: 10px;
`
const ProdName = styled.h4`
    
`
const ColorContainer = styled.div`
    display: flex;
`
const ColorImg = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
`;

const Size = styled.div``

const TotalsContainer = styled.div`
    flex: 1;
    padding-right: 5px;
    display:flex;
    justify-content: space-between;
`
const Quantity = styled.h4``
const Price = styled.h4``

const IconContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
`
const Totals = styled.div``

const CartProduct = ({total, item}) => {
  const [quant,setQuant] = useState(item.quantity);
  return (
    <Container>
        <Image src={item.img}/>
        <DetailsContainer>
            <ProdName>{item.name}</ProdName>
            <ColorContainer>
                Color: 
                <ColorImg color="black"/>
            </ColorContainer>
            <Size>Size: {item.size}</Size>
        </DetailsContainer>
        <TotalsContainer>
            <Totals>
            <Quantity>Quantity: {quant}</Quantity>
            <Price>Subtotal: ${item.price * quant}</Price>
            </Totals>
            <IconContainer>
            <Delete cursor="pointer" onClick={e=>{
                setQuant(0);
                total(item.price * quant);
                var a = JSON.stringify(item)
                console.log(JSON.parse(localStorage.getItem("cart")))
                }}/>
        </IconContainer>
        </TotalsContainer>
    </Container>
  )
}

export default CartProduct