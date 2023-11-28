import React from "react";

export default function MainPage() {
  return (
    <div>
      <h1 className="lg:mx-28 text-5xl font-bold text-green-500">
        Convert your curencies today
      </h1>
      <p className="lg:mx-28 opacity-40 py-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        deserunt nobis temporibus soluta labore eaque illo. At reiciendis quas
        fuga iste, sit unde et quaerat, facere omnis ex consequatur
        voluptatibus.
      </p>

      {/* input feilds */}
      <div className="flex mt-5 flex-col items-center justify-center">
        <section className="w-full items-center justify-center lg:w-1/2">
          <form>
            {/* Date */}
            <div className="mb-4">
              <label
                for="Date"
                className="block mb-2 px-1 text-md text-[20px] text-gray-900 dark:text-white"
              >
                Date
              </label>
              <input
                type="Date"
                id="Date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                required
              />
            </div>

            {/*  Source currency*/}
            <div className="mb-4">
              <label
                for="Source_Curency"
                className="block mb-2 px-1 text-md text-[20px] text-gray-900 dark:text-white"
              >
                Source Currency
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                required
                name=""
                id=""
              >
                <option value="">Select source cureency</option>
              </select>
            </div>

            {/* target currency */}
            <div className="mb-4">
              <label
                for="Target_Curency"
                className="block mb-2 px-1 text-md text-[20px] text-gray-900 dark:text-white"
              >
                Target Currency
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                required
                name=""
                id=""
              >
                <option value="">Select Target cureency</option>
              </select>
            </div>

            {/* Amount in Source currency */}
            <div className="mb-4">
              <label
                for="Date"
                className="block mb-2 px-1 text-md text-[20px] text-gray-900 dark:text-white"
              >
                Amount in source cureency
              </label>
              <input
                type="text"
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Amount in source currency"
                required
              />
            </div>

            {/* button */}
            <div className="flex flex-row justify-between">
              <div>
                <button className="bg-green-400 items-center rounded-full hov justify-center w-36 h-9 hover:bg-green-600">
                  Get Valuve
                </button>
              </div>
              <button className="bg-green-400 items-center rounded-full hov justify-center w-36 h-9 hover:bg-green-600">
                Reset
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
