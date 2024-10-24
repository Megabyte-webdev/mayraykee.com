
import Link from '../assets/pngs/link-icon.png'
import iIcon from '../assets/pngs/i-icon.png'
import WorldMap from '../assets/pngs/world-map.png'
import { useState } from 'react';
import Selector from '../components/Selector';
import NameTag from '../components/NameTag';

function InviteFriends() {

    const [selected, setSelected] = useState({id: 1, name: 'Anyone With Link'})
    const data = [{id: 1, name: 'Anyone With Link'}]

    return ( 
    <section className="pt-[3%] pl-[5%] text-gray-400 flex flex-col gap-[3%] w-full h-full">

        <h3 className="font-semibold ">Invite Group Members</h3>

        <div className="w-[50%] bg-white py-[2%] px-[3%] gap-[3%] flex flex-col h-[60%]">

            <div className="w-full h-[20%]  border-b items-center flex justify-between">
              <p className="font-semibold text-small">Share this link to group members only </p>
              <div className="flex ">
                <p className=" text-green font-semibold gap-[5px] text-small flex">
                    <img src={Link} className='h-[18px]'/>
                    Copy Link</p>  
              </div>
            </div>

            <div className='h-[60%] flex flex-col gap-[10%]'>
                <div className='h-[25%] bg-green/30 flex items-center pl-[3%]'>
                     <img src={iIcon} className='h-[65%]' />
                </div>

                <div className='w-full h-[25%] flex justify-between'>
                    <input type='text' className='h-full w-[70%] border focus:outline-0 border-lime-600 pl-[10px] text-small text-gray-400' placeholder='Email, Comma Seperated'/>
                      <button className='font-semibold text-small bg-green w-[25%] text-white rounded-[5px] duration-150 hover:scale-105 py-[5px]'>Invite</button>
                </div>

                <div className='flex h-[35%] py-[2.5%] border-b w-full'>
                    <div className='w-[60%] flex items-center'>
                    <img src={WorldMap} className='h-[70%]' />
                    <Selector selected={selected} setSelected={setSelected} data={data}/>
                     
                    </div>
                </div>

                <NameTag initials={'NA'} initialsBackground={'bg-pink-600'} name={'Nsikak Adam'} extraText={'(Admin)'}/>
            </div>

        </div>

    </section>);
}

export default InviteFriends;