import * as React from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-arrow-right"
    {...props}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default SvgComponent;
