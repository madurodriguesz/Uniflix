import { useNavigate } from "react-router";

import { Button } from "components";

import { IBannerProps } from "./interfaces";
import * as S from "./styles";

export const Banner = ({ imageUrl, title, description, url }: IBannerProps) => {
  const navigate = useNavigate();
  
  return (
    <S.Container imageUrl={imageUrl}>
      <S.Content>
        <h1>{title}</h1>
        <span>{description}</span>

        <S.ButtonContainer>
          <Button onClick={() => navigate(`/watch/${url}`)}>
            Assistir agora
          </Button>
        </S.ButtonContainer>
      </S.Content>
    </S.Container>
  );
};
