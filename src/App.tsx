import React from 'react';
import DefaultRouter from 'router';
import { GlobalStyle } from './globalStyles';

import FloatContent from 'components/common/FloatContent';
import TwitterUserFloat from 'components/layouts/TwitterUserFloat';

import { useStore } from 'effector-react';
import { userProfileFloatStore } from 'store/tweet/userProfileFloatStore';
import currentAccountSelector from 'store/account/selectors/currentAccountSelector';

function App() {
  const current_account = useStore(currentAccountSelector);
  const { isActive, coords } = useStore(userProfileFloatStore);

  return (
    <>
      <GlobalStyle />
      <DefaultRouter />
      <FloatContent>
        { 
          isActive && (
            <TwitterUserFloat 
              coords={coords} 
              user_profile={current_account!}
            /> 
          )
        }
      </FloatContent>
    </>
  );
}

export default App;
