import { ReactNode } from "react";

interface ClientPageWrapperProps {
  children: ReactNode;
}

export const ClientPageWrapper = ({ children }: ClientPageWrapperProps) => {
  return (
    <div className="w-full">
      {children}
    </div>
  );
};
