import React from 'react'
import SendIcon from '@material-ui/icons/Send';


const Hero = () => {
  return (
    <>
      <div className='h-[600px]  flex items-center flex-col gap-10 justify-center mt-44 m-10  md:mt-0'>
        <div className=' flex items-center flex-col py-1'>
          <h1 className='text-blue-900 text-2xl font-bold mb-2'>Our Job Requirements</h1>
          <h1 className='text-orange-500 text-xl font-bold'>Open Positions</h1>
        </div>

        <div className='flex gap-24 flex-col md:flex-row static '>
          <div>
            <div className='h-4/5 w-96 bg-gray-400 '></div>
            <h1 className='text-blue-900 font-semibold text-lg'>Administrative/Support</h1>
            <h5 className='font-semibold'> <span className='text-orange-500'>Eligibility-</span>
              <span className='text-blue-500'> 2+years of experince</span>
              <span className='text-orange-500'> Vacancies -</span>
              <span className='text-blue-500'> 3 Post</span>
            </h5> <br />
            <p>Lorem ipsum dolor sit amet  elit. Impedit, possimus?</p> <br />
            <h2 className='text-orange-500'>Apply Now  > </h2>
          </div>


          <div className='md:flex  flex-col  gap-5 '>
            <div className='md:flex md:flex-row flex-col gap-3'>
              <div className='h-24 md:w-32 w-96 bg-gray-500'></div>
              <div>
                <h1 className='text-blue-900 font-semibold text-lg'>Finance/Accounting</h1>
                <h5 className='font-semibold'> <span className='text-orange-500'>Eligibility-</span>
                  <span className='text-blue-500'> 2+years of experince</span>
                  <span className='text-orange-500'> Vacancies -</span>
                  <span className='text-blue-500'> 3 Post</span>
                </h5> <br />
                <p>Lorem ipsum dolor sit amet  elit. Impedit, possimus?</p>
              </div>
            </div>

            <div className='md:flex flex-col md:flex-row gap-3'>
              <div className='h-24 md:w-32 w-96 bg-gray-500'></div>
              <div>
                <h1 className='text-blue-900 font-semibold text-lg'>Finance/Accounting</h1>
                <h5 className='font-semibold'> <span className='text-orange-500'>Eligibility-</span>
                  <span className='text-blue-500'> 2+years of experince</span>
                  <span className='text-orange-500'> Vacancies -</span>
                  <span className='text-blue-500'> 3 Post</span>
                </h5> <br />
                <p>Lorem ipsum dolor sit amet  elit. Impedit, possimus?</p>
              </div>
              
            </div>
            <div className='md:flex hidden flex-row gap-3'>
              <div className='h-24 w-32 bg-gray-500'></div>
              <div>
                <h1 className='text-blue-900 font-semibold text-lg'>Finance/Accounting</h1>
                <h5 className='font-semibold'> <span className='text-orange-500'>Eligibility-</span>
                  <span className='text-blue-500'> 2+years of experince</span>
                  <span className='text-orange-500'> Vacancies -</span>
                  <span className='text-blue-500'> 3 Post</span>
                </h5> <br />
                <p>Lorem ipsum dolor sit amet  elit. Impedit, possimus?</p>
              </div>
            </div>

          </div>
        </div>
        <button className='h-11 w-36 bg-blue-900 rounded text-white p-2'>View all post</button> <br />
      </div>


      <div className="flex flex-col">
        <div className="h-80  bg-blue-900 pt-20 ">
          <div className='md:flex md:flex-row flex-col ml-14 items-center gap-36 md:ml-80 mb-20'>
            <h1 className='text-white font-semibold'>Just Freshers</h1>
            <div className='h-24 w-96'>
              <h1 className='text-orange-500 font-semibold'>Experince Engineers</h1>
              <h1 className='text-white font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut velit id possimus rerum fugit distinctio autem quisquam, vero culpa architecto!</h1>
            </div>
            <h1 className='text-white font-semibold'>Admin Expert</h1>
          </div>

          <div className="h-auto md:w-2/3 w-96 md:ml-72 ml-12  bg-white  drop-shadow-md flex flex-col  gap-5">
            <div className='ml-5 font-semibold text-3xl flex flex-col gap-4'>
              <h1 className='text-blue-900 pt-5'>Position for <span className='text-orange-500'>Experince engineers</span></h1>
              <div className='h-auto w-full'>
              <p className='text-sm text-gray-500 text-center line-clamp-1'>Loeius. Magnam inventore neque sint tempora vero eos perferendis consectetur tenetur nihil dicta impedit veritatis numquam labore ex, quibusdam similique voluptates molestiae eius dignissimos provident enim? Rem amet ipsam quia autem, repellendus fugit reiciendis non dolor. Excepturi natus enim dignissimos modi vel sed hic corporis quam eligendi, ipsum animi repellendus provident dolorum!</p>
              </div>
            </div>

            <div className='md:flex flex-col md:flex-row gap-5 ml-5'>
              <div className=' md:w-1/3 w-full flex flex-col gap-4 m-1'>
                <h1 className='text-blue-900 font-semibold'>Job Requirements</h1>
                <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque, laudantium aliquam est a aut corporis quas nostrum inventore esse.</p>
                <div className='text-gray-500 ml-3'>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className='md:w-1/3 w-full flex flex-col gap-4 m-1'>
                <h1 className='text-blue-900 font-semibold'>Experience Required</h1>
                <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque, laudantium aliquam est a aut corporis quas nostrum inventore esse.</p>
                <div className='text-gray-500 ml-3'>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className='md:w-1/3 w-full flex flex-col gap-4 m-1'>
                <h1 className='text-blue-900 font-semibold'>How to Apply</h1>
                <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. esse.</p>
                <div>
                  <span className='text-orange-500'>Download Here > </span>
                  <p className='text-gray-500'>You can apply online form and submit for the post we listed here!</p>
                </div>
                <div className='flex justify-center text-center'>
                  <button className='text-white bg-blue-900 w-1/2 m-5 p-2'>Apply Online</button>
                </div>
              </div>



            </div>

          </div>
        </div>

        <div className="bg-white text-white h-96 flex items-center justify-center"></div>
      </div>

      <div className="flex flex-col">
        <div className="h-64  bg-white pt-10 ml-80 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-blue-900 text-4xl font-bold ">
              To Get a <span className="text-orange-500 ">New Job</span>
            </h1>
            <div className="flex flex-row items-center gap-20 mb-20">
              <p>Sign up to get latest updates and news</p>
              <div className="flex gap-5">
                <input className="border w-96 h-10" type="text" />
                <button className="bg-blue-950 h-10 w-28 text-white">
                  Signup <SendIcon  fontSize='small'/>
                </button>
              </div>
            </div>
          </div>
          <div className="h-96 w-56 bg-gray-300 ml-4 drop-shadow-md flex flex-col  gap-5">
            <div className="bg-orange-500 w-full h-10"></div>
          </div>
        </div>

        <div className="bg-black text-white h-96 flex items-center justify-center"></div>

        <div className="bg-blue-900 text-white h-10 flex items-center justify-center">
          <p className="text-sm">@2018. All Rights Reserved by designthemes</p>
        </div>
      </div>
    </>
  )
}

export default Hero