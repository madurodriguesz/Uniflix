import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router";

import * as S from "./styles";

export const Player = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <iframe
        title="Player"
        src="https://player.vimeo.com/video/3155182?h=28cc2ee7bf&color=ffffff&byline=0&portrait=0"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
      <S.Header>
        <S.BackButton onClick={() => navigate("/")}>
          <MdArrowBack size={32} />
          <span>Voltar</span>
        </S.BackButton>
      </S.Header>
    </S.Container>
  );
};
