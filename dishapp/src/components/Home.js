import React, { useState, useEffect} from 'react';
import Dish from './Dish';
import DishForm from './DishForm';
import DishSearch from './DishSearch';

function Home() {
    const [dishes, setDishes] = useState(() => {
        const savedDishes = localStorage.getItem('dishes');
        return savedDishes ? JSON.parse(savedDishes) : [];
    });
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [addDishOpen, setAddDishOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    const handleAddDish = (dishData) => {
        setDishes([...dishes, dishData]);
    };
    const handleSearchDish = (input) => {

    };
    const handleDeleteDish = (index) => {
        const updatedDishes = dishes.filter((_, i) => i !== index);
        setDishes(updatedDishes);
    };

    useEffect(() => {
        localStorage.setItem('dishes', JSON.stringify(dishes));
    },[dishes]);

    const filteredDishes = dishes.filter((dish) =>
        dish.dishName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
    <>
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
                <span className="ms-2 m-5">Actions</span>
                </a>
                <li>
                <button
                    onClick={() => setAddDishOpen(!addDishOpen)}
                    className="inline-block rounded bg-green-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-green-3 transition duration-150 ease-in-out hover:bg-green-accent-300 hover:shadow-green-2 focus:bg-green-accent-300 focus:shadow-green-2 focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-green-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    >
                    {addDishOpen ? 'Close Form' : 'Add New Dish'}
                </button>
                <DishForm addDishOpen={addDishOpen} onAddDish={handleAddDish} />
                </li> 
            </ul>
        </div>
        </aside>
        {sidebarOpen && (
            <div
            onClick={closeSidebar}
            className="fixed inset-0 bg-black opacity-50 z-30 sm:hidden"
            ></div>
        )}
        <header className="bg-gray-100 shadow relative">
            <div className="mx-auto max-w-full px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold tracking-tight text-gray-700">Dish App</h1>
            </div>
            </div>
        </header>
        <main className="relative">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    {/* Suchfeld */}
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search for a dish"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full p-2 mb-4 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <Dish dishes={filteredDishes} onDelete={handleDeleteDish} />
                </div>
        </main>
    </>
    );
}

export default Home;
