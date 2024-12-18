'use client';

import { useState } from 'react';

interface InputProps {
  label: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function CustomInput({ label, placeholder, onChange }: InputProps) {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div>
      <label className="block mb-2 font-medium">{label}</label>
      <input
        className="border rounded p-2 w-full"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
