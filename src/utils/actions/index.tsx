import storeAuth from '~src/store/authStore';
import storeGlobal from '~src/store/globalStore';
import userStore from '~src/store/userStore';
import { getPrevRoute, getUid } from '~utils';

export const login = (arg: {
  access_token: string;
  verified: boolean;
  tag: string;
}) => {
  const authStore = storeAuth.getState();
  const globalStore = storeGlobal.getState();
  const id = getUid();
  authStore.update({
    token: arg.access_token,
  });

  userStore.getState().update({
    verified: arg.verified,
    tag: arg.tag,
  });

  globalStore.update({
    bannerOptions: [
      {
        id,
        type: 'success',
        text: 'You have successfully logged in!',
      },
    ],
  });

  setTimeout(() => {
    globalStore.update({
      bannerOptions: globalStore.bannerOptions.filter(
        (option) => option.id !== id
      ),
    });
    authStore.update({
      returnPage: '',
    });
  }, 3000);
};

export const logout = async (arg?: { sessionLogout: boolean }) => {
  const authStore = storeAuth.getState();
  const globalStore = storeGlobal.getState();

  authStore.update({ token: null });

  if (arg?.sessionLogout) {
    authStore.update({ sessionEnd: true, returnPage: getPrevRoute() || '' });
    return;
  }
  setTimeout(() => {
    globalStore.update({
      bannerOptions: [
        {
          id: getUid(),
          type: 'info',
          text: 'You are logged out',
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
