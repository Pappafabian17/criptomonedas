import { useState } from "react";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
`;

function App() {
  return (
    <>
      <Heading>Desde APP</Heading>
    </>
  );
}

export default App;
