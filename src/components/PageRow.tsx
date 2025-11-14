import Checkbox from './Checkbox';

export default function PageRow({
  title,
  selected,
  onChange,
}: {
  title: string;
  selected: boolean;
  onChange: () => void;
}) {
  return (
    <div
      onClick={onChange}
      className="group flex items-center justify-between bg-white rounded-md py-2 pl-5 pr-3 cursor-pointer"
    >
      <span className="text-gray-700 select-none">{title}</span>
      <Checkbox checked={selected} onChange={onChange} />
    </div>
  );
}
