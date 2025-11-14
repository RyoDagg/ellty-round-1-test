import { useState } from 'react';
import { HiCheck } from 'react-icons/hi';

export default function Checkbox({
  checked,
  onChange,
  ...rest
}: {
  checked?: boolean;
  onChange?: (value: boolean) => void;
  [key: string]: any;
}) {
  const [isChecked, setIsChecked] = useState(checked ?? false);

  const toggle = () => {
    const next = !isChecked;
    setIsChecked(next);
    onChange?.(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={`
        h-6 w-6 flex items-center justify-center cursor-pointer rounded-md transition-all group border m-4
        active:shadow-[0_0_0_0.2rem_rgba(36,105,246,0.1)]
        ${
          isChecked
            ? 'border-[#2469F6] bg-[#2469F6] hover:border-[#5087F8] hover:bg-[#5087F8] active:bg-[#2469F6] active:border-[#2469F6]'
            : 'border-[#CDCDCD] bg-white hover:border-[#BDBDBD]'
        }
      `}
      {...rest}
    >
      <HiCheck
        className={`
            h-4 w-4 
            ${
              isChecked
                ? 'text-white'
                : 'text-transparent group-hover:text-[#E3E3E3] group-active:text-[#878787]'
            }`}
      />
    </button>
  );
}
