    import React from 'react';

    function Dish({ dishes, onDelete }) {
    return (
        <>
        {dishes.map((element, index) => (
            <div
            key={index}
            className="block rounded-lg bg-white p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white m-5"
            >
                <h5 className="mb-2 text-xl font-medium leading-tight underline">{element.dishName}</h5>
                <p className='m-5'>{element.ingredients.join(', ')}</p>
                <button
                    type="button"
                    className="inline-block rounded bg-[#FF6F61] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[#FF6F61]-3 transition duration-150 ease-in-out hover:bg-[#FF6F61]-accent-300 hover:shadow-[#FF6F61]-2 focus:bg-[#FF6F61]-accent-300 focus:shadow-[#FF6F61]y-2 focus:outline-none focus:ring-0 active:bg-[#FF6F61]-600 active:shadow-[#FF6F61]-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    onClick={() => onDelete(index)}
                >
                    Delete
                </button>
            </div>
        ))}
        </>
    );
    }
    export default Dish;
