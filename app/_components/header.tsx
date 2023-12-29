export default function Header() {
    return (
    <header className="h-18 p-2 bg-[#122038] sticky top-0">
        <div className="flex items-center justify-between w-full">
          <div className="real flex underline decoration-2 underline-offset-4">
            <img src='../img/mtrp_ico.jpg' alt="mtrp-logo" />
            <a href="XXXXXXXXXXXXXXXXXX" className="text-white px-2 ">About Us</a>
            <a href="XXXXXXXXXXXXXXXXXX" className="text-white px-2">Winter Camp</a>
            <a href="XXXXXXXXXXXXXXXXXX" className="text-white px-2">Registration</a>
            <a href="XXXXXXXXXXXXXXXXXX" className="text-white px-2">Book</a>
            <a href="XXXXXXXXXXXXXXXXXX" className="text-white px-2">Program</a>
          </div>
          <div className="flex">
          <button type="button" className="text-white shadow-lg bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">LOG IN</button>
          </div>
        </div>
      </header>
    )
}