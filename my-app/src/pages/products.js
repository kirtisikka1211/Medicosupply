import Link from 'next/link';

const Home = () => {
  const navigatetodonate = () => {
    // Handle navigation to donation page
  };

  return (
    <div className='main'>
      {/* Header code */}
      <div className='w-full py-10 px-9 sm:px-10'>
        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Replace this with your product card generation */}
          <div className='shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-300'>
            <div className='bg-gray-300 w-full h-64 flex items-center justify-center'>
              <p className='text-2xl font-bold text-gray-700'>No image available</p>
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-bold mb-2 text-center'>Product Name</h2>
              <p className='text-gray-600 text-lg mb-2'>Price</p>
              <div className='mt-4 text-center'>
                <button className='bg-green-600 text-white py-3 px-4 rounded-md' >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
