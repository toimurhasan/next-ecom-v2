export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>© {new Date().getFullYear()} YourChoice — All rights reserved</div>
        <div className="text-sm text-gray-300">Support · Terms · Privacy</div>
        <div className="text-sm text-gray-300">Follow us on social</div>
      </div>
    </footer>
  );
}
