import Image from 'next/image'
import Link from 'next/link'
import TypewriterText from '@/src/components/layout/sidenav/TypewriterText'

export default function TopPart() {
  return (
        <div className='md:pt-20 flex flex-col items-center justify-start gap-3'> 
            <div className='hover:scale-105 transition-transform duration-200'>
                <Image 
                src="/profile1.jpeg" 
                alt="Profile Pitcure" 
                width={120}
                height={150}
                className='rounded-full border-1 shadow-lg'
                />
            </div>      
            <div>
                <Link href="/">
                    <p className="font-bold text-[20px]">Wahba </p> 
                </Link>
            </div>
            <div className=''>
                <p className="text-[13px] text-gray-600 dark:text-gray-300">
                    Cybersecurity <TypewriterText words={['student', 'learner', 'enthusiast']} /> from 🇮🇩
                </p> 
            </div>
        </div>
    )
}