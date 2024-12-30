import React from "react";

const DropdownArrow = ({ isOpen }) => {
  return (
    <svg
      className={`${isOpen ? "rotate-180" : "rotate-0"} `}
      aria-hidden="true"
      height="16"
      width="16"
    >
      <g opacity=".8" fill="[#3D4045]" stroke="[#3D4045]" strokeWidth=".2">
        <path
          d="M1.352 5.292a1 1 0 0 0-.106 1.41l5.261 6.12.029.033c.15.175.324.377.495.527.204.179.533.402.993.402.46 0 .789-.223.992-.402a5.43 5.43 0 0 0 .495-.527l.03-.034 5.213-6.064a1 1 0 1 0-1.517-1.303l-5.213 6.064-5.262-6.12a1 1 0 0 0-1.41-.106Z"
          fill="var(--fill-color)"
          fillOpacity=".92"
        />
      </g>
    </svg>
  );
};

export default DropdownArrow;
