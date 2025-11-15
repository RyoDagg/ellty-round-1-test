import { HiCheck } from 'react-icons/hi';

interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
}

export default function Checkbox({ checked, onToggle }: CheckboxProps) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className={`checkbox ${checked ? 'checked' : ''}`}
      aria-pressed={checked}
    >
      <HiCheck size={50} />
    </button>
  );
}
