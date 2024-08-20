import React from 'react'
import aboutfir from '../assets/images/about1.jpg'
import aboutsec from '../assets/images/about2.jpg'
import aboutthir from '../assets/images/about3.svg'
import aboutfour from '../assets/images/about4.svg'




const HomeAbout = () => {
  return (
    <div className="lg:flex lg:flex-row sm:flex-col md:flex-col xs:flex-col bg-cyan-50" >
      <section className='img-abt p-5 pl-5 md:pl-[72px] flex flex-row gap-7 md:justify-around  '>
        <div className="img-cont1 h-[400px] overflow-hidden lg:h-[500px]   border-4 rounded-3xl w-[300px]   border-red-400  ">
            <img src={ aboutfir } className='w-full h-full object-cover overflow-hidden' />
        </div>
        <div className="img-cont2 overflow-hidden h-[400px] lg:h-[500px] border-4 rounded-3xl lg:mt-40 md:mt-0 w-[300px]  border-sky-800  ">
            <img src={ aboutsec } className='w-full h-full object-cover overflow-hidden' />
        </div>
      </section>
      <section className='content-abt p-[30px] lg:mt-20 md:mt-2'>
        <div className='flex flex-row gap-3 '>
            <img src={aboutthir} alt="" />
            <p className='font-mono text-lg text-[#ff7350] font-semibold '>
                About Our College    
            </p>
        </div>
        <h1 className='leading-relaxed text-6xl font-extrabold font-mono mt-[14px]'>Welcome To STM</h1>
        <p className='font-quicksand text-base leading-normal text-justify'>
        St Thomas Engineering College, Sivapuram, Mattannur was established by  St Thomas Educational Society, Adoor with a view to impart high quality engineering education through systematic studies and efficient training. The college has a team of eminent faculty members and a disciplined atmosphere which help to promote a holistic approach to learning. There is a right balance of cognitive, conceptual, ethical, humane and spiritual growth as a whole.

        <br/><br/>The institution within its short span of existence plans to be a centre of excellence in engineering education, by bringing out the young engineers devoted and socially committed.The college is approved by the All India council for Technical Education and affiliated to both Kannur University and A P J Abdul Kalam Technological University.

        
        </p>
        <div className="about-btn mt-6 ">
            <button className='p-4 bg-sky-700 rounded-sm text-white font-bold font-sans flex flex-row gap-2 cursor-pointer hover:bg-sky-600 ease-in'>
                Read More
                <img src={aboutfour} alt="" />
            </button>
        </div>
      </section>
    </div>
  )
}

export default HomeAbout
