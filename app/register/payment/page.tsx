
import Header from '../../_components/header';
import Footer from '../../_components/footer';

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
                <li className='text-[#e85050]'>Exam</li>
                <li className='text-[#e85050]'>Terms &amp; Conditions</li>
                <li className='text-[#39ab3f]'>Payment</li>
              </ul>
            </div>
          </div>
          <p className='p-4'>Fields marked with asterisk (*) are mandatory.</p>
          <div className='flex flex-col h-auto'>
            <div className="payment-box bg-[#B4CAEF] w-[125px] p-1 font-bold text-[1.20rem] text-[#152036] text-center rounded-md shadow-lg shadow-cyan-500/100 ...">Payment</div>
            <div className='bg-[#E2E3EE]'>
              <p className='px-8 pt-4 pb-2'>Do you want to purchase a copy of limited edition of MTRP Problem Primer Book?</p>
              <div className='px-8 pb-16'><input id="payment.primer-checkbox" type="checkbox" className=' w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' /> <span className='p-2'>Yes, I want to purchase</span></div>
            </div>
          </div>
        </div>
        <div className="billing p-4 bg-[#F2F2F2] w-full max-w-full-3xl text-[#152036]">
          <p className='font-bold text-2xl text-center'>Bill Summary</p>
          <div className='flex flex-row justify-center'>
            <div className="text-xl flex flex-col text-center">
              <div className="font-bold p-4">Subject</div>
              <div>Exam Fees</div>
              <div>Problem Primer</div>
              <div>Taxes</div>
              <div className='font-bold'>Total</div>
              <div>Discount</div>
              <div className='font-bold'>Net Payable</div>

            </div>
            <div className="text-xl flex flex-col text-center">
              <div className="font-bold p-4">Amount</div>
              <div id='payment.fees'>---</div>
              <div id='payment.primer'>---</div>
              <div id='payment.taxes'>---</div>
              <div id='payment.total' className='font-bold'>---</div>
              <div id='payment.net'>---</div>
              <div className='font-bold'>---</div>
            </div>
          </div>
        </div>
        <div className='buttons p-10 flex flex-row justify-center bg-[#EBEEF4]'>
        <button type="button" className="text-white shadow-lg bg-gradient-to-br from-[#2d0a0a] to-[#e91010] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-md px-10 py-2.5 text-center me-2 mb-2">Previous Page</button>
        <button type="button" className="text-white shadow-lg bg-gradient-to-br from-[#106ac4] to-[#231231] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">Proceed to Payment</button>
        </div>
      </main>
      <Footer></Footer>
    </div>
    
  )
}