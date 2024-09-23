"use client";
import Image from "next/image";
import React from "react";
import Select, {StylesConfig, components} from "react-select";

const DropdownIndicator = (props) => {
    return (components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
            {
                props.selectProps.menuIsOpen
                    ? (
                        <Image
                            src={"/assets/down.svg"}
                            width={20}
                            height={20}
                            alt="drawer"
                            className="rotate-180"/>
                    )
                    : (<Image src={"/assets/down.svg"} width={20} height={20} alt="drawer"/>)
            }
        </components.DropdownIndicator>
    ));
};

const colourStyles = {
    control: (styles, {isFocused}) => ({
        ...styles,
        backgroundColor: "#1C1D1F",
        padding: 8,
        borderRadius: 16,
        boxShadow: "none",
        border: "none"
    }),
    menuList: (styles) => ({
        ...styles,
        padding: 8,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        overflowY: "auto",
        borderRadius: 12,
        backgroundColor: "#1C1D1F",
        color: "#71717a"
    }),
    menu: (base) => ({
        ...base,
        zIndex: 50,
        borderRadius: 16,
        boxShadow: "none",
        backgroundColor: "transparent"
    }),
    option: (styles, {isFocused, isSelected}) => ({
        ...styles,
        padding: 8,
        backgroundColor: isSelected
            ? "#151618"
            : isFocused
                ? "#151618"
                : "transparent",
        cursor: "pointer",
        borderRadius: 8
    }),
    placeholder: (styles) => ({
        ...styles,
        color: "white"
    }),
    singleValue: (styles) => ({
        ...styles,
        color: "white"
    })
};

export default function Dropdown({tabs, activeTab, onTabChange}) {
    const options = tabs.map((tab) => ({value: tab.value, label: tab.label}));

    return (
        <div className="w-full min-h-full flex flex-col gap-2 items-center">
            <Select
                value={options.find((option) => option.value === activeTab)}
                onChange={(selectedOption) => onTabChange(selectedOption.value)}
                options={options}
                styles={colourStyles}
                className="w-full"
                components={{
                    IndicatorSeparator: () => null,
                    DropdownIndicator
                }}/>
        </div>
    );
}
