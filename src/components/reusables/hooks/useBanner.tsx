import { useEffect, useRef } from 'react';
import { IBannerOptions } from '~shared-ts-types/react-types';
import globalStore from '~src/store/globalStore';
import { getUid } from '~utils';

export default function useBanner() {
  const { update } = globalStore((state) => state);
  const timeoutRef = useRef<NodeJS.Timeout[]>([]);
  const idArray = useRef<string[]>([]);

  const bannerUpdate = (args: IBannerOptions) => {
    const id = getUid();
    idArray.current = [...idArray.current, id];

    const { timeout = null, ...rest } = args;

    update({
      bannerOptions: [
        ...globalStore.getState().bannerOptions,
        {
          persist: false,
          id,
          ...rest,
        },
      ],
    });

    if (timeout) {
      timeoutRef.current.push(
        setTimeout(
          () => {
            update({
              bannerOptions: globalStore
                .getState()
                .bannerOptions.filter((opt) => opt.id !== id),
            });
          },
          (Math.abs(timeout) || 3) * 1000
        )
      );
    }
  };

  useEffect(() => {
    idArray.current = [
      ...idArray.current,
      ...globalStore.getState().bannerOptions.map((banner) => banner.id!),
    ];

    return () => {
      timeoutRef.current?.forEach((timeout) => clearTimeout(timeout));
      timeoutRef.current = [];

      update({
        bannerOptions: globalStore
          .getState()
          .bannerOptions.filter((opt) => opt.persist),
      });
    };
  }, []);

  return {
    banner: bannerUpdate,
  };
}
