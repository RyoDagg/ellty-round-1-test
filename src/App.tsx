import { useState } from 'react';

import './App.css';

import Button from './components/Button';
import PageRow from './components/PageRow';

interface Page {
  id: number;
  title: string;
  selected: boolean;
}

const initialPages: Page[] = [
  { id: 1, title: 'Page 1', selected: false },
  { id: 2, title: 'Page 2', selected: false },
  { id: 3, title: 'Page 3', selected: false },
  { id: 4, title: 'Page 4', selected: false },
  { id: 5, title: 'Page 5', selected: false },
  { id: 6, title: 'Page 6', selected: false },
];
function App() {
  const [pages, setPages] = useState<Page[]>(initialPages);

  const allSelected = pages.every((p) => p.selected);

  const togglePage = (id: number) => {
    setPages((prev) =>
      prev.map((page) => (page.id === id ? { ...page, selected: !page.selected } : page)),
    );
  };

  const toggleAll = () => {
    setPages((prev) => prev.map((p) => ({ ...p, selected: !allSelected })));
  };

  return (
    <div className="app-container">
      <div className="card">
        {/* Select All */}
        <PageRow title="All pages" selected={allSelected} onToggle={toggleAll} />

        <div className="separator" />

        {/* Page list */}
        <div className="pages-list">
          {pages.map((page) => (
            <PageRow
              key={page.id}
              title={page.title}
              selected={page.selected}
              onToggle={() => togglePage(page.id)}
            />
          ))}
        </div>

        <div className="separator" />

        <div className="button-wrapper">
          <Button>Done</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
