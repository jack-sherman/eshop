import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
`

const Text = styled.h1`
    font-weight: 500;
`

const NotFound = () => {
  return (
    <Container>
        <Text>The page you are looking for does not exist...</Text>
    </Container>
  )
}

export default NotFound