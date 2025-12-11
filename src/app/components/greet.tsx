'use client'

import { invoke } from '@tauri-apps/api/core';
import { ReactElement, useEffect, useState } from 'react';

interface GreetProps {
  text: string;
}

export default function Greet({ text }: GreetProps) {
  const [text, setText] = useState<string>('');

  useEffect(() => {
        invoke<string>('greet', { greet: {text} }).then((result) => {
            setText(result);
        });
    }, []);
  
  return (
    <span className="text-7x1">{text}</span>
  );
}
