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
    margin-top: 10px;
    background-color: teal;
    cursor: pointer;
    ;
`

const Login = () => {
  return (
    <>
    <Navbar/>
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
            </Form>
        </Wrapper>
    </Container>
    <Footer/>
    </>
  )
}

export default Login