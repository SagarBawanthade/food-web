import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu,AiOutlineSearch,AiFillTag} from 'react-icons/ai'
import {BsFillCartFill,BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends,FaWallet} from 'react-icons/fa'
import {MdFavorite,MdHelp} from 'react-icons/md'





function Navbar(){

 const[nav,setNav]=useState(false)


  return(
    <>
    <div className=" max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className=" flex items-center">
      <div onClick={()=> setNav(!nav)} className=" cursor-pointer">
      <AiOutlineMenu size={30}/>
      </div>
      <div>
        <h1 className=" text-2xl sm:text-3xl lg:text-4xl px-2">Best<span className=" font-bold">Eats</span></h1>
      </div>
      <div className=" flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
        <p className=" bg-black text-white p-2 rounded-full ">Delivery</p>
        <p className="p-2">Pickup</p>
      </div>
     </div>
     {/*search*/}

     <div className=" bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
      <AiOutlineSearch size={25}/>
      <input  className=" bg-transparent p-2 w-full focus:outline-none" type="text" placeholder="Search Food!" />
     </div>
     
    
      <button className="  hidden  md:flex border-white border-2 p-2 rounded-full bg-black text-white ">
        <BsFillCartFill size={23} className="mr-2"/>Cart
        </button>
         
         {/*overlays*/}
        {nav ? <div className=" bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>:''}

        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300">' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>

          <AiOutlineClose 
          onClick={()=>setNav(!nav)}
          size={30} className=" absolute right-4 top-4 cursor-pointer"/>
          <h2 className=" text-2xl p-4">Best <span className=" font-bold">Eats</span>
          </h2>

          <nav>
            <ul className="flex flex-col p-4 text-gray-800">
              
              <li className="flex text-xl py-4"><TbTruckDelivery size={30} className="mr-3"/> Orders</li>
              <li className="flex text-xl py-4"><MdFavorite size={30} className="mr-3"/>Favourites</li>
              <li className="flex text-xl py-4"><FaWallet size={30} className="mr-3"/> Wallet</li>
              <li  className="flex text-xl py-4"><MdHelp size={30} className="mr-3"/>Help</li>
              <li  className="flex text-xl py-4"><AiFillTag size={30} className="mr-3"/> Promotions</li>
              <li  className="flex text-xl py-4"><BsFillSaveFill size={30} className="mr-3"/>Best One</li>
              <li  className="flex text-xl py-4"><FaUserFriends size={30} className="mr-3"/> Invite Friends</li>
            </ul>
          </nav>
        </div>
     </div>
    
    </>
  )
}

export default Navbar;