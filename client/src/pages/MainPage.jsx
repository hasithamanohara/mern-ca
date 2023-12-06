import React, { useState } from "react";

export default function MainPage() {
  // State fo form functions
  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
  // const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);

  //input currency validation
  const handleInpuChange = (e) => {
    const inputValue = e.target.value;
    //regular expression for the input currency validation
    const currencyPattern = '/^\$?\d{1,3}(,\d{3})*(\.\d{2})?$/';

    //check if the input currency is valid
    if(currencyPattern.test(inputValue)) {
      setAmountInSourceCurrency(inputValue);
    }
    else {
      alert('Invalid curenncy input currency, Please try again within correct type');
    }

  };

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
                htmlFor={date}
                className="block mb-2 px-1 text-md text-[20px] text-gray-900 dark:text-white"
              >
                Date
              </label>
              <input
                type="date"
                id={date}
                name={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                required
              />
            </div>

            {/*  Source currency*/}
            <div className="mb-4">
              <label
                htmlFor={sourceCurrency}
                className="block mb-2 px-1 text-md text-[20px] text-gray-900 dark:text-white"
              >
                Source Currency
              </label>
              <select
                name={sourceCurrency}
                id={sourceCurrency}
                value={sourceCurrency}
                onChange={(e) => setSourceCurrency(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                required
              >
                <option value="hasitha">Select source cureency</option>
                <option value="manohara">Select source cureency</option>
                <option value="bandara">Select source cureency</option>
              </select>
            </div>

            {/* target currency */}
            <div className="mb-4">
              <label
                htmlFor={targetCurrency}
                className="block mb-2 px-1 text-md text-[20px] text-gray-900 dark:text-white"
              >
                Target Currency
              </label>
              <select
                name={targetCurrency}
                id={targetCurrency}
                value={targetCurrency}
                onChange={(e) => setTargetCurrency(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                required
              >
                <option value="hasitha">Select Target currncy</option>
                <option value="manohara">Select Target currncy</option>
                <option value="bandara">Select Target currncy</option>
              </select>
            </div>

            {/* Amount in Source currency */}
            <div className="mb-4">
              <label
                htmlFor={amountInSourceCurrency}
                className="block mb-2 px-1 text-md text-[20px] text-gray-900 dark:text-white"
              >
                Amount in source cureency
              </label>
              <input
                type="number"
                name={amountInSourceCurrency}
                id={amountInSourceCurrency}
                value={amountInSourceCurrency}
                onChange={(e)=>handleInpuChange(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Amount in source currency"
                required
              />
            </div>

            {/* button */}
            <div className="flex flex-row justify-between">
              <div>
                <button className="bg-green-400 items-center rounded-full hov justify-center w-36 h-9 hover:bg-green-600">
                  Get value
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
