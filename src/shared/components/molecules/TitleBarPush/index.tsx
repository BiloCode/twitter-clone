import { AiOutlineArrowLeft } from "react-icons/ai";
import * as S from "./styles";

import { useNavigate } from "@reach/router";
import HoverableIcon from "shared/components/atoms/HoverableIcon";
import Title from "shared/components/atoms/Title";
import Text from "shared/components/atoms/Text";

type Icon = {
  element: JSX.Element;
  onClick?(): void;
};

type Props = {
  title: string;
  icons?: Icon[];
  subtitle?: string;
  viewIconBack?: boolean;
};

const TitleBarPush = ({ title, viewIconBack, subtitle, icons }: Props) => {
  const navigate = useNavigate();
  const onClickBack = () => navigate("/home");

  return (
    <S.Container>
      <S.ColumnContainer columns={viewIconBack ? 2 : 1}>
        {viewIconBack && (
          <HoverableIcon onClick={onClickBack}>
            <AiOutlineArrowLeft />
          </HoverableIcon>
        )}
        <S.TextContainer>
          <Title type="black">{title}</Title>
          {subtitle && <Text size="e-small">{subtitle}</Text>}
        </S.TextContainer>
      </S.ColumnContainer>

      {icons && (
        <S.ColumnContainer columns={icons.length}>
          {icons.map((v, i) => (
            <HoverableIcon key={i} onClick={v.onClick}>
              {v.element}
            </HoverableIcon>
          ))}
        </S.ColumnContainer>
      )}
    </S.Container>
  );
};

export default TitleBarPush;
