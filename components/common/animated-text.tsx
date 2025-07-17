import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export const AnimatedText = ({
  children,
  className = "",
  as: Component = "div",
}: AnimatedTextProps) => {
  return (
    <Component className={className}>
      {children}
    </Component>
  );
};
