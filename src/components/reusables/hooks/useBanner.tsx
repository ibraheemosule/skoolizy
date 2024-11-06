import { useEffect, useRef } from 'react';
import { IBannerOptions } from '~shared-ts-types/react-types';
import globalStore from '~src/store/global';

export default function useBanner() {
  const { update, bannerOptions } = globalStore((state) => state);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const idArray = useRef<number[]>([]);

  const bannerUpdate = (args: IBannerOptions) => {
    const id = Math.random();
    idArray.current = [...idArray.current, id];

    const { timeout = null, ...rest } = args;

    update({
      bannerOptions: [
        ...bannerOptions,
        {
          persist: false,
          id,
          ...rest,
        },
      ],
    });

    if (timeout) {
      timeoutRef.current = setTimeout(
        () => {
          update({
            bannerOptions: bannerOptions.filter((opt) => id !== opt.id),
          });
        },
        (Math.abs(timeout) || 5) * 1000
      );
    }
  };

  useEffect(
    () => () => {
      const activeBanners = bannerOptions.filter((banner) => banner.persist);
      update({
        bannerOptions: activeBanners,
      });
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);

        update({
          bannerOptions: bannerOptions.filter(
            (opt) => !idArray.current.includes(opt.id || 1)
          ),
        });
      }
    },
    []
  );

  return {
    banner: bannerUpdate,
  };
}
