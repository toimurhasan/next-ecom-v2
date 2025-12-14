import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">YourChoice</Link>
        <nav aria-label="Main navigation"> {/* nav placeholders */}</nav>
      </div>
    </header>
  );
}
