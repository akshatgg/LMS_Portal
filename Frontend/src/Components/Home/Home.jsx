import Lottie from 'lottie-react'
import { useEffect } from 'react';

import animation from "../../assets/Lottie JSON/Animation - 1708716005607.json"

function Home() {
  useEffect(() => {
    // Apply styles to the body to hide overflow
    document.body.style.overflowY = 'hidden';

    // Clean up function to remove styles when component unmounts
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return (
    <div className="bg-[#1D232A] h-screen">
      <div>
        <div>

        </div>
        <div>
        <Lottie 
           animationData={animation}
           loop={true}
           autoplay={true}
           className='h-[500px]  col-start-1'
           />
        </div>
      </div>
    </div>
  );
}

export default Home;
