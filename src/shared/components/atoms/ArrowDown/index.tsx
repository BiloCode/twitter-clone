import { FC } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import * as Styled from './styles';

interface IProps {
  showIndicator?: boolean;
}

const ArrowDown: FC<IProps> = ({ showIndicator }) => (
  <Styled.Container>
    <Styled.Icon>
      <FiChevronDown />
    </Styled.Icon>
    {showIndicator && <Styled.NewsIndicator />}
  </Styled.Container>
);

export default ArrowDown;
