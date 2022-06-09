import React from "react";

const Service = () => {
  return (
    <div class="flex justify-center ">
      <div class="block rounded-lg shadow-sm shadow-stone-500 bg-black text-white text-center">
        <div class="py-3 px-6 border-b border-gray-300">Featured</div>
        <div class="p-6">
          <h5 class="text-white text-xl font-medium mb-2">
            Web Application Development
          </h5>
          <p class="text-white text-base mb-4">
            With supporting text below as a natural lead-in to additional
            content. With supporting text below as a natural lead-in to
            additional content. content. With supporting text below as a natural
            lead-in to additional content. content. With supporting text below
            as a natural lead-in to additional content.
          </p>
        </div>
        <div>
          <button
            type="button"
            class=" inline-block w-full px-6 py-2.5 bg-pink-600 text-white font-medium text-sm leading-tight uppercase rounded-b shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
