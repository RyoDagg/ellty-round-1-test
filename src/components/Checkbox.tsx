import { HiCheck } from 'react-icons/hi';

export default function Checkbox({
  checked,
  onChange,
}: {
  checked?: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`
        h-6 w-6 flex items-center justify-center cursor-pointer rounded-md transition-all group border
        active:shadow-[0_0_0_0.2rem_rgba(36,105,246,0.1)]
        ${
          checked
            ? 'border-[#2469F6] bg-[#2469F6] hover:border-[#5087F8] hover:bg-[#5087F8] active:bg-[#2469F6] active:border-[#2469F6]'
            : 'border-[#CDCDCD] bg-white hover:border-[#BDBDBD]'
        }
      `}
    >
      <HiCheck
        className={`
          h-6 w-6
          ${
            checked
              ? 'text-white'
              : 'text-transparent group-hover:text-[#E3E3E3] group-active:text-[#878787]'
          }
        `}
      />
    </button>
  );
}
