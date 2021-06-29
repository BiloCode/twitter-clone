import { FC } from 'react';
import classnames from 'classnames';
import { navigate, useLocation } from '@reach/router';
import * as S from './styles';

export interface ITab {
  title : string;
  link : string;
}

type TProps = {
  tabs : ITab[];
}

const TabLayout : FC<TProps> = ({ tabs }) => {
  const location = useLocation();
  const onClick = (link : string) => () => navigate(link);

  return (
    <S.Container colums={tabs.length}>
      {
      tabs.map((v, i) => (
        <S.TabContainer
          key={i}
          onClick={onClick(v.link)}
          className={classnames({ selected: location.pathname === v.link })}
        >
          {v.title}
        </S.TabContainer>
      ))
    }
    </S.Container>
  );
};

export default TabLayout;
