import { Flex } from "@mantine/core";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";

const data = [
  {
    text: " I wanted to take a moment to express my deep appreciation for the mentorship programme provided by your organization. The support and guidance I received during this programme have had a profound impact on my career, and I wanted to share my experience with you.",
    idx: 1,
    image: "/avatar.png",
  },
  {
    text: "When I first joined the mentorship programme, I was working as a Project Leader at Network Rail. At that time, I had a solid background in project management, but I felt there were areas where I could further enhance my skills and knowledge. This is when I reached out to your organization for guidance and support. Your recommendations were practical and tailored to my specific needs and goals, making them all the more impactful.",
    idx: 2,
    image: "/avatar1.png",
  },
  {
    text: "Through IndigoBraze Technologies mentorship, I gained confidence, a deeper understanding of agile project management, and improved communication and stakeholder management skills.",
    idx: 3,
    image: "/avatar2.png",
  },
  {
    text: "Your mentorship sessions were motivating and reassuring, and your personalized professional development plan was immensely valuable. It guided me in refining my existing skills while acquiring new leadership abilities. Your support during my transition to a role in the Civil Service PMO, including interview preparation and presentation review, was invaluable, leading to my successful job transition.",
    idx: 4,
    image: "/avatar3.png",
  },
  {
    text: "When I think about my PM journey, it all started with the excellent training sessions offered by Ibraheem. Your skills and knowledge of the Project Management lifecycle have been excellent in assisting me to comprehend and apply what I learnt. The training sessions were suited to my needs, and your real-life experience made them really engaging. Your assistance in preparing for my first project management position was critical to my success. Also, the continual coaching provided during the role has been genuinely remarkable",
    idx: 5,
    image: "/avatar.png",
  },
  // {
  //   text: ' I wanted to take a moment to express my deep appreciation for the mentorship programme provided by your organization. The support and guidance I received during this programme have had a profound impact on my career, and I wanted to share my experience with you.',
  //   idx: 6,
  //   image: '/avatar1.png'
  // },
  // {
  //   text: 'When I first joined the mentorship programme, I was working as a Project Leader at Network Rail. At that time, I had a solid background in project management, but I felt there were areas where I could further enhance my skills and knowledge. This is when I reached out to your organization for guidance and support. Your recommendations were practical and tailored to my specific needs and goals, making them all the more impactful.',
  //   idx: 7,
  //   image: '/avatar2.png'
  // },
  // {
  //   text: 'Through IndigoBraze Technologies mentorship, I gained confidence, a deeper understanding of agile project management, and improved communication and stakeholder management skills.',
  //   idx: 8,
  //   image: '/avatar3.png'
  // },
  // {
  //   text: 'Your mentorship sessions were motivating and reassuring, and your personalized professional development plan was immensely valuable. It guided me in refining my existing skills while acquiring new leadership abilities. Your support during my transition to a role in the Civil Service PMO, including interview preparation and presentation review, was invaluable, leading to my successful job transition.',
  //   idx: 9,
  //   image: '/avatar4.png'
  // },
  // {
  //   text: 'When I think about my PM journey, it all started with the excellent training sessions offered by Ibraheem. Your skills and knowledge of the Project Management lifecycle have been excellent in assisting me to comprehend and apply what I learnt. The training sessions were suited to my needs, and your real-life experience made them really engaging. Your assistance in preparing for my first project management position was critical to my success. Also, the continual coaching provided during the role has been genuinely remarkable',
  //   idx: 10,
  //   image: '/avatar5.png'
  // },
];

export const Testimonials = () => {
  const [slideIndex, setSlideShow] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    centerMode: true,
    autoplay: true,
    className: "center",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (cur: any, next: React.SetStateAction<number>) =>
      setSlideShow(next),
  };
  return (
    <div className="flex flex-col py-10 gap-6">
      <h2 className=" text-5xl text-grey text-center !no-underline h-[50px]">
        Testimonials
      </h2>

      <div className="w-[88%] mx-auto py-6 flex flex-col gap-6 slide-container">
        <Slider {...settings}>
          {data.map((item) => (
            <Flex className="flex-col" key={item.idx}>
              <figure
                className={`  cursor-pointer ${
                  item.idx === slideIndex + 1
                    ? `slide slide-active !opacity-100 translate-x-1 `
                    : `slide`
                }`}
                key={item.idx}
              >
                <Image
                  width={134}
                  height={134}
                  src={item.image}
                  alt=""
                  className="rounded-full max-w-full"
                />
              </figure>
            </Flex>
          ))}
        </Slider>
        {data.map((item) => (
          <h3 className="text-center max-w-[600px] self-center" key={item.idx}>
            {item.idx === slideIndex + 1 ? item.text : null}
          </h3>
        ))}
      </div>
    </div>
  );
};
