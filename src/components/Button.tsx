import type { ReactNode } from 'react';

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="bg-[#FFCE22] rounded-sm px-2 py-4 cursor-pointer active:cursor-default w-full hover:bg-[#FFD84D] active:bg-[#FFCE22]">
      {children}
    </button>
  );
};

export default Button;
