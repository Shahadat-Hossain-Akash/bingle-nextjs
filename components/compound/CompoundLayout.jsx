"use client";
import React from "react";

const Column = ({ children, className }) => {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
};

const Row = ({ children, className }) => {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
};

export default function CompoundLayout({ children, className }) {
  return <div className={className}>{children}</div>;
}

CompoundLayout.Column = Column;
CompoundLayout.Row = Row;
