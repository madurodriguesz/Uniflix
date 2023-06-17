import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: rgba(15, 15, 15, 0.5);
  backdrop-filter: blur(0.8rem);
  padding: 3.2rem 0;
  position: fixed;
  z-index: 9;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8rem;
  margin-top: 6.4rem;
`;

export const Icon = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
`;
