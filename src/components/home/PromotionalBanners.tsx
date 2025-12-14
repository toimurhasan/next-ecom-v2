import Image from "next/image";

export default function PromotionalBanners() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Image src={"/promo.png"} width={318} height={253} alt="promo" />
          <Image src={"/promo.png"} width={318} height={253} alt="promo" />
          <Image src={"/promo.png"} width={318} height={253} alt="promo" />
          <Image src={"/promo.png"} width={318} height={253} alt="promo" />
        </div>
      </div>
    </section>
  );
}
