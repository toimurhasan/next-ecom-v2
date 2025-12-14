"use client";
import { useState } from "react";
import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import CashOnDeliveryIcon from "../icons/CashOnDeliveryIcon";
import DeliveryTruckIcon from "../icons/DeliveryTruckIcon";
import ReturnIcon from "../icons/ReturnIcon";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="flex justify-center items-center py-8 bg-[#18181B] dark:bg-gray-950 text-white">
      <div className="flex flex-col justify-between w-full container-custom gap-10 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
          {/* Email Subscription */}
          <div className="flex flex-col gap-3 w-full flex-2">
            <div className="flex items-center gap-3.5 text-lg self-start">
              <EmailIcon className="w-6 h-6 text-white" />
              <span className="uppercase font-medium">
                get special discounts in your inbox
              </span>
            </div>
            <form
              onSubmit={handleSubmit}
              className="border border-gray-700 py-2 px-1 flex items-center"
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email to get offers, discounts and more."
                className="text-sm text-[#EFF4FB] dark:text-gray-300 bg-transparent py-1 px-2 w-full focus:outline-0"
                required
              />
              <button
                type="submit"
                className="text-black bg-white dark:bg-gray-200 dark:text-gray-900 text-sm py-1 px-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Phone Contact */}
          <div className="flex-[1.5]">
            <div className="flex items-center gap-3.5 text-lg">
              <PhoneIcon className="w-5 h-5 text-white" />
              <span className="uppercase font-medium">
                get special discounts in your inbox
              </span>
            </div>
            <div className="text-sm mt-3">
              <div>+8801700000000</div>
              <div>Open 24 Hours a Day, 7 Days a week</div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Cash on Delivery */}
          <div className="flex gap-2 items-center">
            <CashOnDeliveryIcon className="w-[34px] h-[34px] text-white" />
            <div className="flex flex-col">
              <span className="uppercase text-lg font-medium">
                cash on delivery
              </span>
              <span className="text-sm"> Pay cash at your doorstep</span>
            </div>
          </div>

          {/* Delivery */}
          <div className="flex gap-2 items-center lg:justify-self-center">
            <DeliveryTruckIcon className="w-[34px] h-[34px] text-white" />
            <div className="flex flex-col">
              <span className="uppercase text-lg font-medium">delivery</span>
              <span className="text-sm">All over Bangladesh</span>
            </div>
          </div>

          {/* Happy Return */}
          <div className="flex gap-2 items-center lg:justify-self-center">
            <ReturnIcon className="w-[34px] h-[34px] text-white" />
            <div className="flex flex-col">
              <span className="uppercase text-lg font-medium">
                happy return
              </span>
              <span className="text-sm">7 days return facility</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
