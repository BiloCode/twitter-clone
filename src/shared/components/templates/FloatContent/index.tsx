import Portals from '@atoms/Portals';

import ImageViewer from '@organisms/ImageViewer';

import { useStore } from 'effector-react';

import { floatUserProfileStore } from '@store/float_user_profile';
import currentAccountSelector from '@store/accounts/selectors/currentAccountSelector';
import TwitterUserFloat from '../../organisms/TwitterUserFloat';

const FloatContent = () => {
  const current_account = useStore(currentAccountSelector);
  const { isActive, coords } = useStore(floatUserProfileStore);

  return (
    <Portals>
      {isActive && (
        <TwitterUserFloat coords={coords} user_profile={current_account!} />
      )}
      {/* <ImageViewer /> */}
    </Portals>
  );
};

export default FloatContent;
