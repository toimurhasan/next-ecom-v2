import Image from "next/image";

const ProductShowcase = () => {
  return (
    <section className=" bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2  mx-auto px-4 py-12 container-custom">
        {/* Top-left large */}
        <div className="  md:col-span-2 md:row-span-1">
          <Image src={"/one1.png"} width={652} height={388} alt="one" />
        </div>

        {/* Right tall */}
        <div className="  md:col-span-2 md:row-span-2">
          <Image src={"/two1.png"} width={652} height={791} alt="one" />
        </div>
        <div className="flex md:col-span-2 md:row-span-1 gap-4">
          {/* Bottom-left small 1 */}
          <div>
            <Image src={"/three.png"} width={318} height={387} alt="three" />
          </div>

          {/* Bottom-left small 2 */}
          <div>
            <Image src={"/four.png"} width={318} height={387} alt="four" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
