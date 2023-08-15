import styled from "styled-components";
import Products from "./Products";

const Container = styled.div`
  align-items: center;
  justify-content: center;
`;
const Title = styled.h2`
  margin-top: 30px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeaturedProdcuts = () => {
  return (
    <Container>
      <Title>Featured Products</Title>
      <Products />
    </Container>
  );
};

export default FeaturedProdcuts;
