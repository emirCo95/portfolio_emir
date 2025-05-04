'use client';

import Image from 'next/image';
import image from '@/public/image.jpg';
import project_1 from '@/public/project_1.png';
import { Exo_2 } from 'next/font/google';
import { useRouter } from 'next/navigation';

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
      <div className="">
        <h1 className="text-center p-6 text-7xl">EMIR COKRLIJA</h1>
        <div className="grid grid-cols-3 grid-rows-2">
          <div
            onClick={() => router.push('https://hiking-landing.netlify.app/')}
            className="p-5 hover:scale-105 transition ease-in-500 cursor-pointer"
          >
            <Image src={project_1} alt="project 1" width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
}
