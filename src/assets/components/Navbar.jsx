// // // import React from 'react'

// // // function Navbar() {
// // //   return (
// // //     <div className='flex justify-between'>
// // //         <div><img src="https://drive.google.com/file/d/1fU5wyh2wXmhNkMjLdX5uoMBEqlXpW2uL/view?usp=sharing" alt="" srcset="" /></div>
// // //         <div>sukhmoney</div>
// // //         <div>login signup contactus</div>
// // //     </div>
// // //   )
// // // }

// // // export default Navbar

// // import React from 'react';

// // function Navbar() {
// //   return (
// //     <>
// //     <nav className='flex justify-between items-center p-4  text-black bg-green-300'>
// //       <div>
        
// //       {/* <img src="https://drive.google.com/thumbnail?id=1BE-WrnRJGeXzDSQuGVIO7d6Xw3dz1Wq&sz=w1000" alt="None"/> */}
// //       <img src="https://i.ibb.co/3cvJNHQ/Whats-App-Image-2024-06-02-at-12-08-09-01cd75f9.jpg" alt="" srcset="" height={100} width={100} />
// //       </div>
// //       <div className="text-8xl font-bold  ">Sukhmoney</div>
// //       <div className="space-x-4">
// //         <a href="/login" className="hover:underline">Login</a>
// //         <a href="/signup" className="hover:underline">Signup</a>
// //         <a href="/contactus" className="hover:underline">Contact Us</a>
// //       </div>
// //     </nav>
   
// //     </>
// //   );
// // }

// // export default Navbar;



// import React from 'react';
// import './Navbar_style.css'; // Make sure to import your CSS file

// function Navbar() {
//   return (
//     <>
//       <nav className='flex justify-between items-center p-4 text-black bg-green-300'>
//         <div>
//           <img src="https://i.ibb.co/3cvJNHQ/Whats-App-Image-2024-06-02-at-12-08-09-01cd75f9.jpg" alt="None" height={100} width={100} />
//         </div>
//         {/* <div className="text-8xl font-bold irish">  Sukhmoney</div> */}
//         <div className="text-8xl font-bold irish"><a href="/" className="hover:underline irish">Sukhmoney</a></div>

//         <div className="space-x-4">
//           <a href="/login" className="hover:underline irish">Login</a>
//           <a href="/signup" className="hover:underline irish">Signup</a>
//           <a href="/contactus" className="hover:underline irish">Contact Us</a>
//           <a href="/moreinfo" className="hover:underline irish"> More Info </a>
          
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import './Navbar_style.css'; // Make sure to import your CSS file
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center p-4 text-black bg-green-300">
        <div>
          <img
            src="https://i.ibb.co/3cvJNHQ/Whats-App-Image-2024-06-02-at-12-08-09-01cd75f9.jpg"
            alt="Logo"
            height={100}
            width={100}
          />
        </div>
        <div className="text-4xl md:text-8xl font-bold irish">
          <a href="/" className="hover:underline irish">Sukhmoney</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex space-x-4 mt-4 md:mt-0 md:space-x-8`}
        >
          // <a href="/login" className="block mt-2 md:inline-block md:mt-0 hover:underline irish">Login</a>
          // <a href="/signup" className="block mt-2 md:inline-block md:mt-0 hover:underline irish">Signup</a>
          <a href="/contactus" className="block mt-2 md:inline-block md:mt-0 hover:underline irish">Contact Us</a>
          <a href="/moreinfo" className="block mt-2 md:inline-block md:mt-0 hover:underline irish">More Info</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
