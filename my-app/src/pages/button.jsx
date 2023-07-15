import React from 'react';

const button = ({title}) => {
  return (
    <div>
      <button className="h-12 px-6 m-2 text-3xl bg-white hover:bg-black text-black-700 font-semibold hover:text-white py-2 border border-black-500 hover:border-black rounded cursor-pointer">{title}</button> 
        
    </div>
  )
}

export default button
