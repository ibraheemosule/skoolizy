import { useEffect, useRef } from 'react';
import globalStore from '~src/store/global';
import Icon from '~assets/Icons';

const palletes = {
  success: {
    bgColor: 'bg-green-600',
    color: 'text-gray-100',
    icon: 'success',
  },
  error: {
    bgColor: 'bg-red-700',
    color: 'text-red-100',
    icon: 'warning',
  },
  warning: {
    bgColor: 'bg-red-300',
    color: 'text-gray-700',
    icon: 'warning',
  },
  info: {
    bgColor: 'bg-red-300',
    color: 'text-gray-700',
    icon: 'info',
  },
} as const;

export default function Banner() {
  const { bannerOptions, update } = globalStore((state) => state);
  const lastBannerLength = useRef(bannerOptions.length);

  useEffect(() => {
    lastBannerLength.current = globalStore.getState().bannerOptions.length;
  }, [globalStore.getState().bannerOptions.length]);

  return bannerOptions.length ? (
    <div className="fixed z-10 w-full top-0 ">
      {bannerOptions.map((opt, i) => {
        const style = palletes[opt.type || 'success'];

        const shouldAnimate =
          lastBannerLength.current < bannerOptions.length &&
          i + 1 === bannerOptions.length;

        return (
          <div
            key={Math.random()}
            className={`${style.bgColor} ${style.color} ${
              shouldAnimate ? 'animate-slideDown' : ''
            } relative flex items-start gap-4 mb-2 py-3 px-8  justify-between w-full`}
          >
            <Icon
              className="shrink-0"
              strokeWidth={3}
              name={style.icon}
              width={18}
              height={18}
              fill="currentColor"
            />

            <p className=" tracking-wider font-semibold  grow-1 mx-auto">
              {opt.text}
            </p>

            <button
              onClick={() => {
                opt.action?.();
                update({
                  bannerOptions: bannerOptions.filter(
                    ({ id }) => id !== opt.id
                  ),
                });
              }}
              className={`shrink-0 ${
                opt.action
                  ? 'text-gray-100 bg-purple.dark hover:bg-purple font-semibold rounded-md -mt-0.5 flex justify-center px-4 py-1'
                  : ''
              }`}
            >
              {opt.action ? (
                opt.btnText || 'Action'
              ) : (
                <Icon
                  strokeWidth={3}
                  name="cancel"
                  width={18}
                  height={18}
                  fill="currentColor"
                />
              )}
            </button>
          </div>
        );
      })}
    </div>
  ) : null;
}
