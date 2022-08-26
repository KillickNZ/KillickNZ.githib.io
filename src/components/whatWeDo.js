import React from 'react'
import Seo from "../components/seo"


function whatWeDo() {
  return (
   <div className="py-32 flex flex-col justify-between items-center">
   <div className='mt-6 w-10/12 md:w-4/5 lg:w-2/5 pb-12 flex-1 flex-col justify-between items-center'>
     <Seo title="Home" />
     <h1 className='text-6xl text-white text-center font-serif'>WHAT WE DO</h1>
     <p className='mt-20 text-white text-left font-serif text-xl'>
       D1 is a rider owned wholesale company dedicated to bringing you quality brands that the others have overlooked.
     </p>
   </div>
 </div>
  )
}

export default whatWeDo