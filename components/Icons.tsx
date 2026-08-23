import type { SVGProps } from "react";

type IconName =
  | "truck"
  | "excavator"
  | "container"
  | "house"
  | "road"
  | "clock"
  | "geolocation"
  | "trash"
  | "soil"
  | "car"
  | "dots"
  | "document"
  | "search"
  | "check"
  | "shield"
  | "phone"
  | "whatsapp"
  | "telegram"
  | "chevron-down"
  | "arrow-right"
  | "menu"
  | "close";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

const paths: Record<IconName, React.ReactNode> = {
  truck: (
    <>
      <path d="M3 17V7h11v10M14 10h4l3 3v4h-7" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </>
  ),
  excavator: (
    <>
      <path d="M3 18h12M5 18v-4h6v4M11 14V9h3l2 5M14 9V5h2l3 8" />
      <path d="M16 12h4" />
    </>
  ),
  container: (
    <>
      <rect x="3" y="7" width="18" height="10" rx="0.5" />
      <path d="M3 10h18M3 14h18M7 7v10M12 7v10M17 7v10" />
    </>
  ),
  house: (
    <>
      <path d="M4 11l8-6 8 6" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  road: (
    <>
      <path d="M9 3l-3 18M15 3l3 18" />
      <path d="M12 5v3M12 11v3M12 17v3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  geolocation: (
    <>
      <path d="M12 21c4.5-5 7-8.5 7-12a7 7 0 1 0-14 0c0 3.5 2.5 7 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  trash: (
    <>
      <path d="M5 7h14M9 7V5h6v2M6 7l1 13h10l1-13" />
      <path d="M10 11v6M14 11v6" />
    </>
  ),
  soil: (
    <>
      <path d="M3 18h18" />
      <path d="M5 14h14M7 10h10M9 6h6" />
      <path d="M5 18l-1 2M19 18l1 2" />
    </>
  ),
  car: (
    <>
      <path d="M4 14l1.5-5h13L20 14v4h-3M7 18h10" />
      <circle cx="7.5" cy="18" r="1.5" />
      <circle cx="16.5" cy="18" r="1.5" />
    </>
  ),
  dots: (
    <>
      <circle cx="6" cy="12" r="1.4" />
      <circle cx="12" cy="12" r="1.4" />
      <circle cx="18" cy="12" r="1.4" />
    </>
  ),
  document: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4 4" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  phone: (
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L18 13l2 5v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.5-4A7.5 7.5 0 1 1 9 19z" />
      <path d="M9 9c0 3 3 6 6 6l1.5-1.5L14 12l-1 .5C12 12 11 11 10.5 10l.5-1z" />
    </>
  ),
  telegram: (
    <path d="M4 11l16-6-3 14-4-4-3 3v-4l8-8-10 5z" />
  ),
  "chevron-down": <path d="M6 9l6 6 6-6" />,
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
};

export default function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
