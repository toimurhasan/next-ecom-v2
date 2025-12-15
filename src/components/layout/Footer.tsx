import Link from "next/link";
import Image from "next/image";
import NewsletterSection from "./NewsletterSection";
import { ReactNode } from "react";
import {
  FacebookIcon,
  YoutubeIcon,
  XIcon,
  InstagramIcon,
  TiktokIcon,
} from "@/components/icons";

/* -------------------------------------------------------------------------- */
/* Types */
/* -------------------------------------------------------------------------- */

type NavItem = {
  label: string;
  href: string;
};

type FooterSection = {
  title?: string;
  items: NavItem[];
};

type SocialLink = {
  label: string;
  href: string;
  icon?: ReactNode;
};

/* -------------------------------------------------------------------------- */
/* Reusable Components */
/* -------------------------------------------------------------------------- */

function ListSection({ title, items }: FooterSection) {
  return (
    <section aria-label={title ?? "footer section"}>
      {title && (
        <h3 className="uppercase text-green-600 font-semibold text-sm mb-4">
          {title}
        </h3>
      )}

      <ul className="text-white space-y-3 py-4 text-sm">
        {items.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="uppercase hover:text-green-400 transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SocialLinks({ items }: { items: SocialLink[] }) {
  return (
    <div className="pt-4 flex gap-2 justify-center sm:justify-start">
      {items.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="border border-gray-700 p-2 rounded-full hover:bg-white hover:text-black transition-colors"
        >
          {icon ?? <span className="block w-5 h-5" />}
        </a>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Data */
/* -------------------------------------------------------------------------- */

const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "#",
    icon: <FacebookIcon className="w-5 h-5" />,
  },
  {
    label: "YouTube",
    href: "#",
    icon: <YoutubeIcon className="w-5 h-5" />,
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: <XIcon className="w-5 h-5" />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: <InstagramIcon className="w-5 h-5" />,
  },
  {
    label: "TikTok",
    href: "#",
    icon: <TiktokIcon className="w-5 h-5" />,
  },
];

const footerSections: FooterSection[] = [
  {
    title: "Top Category",
    items: [
      { label: "Fashion", href: "/categories/fashion" },
      { label: "Smart phone", href: "/categories/smartphone" },
      { label: "Electronics", href: "/categories/electronics" },
      { label: "Grocery", href: "/categories/grocery" },
      { label: "Beauty", href: "/categories/beauty" },
      { label: "Furniture", href: "/categories/furniture" },
      { label: "Toys", href: "/categories/toys" },
    ],
  },
  {
    title: "Electronics",
    items: [
      { label: "Gadget", href: "/categories/gadget" },
      { label: "Camera", href: "/categories/camera" },
      { label: "Computer", href: "/categories/computer" },
      { label: "Electric", href: "/categories/electric" },
      { label: "Television", href: "/categories/television" },
      { label: "Refrigerator", href: "/categories/refrigerator" },
      { label: "Smart phone", href: "/categories/smartphone" },
    ],
  },
  {
    title: "Grocery",
    items: [
      { label: "Oil", href: "/categories/oil" },
      { label: "Dairy", href: "/categories/dairy" },
      { label: "Rice", href: "/categories/rice" },
      { label: "Baby care", href: "/categories/baby-care" },
      { label: "Milk", href: "/categories/milk" },
      { label: "Ready mix", href: "/categories/ready-mix" },
      { label: "Flour", href: "/categories/flour" },
    ],
  },
  {
    title: "Beauty",
    items: [
      { label: "Grooming & wellness", href: "/categories/grooming-wellness" },
      { label: "Skin care", href: "/categories/skin-care" },
      { label: "Body care", href: "/categories/body-care" },
      { label: "Cosmetic", href: "/categories/cosmetic" },
      { label: "Health care", href: "/categories/health-care" },
      { label: "Hair care", href: "/categories/hair-care" },
      { label: "Oral care", href: "/categories/oral-care" },
    ],
  },
  {
    title: "Fashion",
    items: [
      { label: "Men", href: "/categories/men" },
      { label: "Women", href: "/categories/women" },
      { label: "Kids", href: "/categories/kids" },
      { label: "Travel", href: "/categories/travel" },
      { label: "Jewellery", href: "/categories/jewellery" },
      { label: "Girls", href: "/categories/girls" },
      { label: "Cosmetics", href: "/categories/cosmetics" },
    ],
  },
];

const legalLinks: NavItem[] = [
  { label: "About us", href: "/about" },
  { label: "Terms & condition", href: "/terms" },
  { label: "Privacy policy", href: "/privacy" },
  { label: "Cancellation & refund policy", href: "/refund-policy" },
  { label: "Contact us", href: "/contact" },
  { label: "FAQs", href: "/faq" },
  { label: "Store location", href: "/store-location" },
];

/* -------------------------------------------------------------------------- */
/* Footer */
/* -------------------------------------------------------------------------- */

export default function Footer() {
  return (
    <>
      <NewsletterSection />

      <footer className="bg-black py-10">
        <div className="container-custom mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:gap-14 gap-4 text-center sm:text-start">
            {/* Brand + Legal */}
            <div>
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold">
                  <span className="text-white">YOUR</span>
                  <span className="text-green-600">CHOICE</span>
                </span>
              </Link>

              <nav className="text-white flex flex-col gap-3 pt-4 text-sm">
                {legalLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="uppercase hover:text-green-400 transition-colors"
                  >
                    {label}
                  </Link>
                ))}

                <div className="py-4">
                  <h3 className="uppercase text-sm pb-4 border-b border-gray-700 sm:inline lg:block">
                    Share your love
                  </h3>

                  <SocialLinks items={socialLinks} />
                </div>
              </nav>
            </div>

            {footerSections.map((section) => (
              <ListSection key={section.title} {...section} />
            ))}
          </div>

          <div className="pb-4 px-2 hidden lg:block">
            <Image
              src="/pay-with.png"
              alt="Payment methods accepted"
              width={800}
              height={50}
              className="w-full h-auto"
            />
          </div>

          <div className="py-4 border-t border-gray-800 text-gray-400 text-center text-sm">
            © {new Date().getFullYear()} Your Choice Company Ltd. Gazipur,
            postal code - 1289, Dhaka Bangladesh.
          </div>
        </div>
      </footer>
    </>
  );
}
