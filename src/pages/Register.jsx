import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
const Container = styled.div`
    width: 100vw;
    height: 100vw;
    display:flex;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color:white;
`

const Form = styled.form`
    display:flex;
    flex-wrap: wrap;
`

const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size:12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    cursor: pointer;
    ;
`

const Register = () => {
  return (
    <>
    <Navbar/>
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account, I consent to processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE ACCOUNT</Button>
            </Form>
        </Wrapper>
    </Container>
    <Footer/>
    </>
  )
}

export default Register