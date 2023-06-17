import { IButtonProps } from "./interfaces";
import * as S from "./styles";

export const Button = ({ children, ...rest }: IButtonProps) => {
  return (
    <S.Container {...rest}>
      <S.Text>{children}</S.Text>
    </S.Container>
  );
};
