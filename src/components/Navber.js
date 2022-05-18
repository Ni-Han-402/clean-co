import React from 'react';
import { NavLink } from 'react-router-dom';

const Navber = ({ children }) => {
    const menuItem = <>
        <li><NavLink to="/home" className='rounded-lg'>Home</NavLink></li>
        <li><NavLink to="/about" className='rounded-lg'>About</NavLink></li>
        <li><NavLink to="/services" className='rounded-lg'>Services</NavLink></li>
        <li><NavLink to="/blog" className='rounded-lg'>Blog</NavLink></li>
        <li><NavLink to="/contact" className='rounded-lg'>Contact</NavLink></li>
        <li><NavLink to="/login" className='rounded-lg'>Login</NavLink></li>
    </>
    return (
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div class="w-full navbar bg-base-100 lg:px-24">
                    <div class="flex-1 px-2 mx-2 text-2xl">Clean Co.</div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    </div>

                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal gap-x-5">
                            {menuItem}
                            <li className="dropdown lg:dropdown-end dropdown-hover">
                                <label tabindex="0" class="btn btn-primary btn-outline rounded-lg m-1">BOOK NOW</label>
                                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {menuItem}
                </ul>

            </div>
        </div>
    );
};

export default Navber;