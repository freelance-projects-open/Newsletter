import React from "react";

interface IntupProps {
  className?: string;
  type: string;
  placeholder: string;
}

export default function Input({ className, type, placeholder }: IntupProps) {
  return (
    <>
      <input type={type} className={className} placeholder={placeholder} />
    </>
  );
}
