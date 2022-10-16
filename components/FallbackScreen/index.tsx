import { BounceLoader } from '../BounceLoader';

import { Screen } from './styles';

export const FallbackScreen = () => {
  return (
    <Screen>
      <BounceLoader />
    </Screen>
  );
};
