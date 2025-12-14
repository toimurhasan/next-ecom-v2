interface QuoteIconProps {
  className?: string;
}

export default function QuoteIcon({ className }: QuoteIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.00003 9.99951H22V25.2995L13.036 37.9995H7.59003L12.922 25.9995H5.00003V9.99951ZM26 9.99951H43V25.2995L34.036 37.9995H28.59L33.922 25.9995H26V9.99951Z"
        fill="currentColor"
      />
    </svg>
  );
}

