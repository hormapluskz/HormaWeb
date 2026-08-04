export default function LogoStrip({ logos }) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale opacity-50">
      {logos.map((logo) => (
        <img
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          className="h-5 md:h-7 w-auto object-contain"
        />
      ))}
    </div>
  );
}