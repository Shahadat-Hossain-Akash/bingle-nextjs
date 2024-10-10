import React from "react";
import CompoundCard from "./compound/CompoundCard";
import CompoundLayout from "./compound/CompoundLayout";
import DynamicSearchField from "./DynamicSearchField";
import Image from "next/image";

export default function DynamicCard({
  title = "",
  icons = [],
  showSearchBar = false,
  component = [],
  isRoutable = false,
}) {
  const NavigateComponent = component.find((comp) => comp.navigate)?.navigate;

  return (
    <CompoundCard className="w-full flex flex-col gap-2 h-fit">
      <CompoundCard.Stack className="w-full h-fit flex">
        <CompoundLayout className="w-full h-full flex flex-row justify-between items-center">
          <CompoundLayout.Column className="h-full">
            {isRoutable && NavigateComponent ? (
              <div className="space-x-2 flex items-center">
                <NavigateComponent /> {/* Render BackButton */}
                <span className="text-xl md:text-3xl">{title}</span>
              </div>
            ) : (
              <span className="text-xl md:text-3xl">{title}</span>
            )}
          </CompoundLayout.Column>
          <CompoundLayout.Row className="flex h-fit flex-row justify-end gap-2">
            {icons.map((el) => (
              <button
                onClick={el?.onClick}
                className={el?.style}
                key={el?.icon}
              >
                {el?.icon.map((ic) => (
                  <Image
                    src={ic}
                    alt="icon"
                    width={el.width || 16}
                    height={el.height || 16}
                    key={ic}
                  />
                ))}
              </button>
            ))}
            {component.map((el, idx) => (
              <React.Fragment key={idx}>
                {el.component && <el.component />} {/* Render DropDown */}
              </React.Fragment>
            ))}
          </CompoundLayout.Row>
        </CompoundLayout>
      </CompoundCard.Stack>
      {showSearchBar && (
        <CompoundCard.Stack>
          <DynamicSearchField />
        </CompoundCard.Stack>
      )}
    </CompoundCard>
  );
}
