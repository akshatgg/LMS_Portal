import { useEffect } from 'react';

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
      {/* Content of your Home component */}
    </div>
  );
}

export default Home;
