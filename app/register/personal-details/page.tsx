
import Header from '../../_components/header';
import Footer from '../../_components/footer';
import './styles.css';

export default function Personal() {
  return (
    <div className='flex flex-col justify-between h-screen bg-[#EBEEF4]'>
      <Header></Header>
      <main className='bg-[#EBEEF4]'>
        <div className='details body mx-20 mb-auto mt-4 text-[#000000]'>
          <div className='flex flex-row p-4 justify-between mx-auto w-full h-100'>
          <div className="flex flex-row">
            <h1 className='text-3xl font-bold pr-4 ml-[-17px] text-[#4978D4]'>Registration Page</h1>
            <img src="" alt="MTRP Full Logo" />
          </div>
          <span>
            <ul>
              <li>Already Signed in? <a href="" className='text-[#4160b8]'>Login Here</a></li>
              <li>Not from India? <a href="" className='text-[#4160b8]'>Contact Here</a></li>
            </ul>
          </span>
          </div>
          <div className='flex flex-col h-auto'>
            <div className="bg-[#A7A9BD] w-[125px] p-1 font-bold text-[1.20rem] text-white text-center rounded-md shadow-lg shadow-[#324b48] ...">Section</div>
            <div className='bg-[#E2E3EE]'>
              <ul className='list-disc font-bold my-2 mx-8'>
                <li className='text-[#39ab3f]'>Personal Details</li>
                <li className='text-[#39ab3f]'>Education Details</li>
                <li>Exam</li>
                <li>Terms &amp; Conditions</li>
                <li>Payment</li>
              </ul>
            </div>
          </div>
          <p className='p-4'>Fields marked with asterisk (*) are mandatory.</p>
          <div className='personaldetails flex flex-col h-auto py-4'>
            <div className="bg-[#B4CAEF] w-[300px] p-1 font-bold text-[1.20rem] text-[#152036] text-center rounded-md shadow-lg shadow-cyan-500/100 ...">Personal Details</div>
            <div className='bg-[#E2E3EE]'>
              <p className='px-8 pt-4 pb-2 font-bold'>Participant</p>
              <div className="grid px-8 grid-cols-3 gap-4">
                <div>
                    <p>First Name*</p>
                    <input name="firstname" type="text" className='text-boxes' required />
                </div>
                <div>
                    <p>Middle Name</p>
                    <input name="middlename" type="text" className='text-boxes' />
                </div>
                <div>
                    <p>Last Name</p>
                    <input name="lastname" type="text" className='text-boxes' />
                </div> 
              </div>
              <p className='px-8 pt-4 pb-2 font-bold'>Guardian</p>
              <div className="grid px-8 pb-14 grid-cols-3 gap-4">
                <div>
                    <p>First Name*</p>
                    <input name="firstname" type="text" className='text-boxes' required />
                </div>
                <div>
                    <p>Middle Name</p>
                    <input name="middlename" type="text" className='text-boxes' />
                </div>
                <div>
                    <p>Last Name</p>
                    <input name="lastname" type="text" className='text-boxes' />
                </div>
              </div>
              <div className="grid px-8 pb-10 grid-cols-3 gap-4">
                <div className='pb-2'>
                    <p>Date of Birth*</p>
                    <input name="dob" type="date" className='text-boxes' required />
                </div>
                <div className='pb-2'>
                    <p>Email ID*</p>
                    <input name="email" type="email" className='text-boxes' required/>
                </div>
                <div className='pb-2'>
                    <p>Alternate Email ID</p>
                    <input name="email_alt" type="email" className='text-boxes' />
                </div> 
                <div className='pb-2'>
                    <p>Phone No.*</p>
                    <input name="phone" type="tel" className='text-boxes' required />
                </div>
                <div className='pb-2'>
                    <p>Alternate Phone No.</p>
                    <input name="phone_alt" type="tel" className='text-boxes' />
                </div>
                <p></p>
                <div className='pb-2'>
                    <p>City*</p>
                    <input name="city" type="text" className='text-boxes' required />
                </div>
                <div className='pb-2'>
                    <p>State*</p>
                    <input name="state" type="text" className='text-boxes' required/>
                </div>
                <div className='pb-2'>
                    <p>PINCODE*</p>
                    <input name="pincode" type="text" pattern="[0-9]{6}" className='text-boxes' required/>
                </div> 
              </div>
              <div className="px-8 pb-10">
                  <p>Residential Address*</p>
                  <textarea name="address" className='w-full h-20 pr-0 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' required/>
              </div>

            </div>
          </div>
          <div className='educationaldetails flex flex-col h-auto py-4'>
            <div className="bg-[#B4CAEF] w-[300px] p-1 font-bold text-[1.20rem] text-[#152036] text-center rounded-md shadow-lg shadow-cyan-500/100 ...">Educational Details</div>
            <div className='bg-[#E2E3EE]'>
              <div className="px-8 py-4 flex flex-row justify-between">
                <div>
                    <p>Current Std.*</p>
                    <input name="std" type="number" max="12" className='basis-2/5 text-boxes' required />
                </div>
                <div>
                    <p>School Name*</p>
                    <input name="school" type="text" className='basis-3/5 sm:w-[800px] pr-0 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' required />
                </div>
              </div>
              <div className="px-8 pb-6">
                  <p>School Address*</p>
                  <textarea name="schooladdress" className='w-full h-20 pr-0 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' required/>
              </div>
              <div className="grid px-8 pb-14 grid-cols-3 gap-4">
                <div>
                    <p>Board*</p>
                    <input name="board" type="text" className='text-boxes' required />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='buttons p-10 flex flex-row justify-center bg-[#EBEEF4]'>
        <button type="button" className="text-white shadow-lg bg-gradient-to-br from-[#2d0a0a] to-[#e91010] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-md px-10 py-2.5 text-center me-2 mb-2">Previous Page</button>
        <button type="button" className="text-white shadow-lg bg-gradient-to-br from-[#106ac4] to-[#231231] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">Confirm &amp; Proceed</button>
        </div>
      </main>
      <Footer></Footer>
    </div>
    
  )
}
