import { url } from "inspector";
import Image, { StaticImageData } from "next/image";

// TestimonialItem.tsx
interface ITestimonialItemProps {
    testimonial: string;
    name: string;
    isActive: boolean;
    image: string;
}
export const TestimonialItem = ({ testimonial, name, isActive, image }:ITestimonialItemProps) => {
    const activeClass = "scale-100 bg-primary text-white h-[400px]";
    const normalClass = "scale-90 bg-white h-[380px]";

    return (
        <div className={`cursor-grab transition-transform duration-300 shadow-lg rounded-lg overflow-hidden mb-4 border flex flex-col ${isActive ? activeClass : normalClass}`}>
            <div className={` bg-cover bg-no-repeat flex-1`}
            style={{
                backgroundImage:`url(${image})`
            }}
            >

            </div>

            <div className="py-6 px-4 flex flex-col">
            <p className={`font-bold  text-2xl ${isActive? 'text-white line-clamp-10 md:line-clamp-12': 'text-[#292929]  line-clamp-8 md:line-clamp-10'}`}>{name}</p>
            <p className={`${isActive? 'text-white line-clamp-10 md:line-clamp-12': 'text-gray-600 line-clamp-8 md:line-clamp-10'}`}>{testimonial}</p>
            </div>
        </div>
    );
};