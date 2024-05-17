import { url } from "inspector";
import Image, { StaticImageData } from "next/image";

// TestimonialItem.tsx
interface ITestimonialItemProps {
  testimonial: string;
  name: string;
}
export const TestimonialItem = ({
  testimonial,
  name,
}: ITestimonialItemProps) => {5
  return (
    <div
      className={`cursor-grab transition-transform duration-300 shadow-lg rounded-lg overflow-hidden mb-4 border flex flex-col bg-primary w-[60%] h-[600px] mx-auto `}
    >
      <div
        className={` bg-cover bg-no-repeat bg-center flex-1 `}
        style={{
          backgroundImage: `url(/ibroheem.png)`,
        }}
      >
      </div>

      <div className="py-6 px-4 flex flex-col">
        <p
          className={`font-bold  text-2xl  'text-white line-clamp-10 md:line-clamp-12 text-white`}
        >
          {name}
        </p>
        <p className={` text-white line-clamp-10 md:line-clamp-12' }`}>
          {testimonial}
        </p>
      </div>
    </div>
  );
};

// : 'text-[#292929]  line-clamp-8 md:line-clamp-10'}
// 'text-gray-600 line-clamp-8 md:line-clamp-10
