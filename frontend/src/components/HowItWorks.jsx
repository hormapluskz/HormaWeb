import Card from "./Card";

export default function HowItWorks() {
  return (
    <section id="howItWorks" className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">

      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <h3 className="tracking-tight text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-normal leading-[1.2]">
          How it Works
        </h3>
        <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base px-2 sm:px-0">
          It starts with Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
        <Card
          src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69dcb3594df2fbeffe683659_Frame%201739335562.avif"
          text="Card 1"
          desc="some description"
        />
        <Card
          src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69dcb3585d63725e607372b2_Frame%201739335563.avif"
          text="Card 2"
          desc="some description"
        />
        <Card
          src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69dcb3598a7caa14c66acf86_Frame%201739335563-1.avif"
          text="Card 3"
          desc="some description"
        />
        <Card
          src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69ded23162bb97807a3c6490_Frame%201739335778-p-800.avif"
          text="Card 4"
          desc="some description"
        />
      </div>
    </section>
  );
}