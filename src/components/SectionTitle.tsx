import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function SectionTitle({ children }: Props) {
  return (
    <h2 className="text-4xl md:text-6xl font-semibold text-primary">
      {children}
    </h2>
  );
}

export default SectionTitle;
