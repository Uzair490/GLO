import React from "react";
import ArrowIcon from "../../../assets/images/checkbox/breadcrumb.svg";

const BreadCrumb = () => {
  const path = window.location.pathname;
  const segments = path.split("/").filter((segment) => segment);

  return (
    <div className="flex items-center mb-2 px-3 space-x-2">
      {segments.length === 0 ? null : (
        <div className="flex items-center gap-3">
          {segments.map((segment, index) => {
            const isLast = index === segments.length - 1;
            return (
              <React.Fragment key={index}>
                {isLast ? (
                  <span className="text-[#667085] font-normal capitalize">
                    {segment}
                  </span>
                ) : (
                  <a
                    href={`/${segments.slice(0, index + 1).join("/")}`}
                    className="text-[#22173D] font-normal capitalize"
                  >
                    {segment}
                  </a>
                )}
                {!isLast && <img src={ArrowIcon} alt="" />}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BreadCrumb;
