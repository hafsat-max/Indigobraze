import React, { useEffect, useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { Flex } from '@mantine/core';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const data = [
  {
    text: ' I wanted to take a moment to express my deep appreciation for the mentorship program provided by your organization. The support and guidance I received during this program have had a profound impact on my career, and I wanted to share my experience with you.',
    idx: 1
  },
  {
    text: 'When I first joined the mentorship program, I was working as a Project Leader at Network Rail. At that time, I had a solid background in project management, but I felt there were areas where I could further enhance my skills and knowledge. This is when I reached out to your organization for guidance and support. Your recommendations were practical and tailored to my specific needs and goals, making them all the more impactful.',
    idx: 2
  },
  {
    text: 'Through IndigoBraze Technologies mentorship, I gained confidence, a deeper understanding of agile project management, and improved communication and stakeholder management skills.',
    idx: 3
  },
  {
    text: 'Your mentorship sessions were motivating and reassuring, and your personalized professional development plan was immensely valuable. It guided me in refining my existing skills while acquiring new leadership abilities. Your support during my transition to a role in the Civil Service PMO, including interview preparation and presentation review, was invaluable, leading to my successful job transition.',
    idx: 4
  },
  {
    text: 'When I think about my PM journey, it all started with the excellent training sessions offered by Ibraheem. Your skills and knowledge of the Project Management lifecycle have been excellent in assisting me to comprehend and apply what I learnt. The training sessions were suited to my needs, and your real-life experience made them really engaging. Your assistance in preparing for my first project management position was critical to my success. Also, the continual coaching provided during the role has been genuinely remarkable',
    idx: 5
  },
  {
    text: ' I wanted to take a moment to express my deep appreciation for the mentorship program provided by your organization. The support and guidance I received during this program have had a profound impact on my career, and I wanted to share my experience with you.',
    idx: 6
  },
  {
    text: 'When I first joined the mentorship program, I was working as a Project Leader at Network Rail. At that time, I had a solid background in project management, but I felt there were areas where I could further enhance my skills and knowledge. This is when I reached out to your organization for guidance and support. Your recommendations were practical and tailored to my specific needs and goals, making them all the more impactful.',
    idx: 7
  },
  {
    text: 'Through IndigoBraze Technologies mentorship, I gained confidence, a deeper understanding of agile project management, and improved communication and stakeholder management skills.',
    idx: 8
  },
  {
    text: 'Your mentorship sessions were motivating and reassuring, and your personalized professional development plan was immensely valuable. It guided me in refining my existing skills while acquiring new leadership abilities. Your support during my transition to a role in the Civil Service PMO, including interview preparation and presentation review, was invaluable, leading to my successful job transition.',
    idx: 9
  },
  {
    text: 'When I think about my PM journey, it all started with the excellent training sessions offered by Ibraheem. Your skills and knowledge of the Project Management lifecycle have been excellent in assisting me to comprehend and apply what I learnt. The training sessions were suited to my needs, and your real-life experience made them really engaging. Your assistance in preparing for my first project management position was critical to my success. Also, the continual coaching provided during the role has been genuinely remarkable',
    idx: 10
  },
]

const value: Testimonials[] = new Array(3).fill(0).flatMap((_, idx) => {
  const clone = structuredClone(data);
  return clone.map((item) => {
    item.idx += clone.length * idx
    return item
  })
})


interface Testimonials {
  text: string;
  idx: number;
}

const moveItemInArray = (arr: Testimonials[], index: number) => {
  let arr1 = arr.slice(0, index - 2)
  let arr2 = arr.slice(index - 2)
  return arr2.concat(arr1)
}

export const Testimonial = () => {

  const [testimonials, setTestimonials] = useState<Testimonials[]>([])

  useEffect(() => {
    const arr1 = [...data, ...data]
    const firstMerge = arr1.map((item) => item.idx)
    setTestimonials(data)
  }, [])

  console.log({value, testimonials})

  const [parent] = useAutoAnimate({ duration: 500 })

  return (
    <div className='w-[88%] mx-auto py-6 flex flex-col gap-6'>
      <Flex align='center' gap={8} justify='center'>
        <h2 className=' text-5xl text-grey text-center !no-underline h-[50px]'> Our</h2><h2 className='underline-colored  text-5xl text-grey text-center '>Testimonials</h2>
      </Flex>
      <div className="flex flex-col items-center gap-2">
        <section ref={parent} className="flex w-full items-center justify-between">
          {
            testimonials.map((item, index) => (
              index < 5 &&
              <figure onClick={() => {
                setTestimonials(
                  moveItemInArray(data, index)
                )
              }} className={`each w-full ${index === 2 ? 'slide-active' : (index === 1 || index === 3) ? "before-after-index" : 'slide'} cursor-pointer`} key={item.idx}>
                <Image width={134} height={134} src={'/about.png'} alt='' className='rounded-full max-w-full' />
              </figure>
            ))
          }
        </section>
        <h3 className='text-center max-w-[500px]'>{data?.[0]?.text}</h3>
      </div>
    </div>
  )
}

