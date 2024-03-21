"use client";
import styled from "styled-components";

export const BottomMenu = () => {
  return (
    <StyledContactInfo>
      Contact me Twitter Icon Facebook Email
    </StyledContactInfo>
  );
};

const StyledContactInfo = styled.div`
  background-color: black;
  position: absolute;
  bottom: 0%;
  left: 0%;
  color: white;
  width: 100%;
  text-align: center;
`;
