import React, { useState } from 'react';

function Home() {
  // Zustand für die Sidebar (ob sie offen ist oder nicht)
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Funktion zum Umschalten der Sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Funktion zum Schließen der Sidebar
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Button zum Öffnen der Sidebar */}
      <button
        onClick={toggleSidebar}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="default-sidebar"
        type="button"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-80 h-screen transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium dark:text-white">
            <a className="flex items-center p-1 text-gray-900 rounded-lg dark:text-white group text-xl font-semibold">
              <span className="ms-2">Actions</span>
            </a>
            <li>
              {/* Hier kannst du mehr Inhalt hinzufügen */}
            </li>
            {/* Schließen-Button innerhalb der Sidebar */}
            <button
              onClick={closeSidebar}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white p-2"
            >
              <span className="sr-only">Close sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 7.586l4.293-3.293a1 1 0 111.414 1.414L11.414 9l3.293 4.293a1 1 0 01-1.414 1.414L10 10.414l-4.293 3.293a1 1 0 01-1.414-1.414L8.586 9 4.293 4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </ul>
        </div>
      </aside>

      {/* Hintergrund für die Sidebar, der auch beim Klicken außerhalb die Sidebar schließt */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black opacity-50 z-30 sm:hidden"
        ></div>
      )}

      {/* Header */}
      <header className="bg-gray-100 shadow relative">
        <div className="mx-auto max-w-full px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-700">Dish App</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <a>Menu</a>
        </div>
      </main>
    </>
  );
}

export default Home;
