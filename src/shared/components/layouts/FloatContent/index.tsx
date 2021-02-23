import ImageViewer from '../ImageViewer';
import FloatPortal from 'shared/components/common/FloatPortal';
import TwitterUserFloat from '../TwitterUserFloat';

import { useStore } from 'effector-react';
import { floatUserProfileStore } from 'store/float_user_profile';

import currentAccountSelector from 'store/accounts/selectors/currentAccountSelector';

const FloatContent = () => {
  const current_account = useStore(currentAccountSelector);
  const { isActive, coords } = useStore(floatUserProfileStore);

  return (
    <FloatPortal>
      { 
        isActive && (
          <TwitterUserFloat coords={coords} user_profile={current_account!} /> 
        )
      }
      <ImageViewer />
    </FloatPortal>
  )
}

export default FloatContent;