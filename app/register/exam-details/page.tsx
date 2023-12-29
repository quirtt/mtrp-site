
import Header from '../../_components/header';
import Footer from '../../_components/footer';
import './styles.css';

export default function Payment() {
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
                <li className='text-[#e85050]'>Personal Details</li>
                <li className='text-[#e85050]'>Education Details</li>
                <li className='text-[#39ab3f]'>Exam</li>
                <li className='text-[#39ab3f]'>Terms &amp; Conditions</li>
                <li>Payment</li>
              </ul>
            </div>
          </div>
          <p className='p-4'>Fields marked with asterisk (*) are mandatory.</p>
          <div className='exam flex flex-col h-auto py-4'>
            <div className="bg-[#B4CAEF] w-[125px] p-1 font-bold text-[1.20rem] text-[#152036] text-center rounded-md shadow-lg shadow-cyan-500/100 ...">Exam</div>
            <div className='bg-[#E2E3EE]'>
              <p className='px-8 pt-4 pb-2 font-bold'>Mode of Exam *</p>
              <div className='px-8'><input name="mode" type="radio" className=' w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' /> <span className='p-2'>Offline</span></div>
              <div className='px-8'><input name="mode" type="radio" className=' w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' /> <span className='p-2'>Online</span></div>

              <p className='px-8 pt-4 pb-2 font-bold'>Exam Centre </p>
              <div className="grid px-8 pb-10 grid-cols-3 gap-4">
                <div>
                    <p>Preference 1*</p>
                    <input name="pref1" type="text" className='exam-centre-boxes' required />
                </div>
                <div>
                    <p>Preference 2*</p>
                    <input name="pref2" type="text" className='exam-centre-boxes' required />
                </div>
                <div>
                    <p>Preference 3*</p>
                    <input name="pref3" type="text" className='exam-centre-boxes' required />
                </div> 
                <div>
                    <p>Preferred Language*</p>
                    <input name="language" type="text" className='exam-centre-boxes' required />
                </div> 
                
              </div>
            </div>
          </div>
          <div className='tnc flex flex-col h-auto py-4'>
            <div className="bg-[#B4CAEF] w-[300px] p-1 font-bold text-[1.20rem] text-[#152036] text-center rounded-md shadow-lg shadow-cyan-500/100 ...">Terms &amp; Conditions</div>
            <div className='bg-[#E2E3EE]'>
              <p className='px-8 pt-4 pb-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime magnam officia, iste eum ea debitis obcaecati velit natus blanditiis nihil cum pariatur delectus laborum cumque harum possimus vel hic sit.
              </p>
              <div className='px-8 py-4'><input type="checkbox" className=' w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' /> <span className='p-2'>Yes, I agree</span></div>

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
