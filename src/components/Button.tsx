import type { ReactNode } from 'react';

export default function Button({ children }: { children: ReactNode }) {
  return <button className="button">{children}</button>;
}
