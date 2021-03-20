import styled from '@emotion/styled';
import React from 'react';
import ModalCollection from './components/Modal/ModalCollection';
const Test1 = styled.div`
  border: 1px solid black;
  background-color: #eee;
`;

const Test2 = styled.div`
  background-color: ${({ theme }) => theme.color.primary500};
`;

function App() {
  return (
    <div className="App">
      <ModalCollection></ModalCollection>
      <Test1>테스트1</Test1>
      <Test2>테스트2</Test2>
    </div>
  );
}

export default App;
