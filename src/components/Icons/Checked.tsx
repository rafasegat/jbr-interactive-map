import React from 'react';

type Props = {
  color: string;
};

const Checked = ({ color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9.521"
      height="6.507"
      viewBox="0 0 9.521 6.507"
    >
      <path
        className={`stroke-${color}`}
        id="Path_1331"
        data-name="Path 1331"
        d="M585.6,1729.443l2.806,2.792,5.3-5.3"
        transform="translate(-584.893 -1726.228)"
        fill="none"
        stroke="#008746"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
    </svg>
  );
};

export default Checked;
