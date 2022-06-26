import Navbar from './Navbar';
import Image from 'next/image';
import Button from '../Button';

const Hero = () => {
  return (
    <div className='relative' id='home'>
      <div className='absolute top-0 left-0 -z-10 h-screen w-full'>
        <Image
          src='/bg-hero.png'
          layout='fill'
          objectFit='cover'
          objectPosition='top'
          priority
          quality={100}
        />
      </div>
      <div className='absolute top-0 left-0 z-0 h-screen w-full bg-black/10'></div>
      <div className='h-screen container px-12 flex flex-col z-10 relative'>
        <Navbar />
        <div className='flex flex-col justify-center items-center text-center flex-grow -mt-32 max-w-4xl mx-auto'>
          <h1 className='font-heading text-7xl font-bold text-white tracking-tight'>
            Rewards for fighting climate change
          </h1>
          <p className='text-white/60 mt-5'>
            Design Maestro is a free extension for Keyboard Maestro app. It lets
            you automate tasks that you repeat hundreds of times each day.
          </p>
          <Button className='mt-10 px-10 py-3'>Start Helping</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
