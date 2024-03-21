"use client";
import styled from "styled-components";

export const TopMenu = () => {
  return <StyledTopMenuBar>Projects Languages</StyledTopMenuBar>;
};

const StyledTopMenuBar = styled.div`
  background-color: black;
  color: white;
  font-size: 50px;
  text-align: center;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
`;
