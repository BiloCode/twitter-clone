import { useNavigate } from "@reach/router";
import * as S from "./styles";

import HoverableIcon from "@atoms/HoverableIcon";
import Title from "@atoms/Title";
import Text from "@atoms/Text";

import { IconType } from "react-icons";
import { AiOutlineArrowLeft } from "react-icons/ai";

type Icon = {
  element: IconType;
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
          <HoverableIcon icon={AiOutlineArrowLeft} onClick={onClickBack} />
        )}
        <S.TextContainer>
          <Title type="black">{title}</Title>
          {subtitle && <Text size="e-small">{subtitle}</Text>}
        </S.TextContainer>
      </S.ColumnContainer>

      {icons && (
        <S.ColumnContainer columns={icons.length}>
          {icons.map((v, i) => (
            <HoverableIcon key={i} icon={v.element} onClick={v.onClick} />
          ))}
        </S.ColumnContainer>
      )}
    </S.Container>
  );
};

export default TitleBarPush;
