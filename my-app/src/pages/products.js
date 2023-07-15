import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  const navigatetodonate = () => {
    router.push('/donate');
  };

  return (
    <div className='main'>
      {/* Header code */}
      <div className='w-full py-10 px-9 sm:px-10'>
        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Card 1 */}
          <div className='shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-300'>
            <div className='bg-gray-300 w-full h-70 flex items-center justify-center'>
              <p className='text-2xl font-bold text-gray-700'><img src='https://media.istockphoto.com/id/1219641664/photo/group-of-ventilator-machines.jpg?s=2048x2048&w=is&k=20&c=145RkxDJ-tgnBg7rG9B0Ri36LMEwJvtOPoUC2gv008A=' alt=''/></p>
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-bold mb-2 text-center'>Ventilator</h2>
              <p className='text-black text-lg mb-2'>Price: 4,00,000</p>
              <div className='mt-4 text-center'>
                <button className='bg-green-600 text-white py-3 px-10 rounded-md' onClick={navigatetodonate}>
                  Buy
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-300'>
            <div className='bg-gray-300 w-full h-70 flex'>
              <p className='text-2xl font-bold text-gray-700'><img src='https://media.istockphoto.com/id/1131194018/photo/close-up-of-medical-oxygen-flow-meter-shows-low-oxygen-or-an-nearly-empty-tank.jpg?s=612x612&w=0&k=20&c=NnCjzvcb04FaRJcPH6KHmNAVW0o0xw1o1ZXO0GCDR8Q=' alt=''/></p>
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-bold mb-2 text-center'>Oxygen Cylinders</h2>
              <p className='text-black text-lg mb-2'>Price: 20,000</p>
              <div className='mt-4 text-center'>
                <button className='bg-green-600 text-white py-3 px-10 rounded-md' onClick={navigatetodonate}>
                  Buy
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-300'>
            <div className='bg-gray-300 w-full h-70 flex items-center justify-center'>
              <p className='text-2xl font-bold text-gray-700'><img src='https://media.istockphoto.com/id/477898536/photo/dialysis-machine-in-a-medical-center.jpg?s=612x612&w=0&k=20&c=E273NsXzVZxL4VyJ_B9468FY9SYmIUlpon8e1BXClO8=' alt=''/></p>
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-bold mb-2 text-center'>Dialysis Machine</h2>
              <p className='text-black text-lg mb-2'>Price: 2,50,000</p>
              <div className='mt-4 text-center'>
                <button className='bg-green-600 text-white py-3 px-10 rounded-md' onClick={navigatetodonate}>
                  Buy
                </button>
              </div>
            </div>
          </div>
          <div className='shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-300'>
            <div className='bg-gray-300 w-full h-70 flex items-center justify-center'>
              <p className='text-2xl font-bold text-gray-700'><img src='https://media.istockphoto.com/id/901063844/photo/medical-vital-signs-monitor-in-a-hospital.jpg?s=612x612&w=is&k=20&c=4aX-6oxiYNdYmasI1fnYGVSRR9Rlp-9olxkcz1F4gH8=' alt=''/></p>
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-bold mb-2 text-center'>Dialysis Machine</h2>
              <p className='text-black text-lg mb-2'>Price: 2,50,000</p>
              <div className='mt-4 text-center'>
                <button className='bg-green-600 text-white py-3 px-10 rounded-md' onClick={navigatetodonate}>
                  Buy
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
