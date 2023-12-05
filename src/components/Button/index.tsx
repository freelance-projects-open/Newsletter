import React from "react";

interface ButtonProps {
  className?: string;
}

export default function Button({ className }: ButtonProps) {
  return (
    <>
      <input type="button" value="Inscreva-se" className={className} />
    </>
  );
}
