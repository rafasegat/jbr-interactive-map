const Icon = ({ color }: { color: string }) => {
  return (
    <svg
      width="11"
      height="8"
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.523682 3.09961L4.06613 6.55443L10.0903 0.530286"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Icon;
