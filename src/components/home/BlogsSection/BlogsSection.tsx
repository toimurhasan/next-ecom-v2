import ImageOptimized from "@/components/common/ImageOptimized";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/ui/Button";
import Link from "next/link";


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
    image: "/blogs/fruit.png",
    excerpt: "প্রকৃতির সাথে সুস্থ থাকার উপায় সম্পর্কে জানুন...",
  },
];

export default function BlogsSection() {
  return (
    <section className=" dark:bg-gray-900">
      <div className="container-custom mx-auto px-4">
        <SectionTitle title="OUR NEW BLOGS" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white dark:bg-gray-900  shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <ImageOptimized src={blog.image} />
              </div>
              <div className="p-2">
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
