import type { ReactNode } from 'react';

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="bg-[#FFCE22] rounded-sm h-10 px-2 cursor-pointer active:cursor-default w-full hover:bg-[#FFD84D] active:bg-[#FFCE22]">
      {children}
    </button>
  );
};

export default Button;
