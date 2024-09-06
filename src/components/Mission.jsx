import React, { useRef, useEffect, useState } from 'react';

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen mb-0">
      <div 
        ref={ref}
        className={`flex bg-white shadow-md rounded-lg overflow-hidden max-w-5xl transition-transform duration-500 ${
          isVisible ? 'slide-up' : ''
        }`}
      >
        {/* Image Section */}
        <div className="w-1/3">
          <img 
            src="https://images.pexels.com/photos/27540337/pexels-photo-27540337/free-photo-of-a-woman-in-a-white-dress-is-standing-next-to-a-horse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Mission Image" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Section */}
        <div className="w-2/3 p-5">
          <div className="mb-3">
            <h2 className="text-xl font-bold">Our Vision</h2>
            <p className="text-gray-700 mt-1 text-lg font-quicksand">To be an Institute of repute recognized for excellence in education, innovation, and social contribution.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Our Mission</h2>
            <p className="text-gray-700 mt-1 text-lg font-quicksand">M1: Infrastructural Relevance Develop, maintain and manage our campus for our stakeholders. M2: Life-Long Learning Encourage our stakeholders to participate in lifelong learning through industry and academic interactions. M3: Social Connect Organize socially relevant outreach programs for the benefit of humanity.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
