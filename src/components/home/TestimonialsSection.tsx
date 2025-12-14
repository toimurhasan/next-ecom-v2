import Image from "next/image";
import QuoteIcon from "../icons/QuoteIcon";
import StarIcon from "../icons/StarIcon";
import SectionTitle from "../common/SectionTitle";

interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rahim Rahman",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/avatars/profile.png",
    role: "Software Engineer",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container-custom mx-auto px-4">
        <SectionTitle title="TESTIMONIALS" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="py-6 px-4 bg-[#EFF4FB] dark:bg-gray-800 "
            >
              <div className="space-y-4">
                <QuoteIcon className="w-12 h-12 text-green-600 dark:text-green-400" />
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  {testimonial.comment}
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-[18px] h-[18px] text-yellow-500"
                      filled={true}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden shrink-0">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-green-600 dark:text-green-400 font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role || "Customer"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
