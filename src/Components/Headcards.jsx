
function Headcards(){
  return(
    <>
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      
    <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-3xl px-2 pt-4">Sun's Out, Bogo's Out</p>
          <p className="px-2">Throghout 24/7</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-3 rounded-md font-medium p-1">Order Now!</button>
        </div>
        <img  className=" rounded-xl max-h-[1640px] md:max-h-[200px] w-full object-cover" src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>

      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-3xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-3 rounded-md font-medium p-1">Order Now!</button>
        </div>
        <img  className=" rounded-xl max-h-[1640px] md:max-h-[200px] w-full object-cover" src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>

      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-3xl px-2 pt-4">We Deliver Deserts too</p>
          <p className="px-2">Tasty Treats</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-3 rounded-md  font-medium p-1">Order Now!</button>
        </div>
        <img  className=" rounded-xl max-h-[1640px] md:max-h-[200px] w-full object-cover" src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
    </div>
    </>
  )
}

export default Headcards;