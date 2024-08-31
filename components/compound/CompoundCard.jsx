"use client"; // Ensure it's marked as a client component

import React from 'react';

const defaultStyle = 'w-full flex flex-col gap-2' 

const Stack = ({ children, className }) => (
  <div className={`${defaultStyle} ${className}`}>
    {children}
  </div>
);

const CompoundCard = ({ children, className }) => (
  <div className={`${defaultStyle} ${className}`}>
    {children}
  </div>
);

CompoundCard.Stack = Stack;

export default CompoundCard;