import React, { useEffect, useState } from 'react';

function Home(){
    return(
        <><button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
            </button>
            <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul class="space-y-2 font-medium dark:text-white">
                        <a class="flex items-center p-1 text-gray-900 rounded-lg dark:text-white group text-xl font-semibold">
                            <span class="ms-2">Actions</span>
                        </a>       
                        <li>

                        </li>
                    </ul>
                </div>
            </aside>
            <header className="bg-gray-100 shadow relative">
                <div className="mx-auto max-w-full px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex justify-center">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-700">Dish App</h1>
                    </div>
                </div>
            </header>
                <main className="relative">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8" >
                        <a>
                        Menu
                        </a>
                    </div>
                </main>
        </>
    )

}
export default Home;