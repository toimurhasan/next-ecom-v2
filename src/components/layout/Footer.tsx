import Link from "next/link";
import Image from "next/image";
import React, { FC, memo } from "react";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NewsletterSection from "./NewsletterSection";

type ListSectionProps = {
  title?: string;
  items: Array<{ label: string; href: string }>;
};

const ListSection: FC<ListSectionProps> = ({ title, items }) => (
  <section aria-label={title ?? "footer section"}>
    {title ? (
      <h3 className="uppercase text-green-600 font-semibold text-sm mb-4">
        {title}
      </h3>
    ) : null}
    <ul className="text-white space-y-3 py-4 text-sm">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="uppercase hover:text-green-400 transition-colors"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

const socialIcons = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
  { icon: FaXTwitter, label: "X / Twitter", href: "#" },
  { icon: FaInstagramSquare, label: "Instagram", href: "#" },
  { icon: FaTiktok, label: "TikTok", href: "#" },
];

const Footer: FC = () => {
  const topCategory = [
    { label: "Fashion", href: "/categories/fashion" },
    { label: "Smart phone", href: "/categories/smartphone" },
    { label: "Electronics", href: "/categories/electronics" },
    { label: "Grocery", href: "/categories/grocery" },
    { label: "Beauty", href: "/categories/beauty" },
    { label: "Furniture", href: "/categories/furniture" },
    { label: "Toys", href: "/categories/toys" },
  ];

  const electronics = [
    { label: "Gadget", href: "/categories/gadget" },
    { label: "Camera", href: "/categories/camera" },
    { label: "Computer", href: "/categories/computer" },
    { label: "Electric", href: "/categories/electric" },
    { label: "Television", href: "/categories/television" },
    { label: "Refrigerator", href: "/categories/refrigerator" },
    { label: "Smart phone", href: "/categories/smartphone" },
  ];

  const grocery = [
    { label: "Oil", href: "/categories/oil" },
    { label: "Dairy", href: "/categories/dairy" },
    { label: "Rice", href: "/categories/rice" },
    { label: "Baby care", href: "/categories/baby-care" },
    { label: "Milk", href: "/categories/milk" },
    { label: "Ready mix", href: "/categories/ready-mix" },
    { label: "Flour", href: "/categories/flour" },
  ];

  const beauty = [
    { label: "Grooming & wellness", href: "/categories/grooming-wellness" },
    { label: "Skin care", href: "/categories/skin-care" },
    { label: "Body care", href: "/categories/body-care" },
    { label: "Cosmetic", href: "/categories/cosmetic" },
    { label: "Health care", href: "/categories/health-care" },
    { label: "Hair care", href: "/categories/hair-care" },
    { label: "Oral care", href: "/categories/oral-care" },
  ];

  const fashion = [
    { label: "Men", href: "/categories/men" },
    { label: "Women", href: "/categories/women" },
    { label: "Kids", href: "/categories/kids" },
    { label: "Travel", href: "/categories/travel" },
    { label: "Jewellery", href: "/categories/jewellery" },
    { label: "Girls", href: "/categories/girls" },
    { label: "Cosmetics", href: "/categories/cosmetics" },
  ];

  const legalAndInfo = [
    { label: "About us", href: "/about" },
    { label: "Terms & condition", href: "/terms" },
    { label: "Privacy policy", href: "/privacy" },
    { label: "Cancellation & refund policy", href: "/refund-policy" },
    { label: "Contact us", href: "/contact" },
    { label: "FAQs", href: "/faq" },
    { label: "Store location", href: "/store-location" },
  ];

  return (
    <>
      <NewsletterSection />
      <footer className="bg-black py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:gap-14 gap-4 justify-center items-center sm:items-start text-center sm:text-start">
            <div>
              <Link href="/" className="inline-block shrink-0">
                <span className="text-2xl font-bold">
                  <span className="text-white">YOUR</span>
                  <span className="text-green-600">CHOICE</span>
                </span>
              </Link>
              <nav className="text-white flex flex-col gap-3 pt-4 text-sm">
                {legalAndInfo.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="uppercase hover:text-green-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="py-4">
                  <h3 className="uppercase text-sm pb-4 md:pb-2 border-b border-gray-700 sm:inline lg:block">
                    Share your love
                  </h3>
                  <div className="pt-4 flex gap-2 justify-center sm:justify-start">
                    {socialIcons.map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="border border-gray-700 p-2 text-2xl rounded-full hover:bg-white hover:text-black transition-colors"
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>

            <ListSection title="Top Category" items={topCategory} />
            <ListSection title="Electronics" items={electronics} />
            <ListSection title="Grocery" items={grocery} />
            <ListSection title="Beauty" items={beauty} />
            <ListSection title="Fashion" items={fashion} />
          </div>

          <div className="pb-4 px-2 hidden lg:block">
            <Image
              src="/pay-with.png"
              alt="Payment methods accepted"
              width={800}
              height={50}
              className="w-full h-auto"
              priority={false}
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
};

export default memo(Footer);
