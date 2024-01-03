// mobile-first implementation


import Header from './_components/header';
import Footer from './_components/footer';
import { Princess_Sofia } from 'next/font/google';


export default function Home() {
  return (
    <div className='flex flex-col justify-between min-h-[150rem] bg-[#EBEEF4]'>
        <Header></Header>
        <main className='flex-grow '>
        <div className="relative bg-cover bg-left-top h-64 max-w-screen pt-4 md:pt-0" style={{ backgroundImage: "url('/img/cover.png')" }}>
            <div className='mx-auto max-w-[12%] md:max-w-[5%] pt-[2rem]'>
                <img src="/img/mtrp_ico_white_withtext.png" className="max-w-[13rem] md:max-w-[22rem]" alt="" />
            </div>
        </div>
        <div className="flex-grow relative w-full h-[80rem]">
        <div className="absolute inset-0 opacity-20 blur-sm"></div>

        <div className="absolute inset-0">
        <div className="relative bg-[#15f7ff2d] bg-cover bg-left-top h-[18rem] sm:h-[14.8rem] max-w-screen pt-4" >
            <div className=" whitespace-pre-line font-bold text-2xl text-[1.3rem] px-2">
                <p className='text-[#3E4154]'>Passionate about Maths?</p>
                <p className='text-[#545973]'>Showcase your talent with MTRP</p>
            </div>
            <p className='leading-5 p-2'>
                MTRP is the perfect platform for all students who are passionate for Mathematics. 
                The purpose of this programme is to take mathematics beyond standard textbooks by inspiring innovative and non-routine critical thinking among students. 
                Know more <a href="" className='underline text-blue-500'>here</a>.
                
            </p>
            <button type="button" className="mx-4 my-4 text-white shadow-lg bg-gradient-to-br from-[#073b59] to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">Register Now</button>

        </div>
        <div className="relative bg-[#7F8193] bg-cover bg-left-top h-[14rem] max-w-screen pt-4" >
            <div className=" whitespace-pre-line font-bold text-2xl text-[1.3rem] px-2">
                <p className='text-[#F9DEB5]'>Eligibility</p>
            </div>
            <p className='leading-5 p-2 text-white'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reiciendis maxime dolorum et nisi ex obcaecati, culpa aperiam deserunt aspernatur vitae fugit ea explicabo odio, enim praesentium natus corrupti nostrum!  
            </p>
        </div>
        <div className="relative bg-[#15f7ff2d] bg-cover bg-left-top h-[14rem] max-w-screen pt-4" >
            <div className=" whitespace-pre-line font-bold text-2xl text-[1.3rem] px-2">
                <p className='text-[#3E4154]'>Problem Primer</p>
                <p className='text-xl font-light'>Coming soon.</p>
            </div>
            <p className='leading-5 p-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            </p>
        </div>
        <div className="relative bg-[#7F8193] bg-cover bg-left-top h-[14rem] max-w-screen pt-4" >
            <div className=" whitespace-pre-line font-bold text-2xl text-[1.3rem] px-2">
                <p className='text-[#F9DEB5]'>Key Dates</p>
            </div>
            <p className='leading-5 p-2 text-white'>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-start">
                        <p className='px-2'>Registration Starts: </p>
                    </div>
                    <div className="flex flex-row justify-start">
                        <p className='px-2'>Registration Ends: </p>
                    </div>
                    <div className="flex flex-row justify-start">
                        <p className='px-2'>Release of Admit Cards: </p>
                    </div>
                    <div className="flex flex-row justify-start">
                        <p className='px-2'>Exam Date: </p>
                    </div>
                    <div className="flex flex-row justify-start">
                        <p className='px-2'>Announcement of Results: </p>
                    </div>
                    <div className="flex flex-row justify-start">
                        <p className='px-2'>Camp Dates: </p>
                    </div>
                </div>
            </p>
        </div>
        <div className='flex'>
            <div className="h-auto w-auto bg-gradient-to-r flex flex-col from-[#f9deb57f] via-[#c68d38c2] to-[#f9deb5a2]">
                <p className='text-center text-2xl p-2'>Speakers for the Winter Camp</p>
                <div className="flex-grow flex flex-row flex-wrap justify-center bg-gradient-to-b from-[#00000079] to-[#F9DEB5]">
                    <div className='flex flex-col p-5'>
                        <img src="/img/speakers/gilbert_strang.png" className="w-[8rem]" alt="" />
                        <p className='text-center'>Gilbert Strang</p>
                    </div>
                    <div className='flex flex-col p-5'>
                        <img src="/img/speakers/michael_penn.png" className="w-[8rem]" alt="" />
                        <p className='text-center'>Michael Penn</p>
                    </div>
                    <div className='flex flex-col p-5'>
                        <img src="/img/speakers/malabika_pramanik.png" className="w-[8rem]" alt="" />
                        <p className='text-center'>Malabika Pramanik</p>
                    </div>
                    <div className='flex flex-col p-5'>
                        <img src="/img/speakers/meg_crofroot.png" className="w-[8rem]" alt="" />
                        <p className='text-center'>Meg Crofroot</p>
                    </div>
                    <div className='flex flex-col p-5'>
                        <img src="/img/speakers/srinivas_bhogle.png" className="w-[8rem]" alt="" />
                        <p className='text-center'>Srinivas Bhogle</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <p className='text-center text-2xl p-2'>Our Sponsors</p>
        </div>
        </div>
        </div>
        </main>
        <Footer></Footer>
    </div>
  )
}
