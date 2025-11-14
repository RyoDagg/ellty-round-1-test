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
        h-6 w-6 flex items-center justify-center cursor-pointer rounded-md transition-all border
        group-active:shadow-[0_0_0_0.2rem_rgba(36,105,246,0.1)]
        ${
          checked
            ? 'border-[#2469F6] bg-[#2469F6] group-hover:border-[#5087F8] group-hover:bg-[#5087F8]'
            : 'border-[#CDCDCD] bg-white group-hover:border-[#BDBDBD]'
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
