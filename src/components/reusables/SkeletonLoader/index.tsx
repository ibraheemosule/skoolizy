const loaders = {
  text: Array(10)
    .fill('')
    .map(() => (
      <div
        key={Math.random()}
        className="h-8 w-full bg-gray-700 rounded-sm dark:bg-gray-100 mb-4"
      />
    )),

  pictureProfiles: Array(20)
    .fill('')
    .map(() => (
      <div className="w-36 inline-block m-4 mt-0" key={Math.random()}>
        <div className=" h-36 bg-gray-700 rounded-full dark:bg-gray-100 mb-4" />
        <div className="h-4 bg-gray-700 rounded-sm dark:bg-gray-100 mb-2" />
        <div className="h-4 bg-gray-700 rounded-sm dark:bg-gray-100 mb-4" />
      </div>
    )),
  twoSections: Array(10)
    .fill('')
    .map(() => (
      <div className="flex w-full gap-6 mb-4" key={Math.random()}>
        <div className="h-8 grow bg-gray-700 rounded-sm dark:bg-gray-100" />
        <div className="h-8 grow bg-gray-700 rounded-sm dark:bg-gray-100" />
      </div>
    )),
  threeSections: Array(10)
    .fill('')
    .map(() => (
      <div className="flex w-full gap-6 mb-4" key={Math.random()}>
        <div className="h-8 grow bg-gray-700 rounded-sm dark:bg-gray-100" />
        <div className="h-8 grow bg-gray-700 rounded-sm dark:bg-gray-100" />
        <div className="h-8 grow bg-gray-700 rounded-sm dark:bg-gray-100" />
      </div>
    )),
  photos: Array(20)
    .fill('')
    .map(() => (
      <div
        key={Math.random()}
        className="h-64 w-52 bg-gray-100 rounded-sm dark:bg-gray-100 m-4 mt-0"
      />
    )),
};

const SkeletonLoader = ({ type }: { type: keyof typeof loaders }) => (
  <div
    role="status"
    data-testid="skeleton-loader"
    className="h-full flex flex-wrap justify-between animate-pulse"
  >
    {loaders[type]}
    <span className="sr-only">Loading...</span>
  </div>
);

export default SkeletonLoader;
