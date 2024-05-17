"use client";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialItem } from "./tetimonial-item";
import { Flex } from "@mantine/core";
import { ArrowRight, ArrowRotateRight } from "iconsax-react";

export const MeetTheTeam = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const team = [
    {
      text: "BA consultant",
      name: "Grace Odeinde",
      image: "/avatar0.png",
    },
    {
      text: "BA Consultant",
      name: "Shubhra Singh",
      image: "/avatar2.png",
    },

    {
      text: "Senior Developer",
      name: "Janos Kocsis",
      image: "/avatar1.png",
    },

    {
      text: "Software Testing Consultant",
      name: "Adedamola Adedeji",
      image: "/avatar.png",
    },
    {
        text:'Software developer',
        name:'Abiodun Busari'
    },
    {
      text: "Platform Manager ",
      name: "Teslim",
      image: "/teslim.jpeg",
    },
    {
      text: "Social Media Manager",
      name: "Zainab Muhammed",
      image: "/zainab.png",
    },
    // end
  ];

  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    focusOnSelect: true,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 889,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="testimonial-carousel  max-w-[1200px] mx-auto py-9 md:pb-40 overflow-x-hidden h-full flex flex-col gap-6 bg-[url('/public/team.png')] bg-no-repeat bg-contain">
      <Flex
        align="center"
        justify="center"
        gap={8}
        className="max-[890px]:justify-center"
      >
        <h2 className=" text-5xl text-grey text-center !no-underline h-[50px]">
          Meet The
        </h2>
        <h2 className="underline-colored  text-5xl text-grey text-center ">
          CEO
        </h2>
      </Flex>

      <TestimonialItem
        testimonial={"Founder/ Lead Consultant"}
        name={"Ibraheem Olatunde"}
      />

      <div className="flex flex-col gap-4">
        <h2 className=" text-[2rem] text-grey text-center !no-underline h-[50px]">
          Others on the team 
        </h2>
        <ul className="grid grid-cols-2 max-[650px]:grid-cols-1 max-[650px]:justify-items-center justify-between w-[90%] mx-auto gap-3">
            {
                team.map(({text,name},index)=>(
                    <li className="flex items-center gap-2 justify-start" key={index}>
                        <div className="flex  items-center gap-1">
                        <span className="font-bold text-grey">{name}</span> <ArrowRight/>
                        </div>
                        <span className="text-primary">{text}</span>
                    </li>
                ))
            }
        </ul>
      </div>
    </div>
  );
};
{
  /* <Slider {...settings}>

        {testimonialsData.map((testimonial, index) => (
            <div key={index} className="p-2">
                <TestimonialItem
                    testimonial={testimonial.text}
                    name={testimonial.name}
                    isActive={index === currentSlide} 
                    image={testimonial.image}
                />
            </div>
        ))}
    </Slider> */
}
