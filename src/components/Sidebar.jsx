import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 
{ faHouse,
  faBuilding,
  faCube,
  faUpDown,
  faHourglass,
  faWallet,
  faBars,
  faBell,
  faCircleQuestion,
  faGear,
  faCircleUser,
  faEllipsisVertical,
  faLeaf,
  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../images/leaf.png'

const Sidebar = () => {

  const [isopen,setisopen] = useState(false)

  return (
    <div className='bg bg-gray-800 flex flex-col w-[100%] md:w-60 h-fit rounded-md md:ml-2 '>
        <div className='flex items-center'>
             <FontAwesomeIcon icon={faLeaf} className='pr-2 pl-2 decoration-amber-300 hidden md:block' />
           <div className='text-amber-300 cursor-pointer text-4xl hidden md:block'>Carbon Cell</div>
           <div className='px-2' onClick={()=>{
             setisopen(!isopen);
           }}><FontAwesomeIcon icon={faBars} className='cursor-pointer px-4' /></div>
        </div>
        <div className='hidden md:block'>
        <div className='bg bg-gray-400 flex items-center m-2 mt-6'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='mr-2 ml-2 '></FontAwesomeIcon>
            <div>Search</div>
        </div>
        <div className='flex flex-col text-white '>
            <div className='px-2 py-2 cursor-pointer flex items-center hover:text-green-400'>
               <FontAwesomeIcon icon={faHouse} className='pr-2' />
                <div>Home</div>
            </div>
            <div className='px-2 py-2 cursor-pointer flex items-center hover:text-green-400'>
                 <FontAwesomeIcon icon={faBuilding} className='pr-2' />
                <div>Organization</div>
            </div>
            <div className='px-2 py-2 cursor-pointer flex items-center hover:text-green-400'>
               <FontAwesomeIcon icon={faCube} className='pr-2' />
               <div>Assets</div>
            </div>
            <div className='px-2 py-2 cursor-pointer flex items-center hover:text-green-400'>
                <FontAwesomeIcon icon={faUpDown} className='pr-2' />
                <div>Trade</div>
            </div>
            <div className='px-2 py-2 cursor-pointer flex items-center hover:text-green-400'>
                <FontAwesomeIcon icon={faHourglass} className='pr-2'/>
                <div>History</div>
            </div>
            <div className='px-2 py-2 pb-28 cursor-pointer flex items-center hover:text-green-400'>
                <FontAwesomeIcon icon={faWallet} className='pr-2'/>
                <div>Wallet</div>
            </div>
            <div className='px-2 py-2 cursor-pointer flex items-center '>
                <FontAwesomeIcon icon={faBell} className='pr-2'/>
                <div className='pr-16 text-gray-500'>Notifications </div>
                <div className='w-5 bg-green-500'>12</div>
            </div>
            <div className='px-2 py-2 flex items-center cursor-pointer'>
                <FontAwesomeIcon icon={faCircleQuestion} className='pr-2'/>
                <div className='text-gray-500'>Support</div>
            </div>
            <div className='px-2 py-2 pb-5 flex items-center cursor-pointer'>
                <FontAwesomeIcon icon={faGear} className='pr-2'/>
                <div className='text-gray-500'>Settings</div>
            </div>
            <div className='flex bg bg-gray-600 cursor-pointer items-center text-center ml-2 mr-2 mb-2 rounded-md'>
                <FontAwesomeIcon icon={faCircleUser} className='pr-5 pl-2'/>
                <div className='flex flex-col text-sm items-start justify-center h-16'>
                    <div className='text-bold'>Brooklyn Simmons</div>
                    <div className='text-xs'>brooklyn@simmons.com</div>
                </div>
                <FontAwesomeIcon icon={faEllipsisVertical} className='pr-2 pl-5'/>
            </div>
        </div>
    </div>
 </div>
  )
}

export default Sidebar
