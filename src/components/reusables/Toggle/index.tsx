import { BaseBtn } from '~components/reusables/ui/Buttons';

type ToggleModal = {
  className: string;
  toggle: () => void;
  tClass: string;
};

const Toggle = ({ toggle, className, tClass, ...props }: ToggleModal) => (
  <BaseBtn
    className={`mt-2 sm:mt-0 w-12 h-6 rounded-full ${className}`}
    onClick={toggle}
    {...props}
  >
    <div
      className={`duration-500 relative top-0 w-6 h-full scale-90 rounded-full ${tClass}`}
    />
  </BaseBtn>
);

export default Toggle;
