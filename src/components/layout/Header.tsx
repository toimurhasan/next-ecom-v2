"use client";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "../forms/SearchBar";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import LightningBoltIcon from "../icons/LightningBoltIcon";
import HeartIcon from "../icons/HeartIcon";
import ShoppingBagIcon from "../icons/ShoppingBagIcon";
import MenuIcon from "../icons/MenuIcon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      {/* Top Navigation Bar */}
      <div className="container-custom mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span className="text-2xl font-bold">
            <span className="text-gray-800 dark:text-white">YOUR</span>
            <span className="text-green-600 dark:text-green-400">CHOICE</span>
          </span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
          <SearchBar />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* OFFERS Button */}
          <Link
            href="/offers"
            className="hidden lg:flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all shadow-sm"
          >
            <LightningBoltIcon className="w-4 h-4" />
            <span>OFFERS</span>
          </Link>

          {/* WISHLIST Button */}
          <Link
            href="/wishlist"
            className="hidden lg:flex items-center gap-1.5 px-4 py-2.5 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
          >
            <HeartIcon className="w-4 h-4" />
            <span>WISHLIST</span>
          </Link>

          {/* LOGIN Button */}
          <Link
            href="/login"
            className="hidden lg:flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <span>LOGIN</span>
          </Link>

          {/* BAGS Button with Cart Count */}
          <Link
            href="/cart"
            className="flex items-center gap-1.5 px-4 py-2.5 bg-green-600 dark:bg-green-700 text-white font-semibold rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors shadow-sm"
            aria-label="Shopping cart"
          >
            <ShoppingBagIcon className="w-5 h-5" />
            <span>BAGS {cartCount || 0}</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 dark:text-gray-300"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Open menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Category Navigation Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="container-custom mx-auto px-4">
          <nav
            aria-label="Category navigation"
            className="hidden lg:flex items-center justify-center gap-4 py-3 overflow-x-auto"
          >
            <Link
              href="/categories/electronics"
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium whitespace-nowrap transition-colors"
            >
              Electronics
            </Link>
            <Link
              href="/categories/grocery"
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium whitespace-nowrap transition-colors"
            >
              Grocery
            </Link>
            <Link
              href="/categories/smartphone"
              className="text-green-600 dark:text-green-400 font-semibold whitespace-nowrap"
            >
              Smartphone
            </Link>
            <Link
              href="/categories/furniture"
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium whitespace-nowrap transition-colors"
            >
              Furniture
            </Link>
            <Link
              href="/categories/beauty"
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium whitespace-nowrap transition-colors"
            >
              Beauty
            </Link>
            <Link
              href="/categories/baby-care"
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium whitespace-nowrap transition-colors"
            >
              Baby Care
            </Link>
            <Link
              href="/categories/women"
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium whitespace-nowrap transition-colors"
            >
              Women
            </Link>
            <Link
              href="/categories/smart-watch"
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium whitespace-nowrap transition-colors"
            >
              Smart Watch
            </Link>
            <Link
              href="/categories/attar"
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium whitespace-nowrap transition-colors"
            >
              Attar
            </Link>
            <Link
              href="/clearance-sale"
              className="px-4 py-1.5 bg-orange-500 dark:bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-600 dark:hover:bg-orange-500 transition-colors whitespace-nowrap"
            >
              CLEARANCE SALE
            </Link>
            <Link
              href="/categories/men"
              className="px-4 py-1.5 bg-blue-500 dark:bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors whitespace-nowrap"
            >
              MEN
            </Link>
            <Link
              href="/combo"
              className="px-4 py-1.5 bg-teal-500 dark:bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-600 dark:hover:bg-teal-500 transition-colors whitespace-nowrap"
            >
              COMBO
            </Link>
            <Link
              href="/categories/footwear"
              className="px-4 py-1.5 bg-purple-500 dark:bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-600 dark:hover:bg-purple-500 transition-colors whitespace-nowrap"
            >
              FOOTWEAR
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-4">
            <SearchBar />
          </div>
          <nav className="flex flex-col px-4 pb-4">
            <Link
              href="/offers"
              className="flex items-center gap-2 py-2 text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-blue-500 dark:text-blue-400">⚡</span>
              <span>OFFERS</span>
            </Link>
            <Link
              href="/wishlist"
              className="py-2 text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              WISHLIST
            </Link>
            <Link
              href="/login"
              className="py-2 text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              LOGIN
            </Link>
            <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
            <Link
              href="/categories/electronics"
              className="py-2 text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Electronics
            </Link>
            <Link
              href="/categories/grocery"
              className="py-2 text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Grocery
            </Link>
            <Link
              href="/categories/smartphone"
              className="py-2 text-green-600 dark:text-green-400 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Smartphone
            </Link>
            <Link
              href="/categories/furniture"
              className="py-2 text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Furniture
            </Link>
            <Link
              href="/categories/beauty"
              className="py-2 text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Beauty
            </Link>
            <Link
              href="/categories/baby-care"
              className="py-2 text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Baby Care
            </Link>
            <Link
              href="/categories/women"
              className="py-2 text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Women
            </Link>
            <Link
              href="/categories/smart-watch"
              className="py-2 text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Smart Watch
            </Link>
            <Link
              href="/categories/attar"
              className="py-2 text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Attar
            </Link>
            <Link
              href="/clearance-sale"
              className="py-2 text-orange-500 dark:text-orange-400 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              CLEARANCE SALE
            </Link>
            <Link
              href="/categories/men"
              className="py-2 text-blue-500 dark:text-blue-400 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              MEN
            </Link>
            <Link
              href="/combo"
              className="py-2 text-teal-500 dark:text-teal-400 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              COMBO
            </Link>
            <Link
              href="/categories/footwear"
              className="py-2 text-purple-500 dark:text-purple-400 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              FOOTWEAR
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
