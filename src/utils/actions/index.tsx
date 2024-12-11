import { globalStore as storeGlobal, userStore as storeUser } from '~src/store';
import { getPrevRoute, getUid } from '~utils';
import appQueryClient from '~src/App/appQueryClient';

export const login = (arg: {
  access_token: string;
  verified: boolean;
  tag: string;
  email: string;
}) => {
  const globalStore = storeGlobal.getState();
  const userStore = storeUser.getState();
  const id = getUid();

  userStore.update({
    verified: arg.verified ?? userStore.verified,
    tag: arg.tag ?? userStore.tag,
    email: arg.email ?? userStore.email,
  });

  globalStore.update({
    token: arg.access_token,
    bannerOptions: [
      {
        id,
        type: 'success',
        text: arg.verified
          ? 'You have successfully logged in!'
          : 'Verify your account to complete sign up process',
      },
    ],
  });

  setTimeout(() => {
    globalStore.update({
      returnPage: '',
      sessionEndUser: '',
      bannerOptions: storeGlobal
        .getState()
        .bannerOptions.filter((option) => option.id !== id),
    });
  }, 3000);
};

export const logout = (arg?: { sessionLogout: boolean }) => {
  setTimeout(() => appQueryClient.removeQueries(), 3000);

  const globalStore = storeGlobal.getState();
  const userStore = storeUser.getState();

  globalStore.update({ token: null });

  if (arg?.sessionLogout) {
    globalStore.update({
      sessionEndUser: userStore.tag,
      returnPage: getPrevRoute() || '/',
    });
    return;
  }
  setTimeout(() => {
    globalStore.update({
      bannerOptions: [
        {
          id: getUid(),
          type: 'info',
          text: 'Logged out successfully',
        },
      ],
    });
  }, 50);

  setTimeout(() => {
    globalStore.update({
      bannerOptions: [],
    });
  }, 3000);
};

export const logoutDueToToken = () => {};
