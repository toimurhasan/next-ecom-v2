import ImageOptimized from "../common/ImageOptimized";

export default function HeroSection() {
  return (
    <section className=" bg-green-50">
      <div className="flex justify-center mb-4 bg-green-50 max-w-7xl mx-auto px-4">
        <ImageOptimized
          src="/banner.png"
          alt="banner-img"
          width={1337}
          height={420}
          priority
        />
      </div>
    </section>
  );
}
