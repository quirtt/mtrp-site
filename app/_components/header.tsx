'use client';
import React from 'react';
import 'flowbite';
import {  mtrp_ico, mtrp_jpg } from './declarations';

export default function Nav(){
    return (
      <header className="p-12 text-white">
        <nav className="bg-[#122038] fixed w-full z-20 top-0 start-0 border-b border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src={mtrp_jpg} className='flex items-center space-x-3 rtl:space-x-reverse max-w-20 max-h-auto'/>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white shadow-lg bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">LOG IN</button>
              <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
          </div>
          <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-sticky">
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse dark:border-gray-700">
              <li>
                <a href="#" className="block rounded bg-blue-700 px-2 py-2 text-[#46ffce] md:bg-transparent md:p-0" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block rounded px-2 py-2 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 border-gray-700 text-white">About Us</a>
              </li>
              <li>
                <a href="#" className="block rounded px-2 py-2 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 border-gray-700 text-white">Winter Camp</a>
              </li>
              <li>
                <a href="#" className="block rounded px-2 py-2 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 border-gray-700 text-white">Registration</a>
              </li>
              <li>
                <a href="#" className="block rounded px-2 py-2 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 border-gray-700 text-white">Book</a>
              </li>
              <li>
                <a href="#" className="block rounded px-2 py-2 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 border-gray-700 text-white">Program</a>
              </li>
              <li>
                <a href="#" className="block rounded px-2 py-2 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 border-gray-700 text-white">Our Team</a>
              </li>
            </ul>
          </div>
          </div>
        </nav>
      </header>
    )
}
