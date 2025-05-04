'use client';

import Image from 'next/image';
import image from '@/public/image.jpg';
import project_1 from '@/public/project_1.png';
import project_2 from '@/public/project_2.png';
import project_3 from '@/public/project_3.png';
import project_4 from '@/public/project_4.png';
import { Exo_2 } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { Github, Linkedin } from 'lucide-react';

const exo = Exo_2({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Home() {
  const router = useRouter();

  return (
    <div
      className={`grid grid-cols-2 grid-rows-1 ${exo.className} antialiased`}
    >
      <div className="h-screen">
        <Image
          src={image}
          alt="main image"
          width={1000}
          height={1000}
          className="h-full object-fill"
        />
      </div>
      <div className="relative">
        <div className="absolute bottom-0 right-0 flex gap-4 p-5">
          <Linkedin
            className="cursor-pointer"
            onClick={() =>
              router.push(
                'https://www.linkedin.com/in/emir-cokrlija-28299b1a6/'
              )
            }
          />
          <Github
            className="cursor-pointer"
            onClick={() => router.push('https://github.com/emirCo95')}
          />
        </div>
        <h1 className="text-center p-6 text-7xl bg-black text-white">
          EMIR COKRLIJA
        </h1>
        <div className="grid grid-cols-3 grid-rows-2">
          <div
            onClick={() => router.push('https://hiking-landing.netlify.app/')}
            className="w-[300px] h-[300px] p-5 hover:scale-105 transition ease-in-500 cursor-pointer"
          >
            <Image
              className="w-full h-full object-cover"
              src={project_1}
              alt="project 1"
              width={500}
              height={500}
            />
          </div>
          <div
            onClick={() =>
              router.push('https://borcelle-boutique.netlify.app/')
            }
            className="w-[300px] h-[300px] p-5 hover:scale-105 transition ease-in-500 cursor-pointer"
          >
            <Image
              className="w-full h-full object-cover"
              src={project_2}
              alt="project 2"
              width={500}
              height={500}
            />
          </div>
          <div
            onClick={() =>
              router.push('https://cuisine-restaurant1.netlify.app/')
            }
            className="w-[300px] h-[300px] p-5 hover:scale-105 transition ease-in-500 cursor-pointer"
          >
            <Image
              className="w-full h-full object-cover border-2 border-black"
              src={project_3}
              alt="project 3"
              width={500}
              height={500}
            />
          </div>
          <div
            onClick={() =>
              router.push('https://elysium-photography.netlify.app/')
            }
            className="w-[300px] h-[300px] p-5 hover:scale-105 transition ease-in-500 cursor-pointer"
          >
            <Image
              className="w-full h-full object-cover border-2 border-black"
              src={project_4}
              alt="project 4"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
