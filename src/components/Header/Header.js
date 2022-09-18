import React from "react";
import styled from "styled-components";

export const listaLinksHeader = [
  ["INICIO", "#"],
  ["NEWSLETTER", "#suscripcion"],
];

export const LinksHeader = styled.div`
  background-color: #131313; //color temporal
  position: relative;
  display: flex;
  padding: 0.5rem 2rem;
  justify-content: flex-end;
  gap: 30px;
  width: 100%;
  top: 0px;
  z-index: 50;
  a {
    text-decoration: none;
    color: #ffff;
    text-shadow: 4px 4px 6px #000000;
    font-size: 12px;
  }
  a:hover {
    color: white;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    transform: scale(1.2);
    color: #a98f3b;
  }
`;

const Header = () => {
  return (
    <LinksHeader>
      {listaLinksHeader.map((link, index) => (
        <a key={index} href={link[1]}>
          {link[0]}
        </a>
      ))}
    </LinksHeader>
  );
};

export default Header;
