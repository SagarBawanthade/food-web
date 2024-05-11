import {data} from './data/data.js'
import { useState } from 'react';

function Food(){
  //console.log(data)
   const[food,setfood]=useState(data);
  return(
    <>
    <div className='max-w-[1640px] m-auto px-4 py-12'>
    <h1 className=' text-orange-600 font-bold text-center text-4xl underline'>Top Rated Menu Items</h1>

    {/*filter row */}
    <div className='flex flex-col lg:flex-row justify-between'>

      {/* filter type */}
      <div>
       <p className=' font-bold '>Filter Type:-</p>
       <div className=' flex justify-between flex-wrap'>
        <button className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border-black border-2  rounded-xl px-6 py-1'>All</button>
        <button className='  m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border-black border-2  rounded-xl px-6 py-1'>Burger</button>
        <button className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  border-black border-2  rounded-xl px-6 py-1'>Pizza</button>
        <button className='  m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border-black border-2  rounded-xl px-6 py-1'>Salads</button>
        <button className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  border-black border-2  rounded-xl px-6 py-1'>chicken</button>
       </div>
      </div>
      

      {/*filter price */}
      <div>
        <p className=' font-bold'>Filter Price:-</p>
        <div className='flex justify-between max-w-[390px] w-full'>
        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  border-black border-2  rounded-xl px-6 py-1'>$</button>
        <button className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border-black border-2  rounded-xl px-6 py-1'>$$</button>
        <button className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border-black border-2  rounded-xl px-6 py-1'>$$$</button>
        <button className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border-black border-2  rounded-xl px-6 py-1'>$$$$</button>
      </div>
      </div>
    </div>

    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
     {food.map((item, index)=>(
      <div key={index} className=' border shadow-lg rounded-lg
      hover:scale-105 duration-300'>
        <img src={item.image} alt={item.name} 
        className=' w-full h-[200px] object-cover rounded-t-lg'
        />
        <div className=' flex justify-between px-2 py-3'>
          <p className=' font-bold'>{item.name}</p>
          <p>
            <span className=' bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
          </p>
        </div>
      </div>
     ))}
    </div>
    </div>
    </>
  )
}

export default Food;