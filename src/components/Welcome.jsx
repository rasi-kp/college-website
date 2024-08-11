import React, { useEffect, useRef, useState } from 'react';

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(false);
  const welcomeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the animation is triggered
        }
      },
      {
        threshold: 0.1, // Adjust threshold as needed
      }
    );

    if (welcomeRef.current) {
      observer.observe(welcomeRef.current);
    }

    return () => {
      if (observer && welcomeRef.current) {
        observer.unobserve(welcomeRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={welcomeRef}
      className={`p-8 w-full ${isVisible ? 'slide-up' : ''}`}
    >
      <h1 className="text-3xl font-bold mb-4 text-center">Welcome to STM</h1>
      <p className="text-justify" style={styles.paragraph}>
        St Thomas Engineering College, Sivapuram, Mattannur was established by St Thomas Educational Society, Adoor with a view to impart high quality engineering education through systematic studies and efficient training. The college has a team of eminent faculty members and a disciplined atmosphere which help to promote a holistic approach to learning. There is a right balance of cognitive, conceptual, ethical, humane and spiritual growth as a whole.
        <br /><br />
        The institution within its short span of existence plans to be a centre of excellence in engineering education, by bringing out the young engineers devoted and socially committed. The college is approved by the All India Council for Technical Education and affiliated to both Kannur University and A P J Abdul Kalam Technological University.
        <br /><br />
        The college has been established in the interior area of Malabar with a view to cater to the needs of engineering education in the north-eastern part of the Malabar area, especially to people who belong to backward communities, tribal communities, and immigrant communities, who are otherwise deprived of qualitative higher education in their area. Nevertheless, the college is open to all meritorious students from all over Kerala to benefit from the best and disciplined Engineering education it imparts.
      </p>
    </div>
  );
};

const styles = {
  paragraph: {
    fontFamily: '"Quicksand", sans-serif',
    fontSize: '18px',
    lineHeight: '1.5',
  },
};

export default Welcome;
