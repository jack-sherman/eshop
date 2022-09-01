import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/navbar"
import Newsletter from "../components/Newsletter"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import { popularProducts } from "../data"


const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;

`
const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: start;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: contain;
    object-position: top left;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;

`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;

`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    };

`;




const Product = () => {
    const [count, setCount] = useState(0);
    const [size, setSize] = useState("M")
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(localStorage["cart"])
        console.log(cart)
    },[cart])

    const addToCart = (product) => {
        product["quantity"] = count;
        product["size"] = size;
        if(count > 0){
            setCart([...cart, product]);
        }
    };

    const changeSize = (e) => {
        setSize(e.target.value)
    }

    const handleCount = (curr) => {
        if(curr < 0){
            if(count==0 && curr < 0){
                setCount(currentCount => currentCount);
            }else{
                setCount(currentCount => currentCount - 1)
            }
        }else{
            setCount(currentCount => currentCount + 1 )
        }
    }
    let { id } = useParams()
  return (
    <Container>
        <Navbar/>
        <div></div>
        <Wrapper>
            <ImgContainer>
                <Image src={popularProducts[id].img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{popularProducts[id].name}</Title>
                <Desc>{popularProducts[id].desc}</Desc>
                <Price>$ {popularProducts[id].price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize value={size} onChange={changeSize}>
                            <FilterSizeOption value="XS">XS</FilterSizeOption>
                            <FilterSizeOption value="S">S</FilterSizeOption>
                            <FilterSizeOption value="M">M</FilterSizeOption>
                            <FilterSizeOption value="L">L</FilterSizeOption>
                            <FilterSizeOption value="XL">XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <Remove cursor="pointer" onClick={() => handleCount(-1)}/>
                        <Amount>{count}</Amount>
                        <Add cursor="pointer" onClick={() => handleCount(1)}/>
                    </AmountContainer>
                    <Button onClick={e => addToCart(popularProducts[id])}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>

        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product