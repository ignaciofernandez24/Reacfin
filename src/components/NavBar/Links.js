import React from "react";
import styled from "styled-components";

export const listaLinks = [
  ["NUESTROS PRODUCTOS", "#productos"],
  ["COLECCIONES", "#coleccion"],
  ["CONTACTO", "#contacto"],
];

export const StyledLinks = styled.div`
  display: flex;
  background-color: #a98f3b; //color temporal
  justify-content: space-evenly;
  padding: 1rem 1rem;
  width: 77rem;
  height: 3.5rem;
  margin-top: 1.5rem;
  border-radius: 25px;
  a {
    text-decoration: none;
    color: #ffff;
    /* text-shadow: 4px 4px 6px #000000; */
  }
  a:hover {
    color: white;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    transform: scale(1.2);
    color: black;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const Links = () => {
  return (
    <StyledLinks>
      {listaLinks.map((link, index) => (
        <a key={index} href={link[1]}>
          {link[0]}
        </a>
      ))}
    </StyledLinks>
  );
};

export default Links;
