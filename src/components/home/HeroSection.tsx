import ImageOptimized from "../common/ImageOptimized";

export default function HeroSection() {
  return (
    <section className=" bg-green-50 dark:bg-green-700">
      <div className="flex justify-center  container-custom mx-auto px-4">
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
