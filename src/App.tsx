import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import PageRow from './components/PageRow';

function App() {
  const [pages, setPages] = useState([
    { title: 'Page 1', selected: false },
    { title: 'Page 2', selected: false },
    { title: 'Page 3', selected: false },
    { title: 'Page 4', selected: false },
  ]);

  const handleSelect = (index: number) => {
    setPages((prev) => prev.map((p, i) => (i === index ? { ...p, selected: !p.selected } : p)));
  };

  const handleSelectAll = () => {
    const allSelected = pages.every((p) => p.selected);
    setPages((prev) => prev.map((p) => ({ ...p, selected: !allSelected })));
  };

  return (
    <div className="flex justify-center w-xl mx-auto py-22 border">
      <div className="w-96 rounded-md border border-[#EEEEEE] p-2.5">
        <PageRow
          onChange={handleSelectAll}
          selected={pages.every((p) => p.selected)}
          title="All Pages"
        />

        <hr className="border-t border-gray-200 my-2.5" />

        {pages.map((page, index) => (
          <PageRow
            key={index}
            selected={page.selected}
            title={page.title}
            onChange={() => handleSelect(index)}
          />
        ))}

        <hr className="border-t border-gray-200 my-2.5" />

        <div className="py-2.5 px-4">
          <Button>Done</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
