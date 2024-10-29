import { ComponentType, Suspense, lazy } from 'react';
import logo from '~assets/images/logo.png';

export default function LazyLoad({
  url,
}: {
  url: () => Promise<{ default: ComponentType<unknown> }>;
}) {
  const Component = lazy(url);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-full grid place-items-center">
          <span className="sr-only">Page is loading...</span>
          <img
            className="h-16 w-16 animate-pulse"
            src={logo}
            alt="page loading"
          />
        </div>
      }
    >
      <Component />
    </Suspense>
  );
}
