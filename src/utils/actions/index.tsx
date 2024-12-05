import storeGlobal from '~src/store/globalStore';
import storeUser from '~src/store/userStore';
import { getPrevRoute, getUid } from '~utils';

export const login = (arg: {
  access_token: string;
  verified: boolean;
  tag: string;
  email: string;
}) => {
  const globalStore = storeGlobal.getState();
  const userStore = storeUser.getState();
  const id = getUid();
  globalStore.update({
    token: arg.access_token,
  });

  userStore.update({
    verified: arg.verified ?? userStore.verified,
    tag: arg.tag ?? userStore.tag,
    email: arg.email ?? userStore.email,
  });

  globalStore.update({
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
      bannerOptions: globalStore.bannerOptions.filter(
        (option) => option.id !== id
      ),
    });
    globalStore.update({
      returnPage: '',
    });
  }, 3000);
};

export const logout = async (arg?: { sessionLogout: boolean }) => {
  const globalStore = storeGlobal.getState();

  globalStore.update({ token: null });

  if (arg?.sessionLogout) {
    globalStore.update({ sessionEnd: true, returnPage: getPrevRoute() || '' });
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

  await setTimeout(() => {
    globalStore.update({
      bannerOptions: [],
    });
  }, 3000);
};

export const logoutDueToToken = () => {};
