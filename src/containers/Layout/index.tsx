import { Navbar } from "components";

import { ILayoutProps } from "./interfaces";
import * as S from "./styles";

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <S.Container>
      <Navbar />

      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
