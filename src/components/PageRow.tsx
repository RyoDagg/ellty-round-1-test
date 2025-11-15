import Checkbox from './Checkbox';

interface PageRowProps {
  title: string;
  selected: boolean;
  onToggle: () => void;
}

export default function PageRow({ title, selected, onToggle }: PageRowProps) {
  return (
    <div className="page-row" onClick={onToggle}>
      <span className="page-title">{title}</span>

      <Checkbox checked={selected} onToggle={onToggle} />
    </div>
  );
}
