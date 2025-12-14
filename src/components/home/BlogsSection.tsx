import Link from "next/link";
import Button from "../ui/Button";

interface Blog {
  id: string;
  title: string;
  image: string;
  excerpt: string;
}

const blogs: Blog[] = [
  {
    id: "1",
    title: "প্রাকৃতিক স্বাস্থ্য টিপস",
    image: "/blogs/blog1.jpg",
    excerpt: "প্রকৃতির সাথে সুস্থ থাকার উপায় সম্পর্কে জানুন...",
  },
  {
    id: "2",
    title: "অর্গানিক খাবারের উপকারিতা",
    image: "/blogs/blog2.jpg",
    excerpt: "অর্গানিক খাবার কেন আপনার স্বাস্থ্যের জন্য গুরুত্বপূর্ণ...",
  },
  {
    id: "3",
    title: "হোম মেডিসিন গাইড",
    image: "/blogs/blog3.jpg",
    excerpt: "ঘরোয়া প্রতিকারের মাধ্যমে সাধারণ রোগের চিকিৎসা...",
  },
  {
    id: "4",
    title: "সুস্থ জীবনযাপনের গাইড",
    image: "/blogs/blog4.jpg",
    excerpt: "সুস্থ ও সুখী জীবনযাপনের জন্য প্রয়োজনীয় টিপস...",
  },
];

export default function BlogsSection() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          OUR NEW BLOGS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <span className="text-6xl">🌿</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                <Link href={`/blog/${blog.id}`}>
                  <Button className="w-full text-sm">READ MORE</Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

