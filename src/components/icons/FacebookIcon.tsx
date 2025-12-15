import { IconProps } from "./types";

export default function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M7.66512 17.9163H10.9985V11.2413H14.0018L14.3318 7.92467H10.9985V6.24967C10.9985 6.02866 11.0863 5.8167 11.2425 5.66042C11.3988 5.50414 11.6108 5.41634 11.8318 5.41634H14.3318V2.08301H11.8318C10.7267 2.08301 9.66691 2.52199 8.88551 3.3034C8.10411 4.0848 7.66512 5.14461 7.66512 6.24967V7.92467H5.99846L5.66846 11.2413H7.66512V17.9163Z" />
    </svg>
  );
}
