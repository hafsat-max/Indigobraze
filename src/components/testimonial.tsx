import React, { useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { Flex } from '@mantine/core';

const data=[
  {
    text:' I wanted to take a moment to express my deep appreciation for the mentorship program provided by your organization. The support and guidance I received during this program have had a profound impact on my career, and I wanted to share my experience with you.',
    idx:1
  },
  {
    text:'When I first joined the mentorship program, I was working as a Project Leader at Network Rail. At that time, I had a solid background in project management, but I felt there were areas where I could further enhance my skills and knowledge. This is when I reached out to your organization for guidance and support. Your recommendations were practical and tailored to my specific needs and goals, making them all the more impactful.',
    idx:2
  },
  {
    text:'Through IndigoBraze Technologies mentorship, I gained confidence, a deeper understanding of agile project management, and improved communication and stakeholder management skills.',
    idx:3
  },
  {
    text:'Your mentorship sessions were motivating and reassuring, and your personalized professional development plan was immensely valuable. It guided me in refining my existing skills while acquiring new leadership abilities. Your support during my transition to a role in the Civil Service PMO, including interview preparation and presentation review, was invaluable, leading to my successful job transition.',
    idx:4
  },
  {
    text:'When I think about my PM journey, it all started with the excellent training sessions offered by Ibraheem. Your skills and knowledge of the Project Management lifecycle have been excellent in assisting me to comprehend and apply what I learnt. The training sessions were suited to my needs, and your real-life experience made them really engaging. Your assistance in preparing for my first project management position was critical to my success. Also, the continual coaching provided during the role has been genuinely remarkable',
    idx:5
  },
]
export const Testimonial = () => {
  const [slideIndex, setSlideIndex]= useState(0);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange:(cur: any,next: React.SetStateAction<number>)=>setSlideIndex(next),
    centerMode:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className='w-[88%] mx-auto py-6 flex flex-col gap-6'>
       <Flex align='center' gap={8} justify='center'>
                <h2 className=' text-5xl text-grey text-center !no-underline h-[50px]'> Our</h2><h2 className='underline-colored  text-5xl text-grey text-center '>Testimonials</h2>
                </Flex>
      <Slider {...settings}>
        {
          data.map((item)=>(
        <figure className={`each w-full ${item.idx===slideIndex?'slide-active':'slide'}`}  key={item.idx}>
          <Image width={134} height={134} src={'/about.png'} alt='' className='rounded-full max-w-full' />
          <h3 className='text-center'>{item.text}</h3>
        </figure>
          ))
        }
      </Slider>
    </div>
  )
}

