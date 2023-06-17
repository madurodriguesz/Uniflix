import styled from "styled-components";

type IContainerProps = {
  imageUrl: string;
};

export const Container = styled.div<IContainerProps>`
  width: 100%;
  height: 64.8rem;

  background: ${({ imageUrl }) =>
    `linear-gradient(269.96deg,rgba(0, 0, 0, 0) 0.04%,rgba(0, 0, 0, 0.8) 99.5%), url(${imageUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  max-width: 130rem;
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1.6rem;

  h1 {
    color: #fff;
    font-size: 5.6rem;
    font-weight: 500;
  }

  span {
    display: block;
    max-width: 63.2rem;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 3.2rem;
    color: #fff;
  }
`;

export const ButtonContainer = styled.div`
  width: 20rem;
`;
