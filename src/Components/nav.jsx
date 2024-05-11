function Nav(){
  return(
    <>
    <div className="bg-black text-white container min-h-screen bg-[url('Images/Image.png')] bg-center bg-cover px-28 py-5 relative">
    <nav className="flex items-center">
    <img src="Images/logo.png" alt=""  className="w-40 cursor-pointer"/>
    <ul className="flex-1 text-center">
      <li className="list-none inline-block px-2 mx-2"><a href="">Home</a></li>
      <li className="list-none inline-block px-2 mx-2"><a href="">About</a></li>
      <li className="list-none inline-block px-2 mx-2"><a href="">Features</a></li>
      <li className="list-none inline-block px-2 mx-2"><a href="">Contact us</a></li>
      <li className="list-none inline-block px-2 mx-2"><a href="">More</a></li>
    </ul>
    <img src="Images/cart.png" alt="" className="w-8 cursor-pointer"/>
    </nav>
    
    <div className="mt-40 max-w-2xl">
      <h1 className="text-6xl font-semibold leading-normal">Grocories <br />delivered in <span className="font-light">15 minutes</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis, voluptas rem natus exercitationem veritatis delectus, perferendis quaerat magnam libero dignissimos ratione eligendi magni iste ea, accusantium dolores molestiae quod!</p>

      <div className="mt-10 ">
        <a className=" bg-yellow-300 rounded-3xl py-3 px-8 font-medium inline-block mr-8 text-black hover:bg-transparent hover:border-yellow-300 hover:text-white hover:border" href="">Order Now</a>
        <a className="bg-yellow-300 rounded-3xl py-3 px-8 font-medium text-black hover:bg-transparent hover:border-yellow-300 hover:text-white hover:border" href="">Download App <span></span></a>
        </div>
    </div>

    <div>
      <img src="Images/grocery-image.png" className="w-full xl:w-1/2 xl:absolute bottom-0 right-20" alt="" />
    </div>
    </div>
    </>
  )
}

export default Nav;