import logoImage from "assets/images/icon/logo.svg";
import homeImage from "assets/images/icon/home.svg";
import moviesImage from "assets/images/icon/movies.svg";
import tvImage from "assets/images/icon/tv.svg";
import favImage from "assets/images/icon/fav.svg";

import * as S from "./styles";

const Navbar = () => {
  return (
    <S.Container>
      <img src={logoImage} alt="Logo" />

      <S.Content>
        <S.Icon src={homeImage} alt="Home icon" />
        <S.Icon src={moviesImage} alt="Movies icon" />
        <S.Icon src={tvImage} alt="Tv icon" />
        <S.Icon src={favImage} alt="Fav icon" />
      </S.Content>
    </S.Container>
  );
};

export { Navbar };
