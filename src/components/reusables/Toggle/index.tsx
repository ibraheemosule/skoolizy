import { BaseBtn } from '~components/reusables/ui/Buttons';

type ToggleModal = {
  className?: string;
  toggle: boolean;
  setToggle: () => void;
};

const Toggle = ({ toggle, setToggle, className }: ToggleModal) => (
  <BaseBtn
    className={`mt-2 sm:mt-0 w-12 h-6 rounded-full ${
      toggle ? 'bg-brown.dark' : 'bg-gray-200'
    } ${className}`}
    onClick={setToggle}
  >
    <div
      className={`duration-500 relative top-0 w-6 h-full scale-90 rounded-full ${
        toggle ? 'left-6 bg-white' : 'left-0 bg-brown.dark'
      }`}
    />
  </BaseBtn>
);

export default Toggle;
