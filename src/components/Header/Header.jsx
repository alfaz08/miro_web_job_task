import { MdArrowRightAlt, MdKeyboardArrowDown } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { useState } from "react";


const Header = () => {

  const [isOpen,setIsOpen] =useState(true)
 
  console.log(isOpen);

  return (
    <div>
      <div className="bg-black w-full">
        <h2 className="text-gray-400">miro.com</h2>
      </div>

      <div className='p-6 flex justify-between'>
        <div className={`hidden lg:block lg:flex`}>
          <h2 className="text-4xl font-bold">miro</h2>
          <div className="flex mt-3 ml-4">
            <h2>Product</h2>
            <MdKeyboardArrowDown className="mt-1 text-xl"/>
          </div>
          <div className="flex mt-3 ml-4">
            <h2>Solutions</h2>
            <MdKeyboardArrowDown className="mt-1 text-xl"/>
          </div>
          <div className="flex mt-3 ml-4">
            <h2>Resources</h2>
            <MdKeyboardArrowDown className="mt-1 text-xl"/>
          </div>
          <h2 className="flex mt-3 ml-4">Enterprise</h2>
          <h2 className="flex mt-3 ml-4">Pricing</h2>
        </div>

        {/* <div className=" drop-shadow-md block lg:hidden">
      <div tabIndex={0}  onClick={() => setIsOpen(!isOpen)} className="btn m-1 text-2xl hover:cursor-pointer">&#9776;</div>
      <ul tabIndex={0} className={` ${isOpen ? '' : 'hidden'} bg-gray-100 p-2 shadow rounded-box w-52`}>
        <li className="hover:bg-red-100 hover:cursor-pointer rounded-lg p-1"><a>Product</a></li>
        <li className="hover:bg-red-100 hover:cursor-pointer rounded-lg p-1"><a>Solutions</a></li>
        <li className="hover:bg-red-100 hover:cursor-pointer rounded-lg p-1"><a>Resources</a></li>
        <li className="hover:bg-red-100 hover:cursor-pointer rounded-lg p-1"><a>Enterprise</a></li>
        <li className="hover:bg-red-100 hover:cursor-pointer rounded-lg p-1"><a>Price</a></li>
      </ul>
    </div> */}

<div className="drop-shadow-md block lg:hidden" style={{ position: 'relative' }}>
  {
    isOpen ===true ?
    <div tabIndex={0} onClick={() => setIsOpen(!isOpen)} className="btn m-1 text-2xl hover:cursor-pointer">&#9776;</div>
    :
    <div tabIndex={0} onClick={() => setIsOpen(!isOpen)} className="btn p-1 bg-gray-100 m-1 text-2xl hover:cursor-pointer">&times;</div>
  }
  <ul tabIndex={0} className={`  ${isOpen ? 'hidden' : ''} bg-gray-100 p-2 shadow rounded-box w-52`} style={{ position: 'absolute', top: '60%', left: '0' }}>
    <li className="hover:bg-red-100 hover:cursor-pointer rounded-lg p-1"><a>Product</a></li>
    <li className="hover:bg-red-100 hover:cursor-pointer rounded-lg p-1"><a>Solutions</a></li>
    <li className="hover:bg-red-100 hover:cursor-pointer rounded-lg p-1"><a>Resources</a></li>
    <li className="hover:bg-red-100 hover:cursor-pointer rounded-lg p-1"><a>Enterprise</a></li>
    <li className="hover:bg-red-100 hover:cursor-pointer rounded-lg p-1"><a>Price</a></li>
  </ul>
</div>

       


        <div className="flex gap-4">
        <div className="flex mt-3 ml-4">
        <BsGlobe className="mt-1 text-xl"/>
          <h2 className="ml-2">EN</h2>
          </div>
          <h2 className="mt-3">Contact Sales</h2>
          <h2 className="mt-3">Login</h2>
          <div className="flex bg-blue-500 p-2 text-white rounded-l-3xl rounded-r-3xl">
          <button className="ml-2">
            Sign up free
          </button>
          <MdArrowRightAlt  className="mt-1 mr-2 text-xl"/>
          </div>
        </div>


       


      </div>
      <hr />






    </div>
  );
};

export default Header;