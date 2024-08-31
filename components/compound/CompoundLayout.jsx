'use client'
import React from 'react';

const Left = ({ children, className }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

const Middle = ({ children, className }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

const Right = ({ children, className }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default function CompoundLayout({ children, className }) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}

CompoundLayout.Left = Left;
CompoundLayout.Middle = Middle;
CompoundLayout.Right = Right;