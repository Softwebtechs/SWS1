import React from 'react'
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";





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
        <div className="h-64  bg-white pt-10 ml-56 ">
          <div className="flex flex-col gap-4 ml-5">
            <h1 className="text-blue-900 text-4xl font-bold ">
              Subscribe <span className="text-orange-500 ">For Newsletter</span>
            </h1>
            <div className="flex flex-row items-center gap-20 mb-20">
              <p>Sign up to get latest updates and news</p>
              <div className="flex flex-row max-w-screen-md gap-5">
                <input
                  className="border w-96 h-10 p-3 text-gray-400"
                  type="text"
                  value="Enter your mail address"
                />
                <button className="bg-blue-950 h-10 w-28 text-white">
                  Signup
                </button>
              </div>
            </div>
          </div>
          <div className="h-96 w-80 bg-gray-300 ml-4 drop-shadow-md flex flex-col gap-5">
            <div className="bg-orange-500 w-full h-10 p-2 text-white font-normal flex flex-row text-sm justify-center items-center gap-3">
              Follow us :{" "}
              <div className="flex flex-row gap-4">
                <TwitterIcon style={{ height: "15px", widows: "15px" }} />
                <FacebookIcon style={{ height: "15px", widows: "15px" }} />
                <InstagramIcon style={{ height: "15px", widows: "15px" }} />
                <LinkedInIcon style={{ height: "15px", widows: "15px" }} />
              </div>
            </div>
            <div className="pl-7 flex flex-col gap-4">
              <h1 className="text-blue-950 text-2xl font-bold">PATRAI</h1>
              <div className="w-64">
                <p className="text-gray-700 text-base font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className=" text-blue-950 font-semibold flex flex-col gap-4">
                <p>
                  Manufactory, 2nd Cross Street, <br />
                  Newyork, USA 10205.
                </p>
                <p className="flex gap-2 items-center ">
                  <PhoneIcon style={{ color: "rgb(252, 102, 3)" }} />
                  <div>
                    +00-123-456-7890 <br /> +00-123-456-7891
                  </div>
                </p>
                <p className="flex gap-2 items-center">
                  <EmailIcon style={{ color: "rgb(252, 102, 3)" }} />
                  <div>
                    admin@domain.com <br /> support@domain.com
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white h-96 flex justify-end">
          <div className="flex flex-row gap-10 pt-6 pr-48">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-medium ">Best Services</h1>
              <div className="flex flex-col  text-gray-200 text-base font-normal gap-1">
                <p>
                  {" "}
                  <ArrowRightAltIcon />
                  Material Engineering
                </p>
                <p>
                  {" "}
                  <ArrowRightAltIcon />
                  Agriculture proceessing
                </p>
                <p>
                  {" "}
                  <ArrowRightAltIcon />
                  Mechanical Engineering
                </p>
                <p>
                  {" "}
                  <ArrowRightAltIcon />
                  Chemical Research
                </p>
                <p>
                  {" "}
                  <ArrowRightAltIcon />
                  Material Engineering
                </p>
                <p>
                  {" "}
                  <ArrowRightAltIcon />
                  Agriculture Processing
                </p>
                <p>
                  {" "}
                  <ArrowRightAltIcon />
                  Mechanical Engineering
                </p>
                <p>
                  {" "}
                  <ArrowRightAltIcon />
                  Chemical Reseach{" "}
                </p>
                <p>
                  {" "}
                  <ArrowRightAltIcon />
                  Power & Energy
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-medium ">Quick Links</h1>
              <div className="flex flex-col  text-gray-200 text-base font-normal gap-1">
                <div className="flex gap-3">
                  <div className="flex flex-col">
                    <p>
                      <ArrowRightAltIcon /> Home
                    </p>
                    <p>
                      <ArrowRightAltIcon /> Features
                    </p>
                    <p>
                      <ArrowRightAltIcon /> About us
                    </p>
                    <p>
                      <ArrowRightAltIcon /> Services
                    </p>
                    <p>
                      <ArrowRightAltIcon /> Projects
                    </p>
                    <p>
                      <ArrowRightAltIcon /> News
                    </p>
                    <p>
                      <ArrowRightAltIcon /> Shop
                    </p>
                    <p>
                      <ArrowRightAltIcon /> Career
                    </p>
                    <p>
                      <ArrowRightAltIcon /> Contact us
                    </p>
                  </div>
                  <ul className="flex flex-col list-none">
                    <li>
                      <ArrowRightAltIcon /> Faq
                    </li>
                    <li>
                      <ArrowRightAltIcon /> Testimonials
                    </li>
                    <li>
                      <ArrowRightAltIcon /> Cart
                    </li>
                    <li>
                      <ArrowRightAltIcon /> Projects
                    </li>
                    <li>
                      <ArrowRightAltIcon /> News
                    </li>
                    <li>
                      <ArrowRightAltIcon /> Login
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-medium ">Latest Tweets</h1>
              <div className="flex flex-col  text-gray-200 text-base font-normal gap-1">
                <div>
                  <div className="flex gap-4">
                    <TwitterIcon />
                    <div className="flex flex-col gap-1">
                      <p className="text-gray-400">Here's How Advanced</p>
                      <p>Manufacturing Is Trans</p>
                      <p>
                        forming{" "}
                        <span className="text-gray-400">in The Aug</span> 06,
                        2018
                      </p>
                    </div>
                  </div>

                  <div className=" border-gray-700 border-b-2 mt-4"></div>

                  <div className="flex gap-2 mt-2">
                    <TwitterIcon />
                    <div className="flex flex-col gap-1">
                      <p className="text-gray-400">
                        The Month in WordPress: Jul
                      </p>
                      <p>
                        <span className="text-gray-400">2018</span>{" "}
                        http://t.co/vMhzYHrle
                      </p>
                      <p>
                        {" "}
                        <span className="text-gray-400">about</span> 15 days ago
                      </p>
                    </div>
                  </div>

                  <div className=" border-gray-700 border-b-2 mt-4"></div>

                  <div className="flex gap-2 mt-2">
                    <TwitterIcon />
                    <div className="flex flex-col gap-1">
                      <p className="text-gray-400">
                        The Month in WordPress: Jul
                      </p>
                      <p>
                        <span className="text-gray-400">2018</span>{" "}
                        http://t.co/vMhzYHrle
                      </p>
                      <p>
                        {" "}
                        <span className="text-gray-400">about</span> 1 month ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 text-white h-10 flex items-center justify-center">
          <p className="text-sm">@2018. All Rights Reserved by designthemes</p>
        </div>
      </div>
    </>
  )
}

export default Hero