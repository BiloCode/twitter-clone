import { FC, memo } from "react";
import { IconType } from "react-icons/lib";
import * as Styled from "./styles";

import Icon from "shared/components/atoms/Icon";
import Text from "shared/components/atoms/Text";

interface IProps {
  icon: IconType;
  text: string;
}

const TextWithIcon: FC<IProps> = ({ icon, text }) => (
  <Styled.Container>
    <Icon size="s-medium" type={icon} />
    <Text>{text}</Text>
  </Styled.Container>
);

export default memo(TextWithIcon);
