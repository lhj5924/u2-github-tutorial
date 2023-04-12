import { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-color: teal;
  padding: 0.5rem;
  border-radius: 1rem;
`;
const BtnContainer = styled.div`
  margin: 2rem;
  width: 100px;
  display: flex;
  justify-content: space-around;
`;
const Btn = styled.button`
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  border-radius: 3rem;
  background-color: beige;
  cursor: pointer;
`;

export default function App() {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Div>test {count}</Div>
      <BtnContainer>
        <Btn onClick={plusCount}>+</Btn>
        <Btn onClick={minusCount}>-</Btn>
      </BtnContainer>
    </>
  );
}
