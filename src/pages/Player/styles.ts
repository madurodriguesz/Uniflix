import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 10rem;
  background: linear-gradient(
    180deg,
    #000000 0%,
    rgba(0, 0, 0, 0.5) 80%,
    rgba(0, 0, 0, 0) 100%
  );

  padding: 3.2rem;
  position: absolute;
  top: 0;
  display: none;
  align-items: center;
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;

  display: flex;
  align-items: center;
  color: #fff;

  span {
    font-size: 1.8rem;
    font-weight: 600;
    margin-left: 1.6rem;
  }
`;

export const Container = styled.div`
  height: 100vh;
  position: relative;

  :hover {
    ${Header} {
      display: flex;
    }
  }

  iframe {
    width: 100%;
    height: 100%;
  }
`;
