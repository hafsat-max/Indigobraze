// Testimonials.js
'use client'
import { useState } from 'react';
import Slider from 'react-slick';
// import {TestimonialItem} from './TestimonialItem';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { TestimonialItem } from './tetimonial-item';
import { Flex } from '@mantine/core';


export const MeetTheTeam = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [testimonialsData] = useState([
        {
            text: 'Founder/ Lead Consultant',
            name: 'Ibrahim Olatunde',
            image: 'avatar.png'
        },
        {
            text: 'Founder/ Lead Consultant',
            name: 'Ibrahim Olatunde',
            image: 'avatar.png'
        },
        {
            text: 'Founder/ Lead Consultant',
            name: 'Ibrahim Olatunde',
            image: 'avatar.png'
        },
        {
            text: 'Founder/ Lead Consultant',
            name: 'Ibrahim Olatunde',
            image: 'avatar.png'
        },
        {
            text: 'Founder/ Lead Consultant',
            name: 'Ibrahim Olatunde',
            image: 'avatar.png'
        },

    ]);
    

    // Settings for the slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
        centerMode: true,
        focusOnSelect: true,
        beforeChange: (_:number, next:number) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 889,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
        ]
    };

    return (
        <div className="testimonial-carousel  max-w-[1200px] mx-auto py-12 md:pb-40 overflow-x-hidden h-full flex flex-col gap-6 bg-[url('/public/team.png')] bg-no-repeat bg-contain">
            <Flex align='center' justify='center' gap={8} className='max-[890px]:justify-center'>
                            <h2 className=' text-5xl text-grey text-center !no-underline h-[50px]'>Meet The</h2><h2 className='underline-colored  text-5xl text-grey text-center '>Team</h2>
                        </Flex>
            
            <Slider {...settings}>
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
            </Slider>
        </div>
    );
};