import React from "react";

const PaymentMethod = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl p-6">
        {/* Main Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Payment Method Form */}
          <div>
            <h2 className="text-[45px] font-bold mb-6">Payment Method</h2>
            <form className="space-y-4">
              {/* Email Field */}
              <div>
                <label className="block text-gray-600 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>

              {/* Card Details */}
              <div>
                <div className="flex items-center mb-2">
                  
                  <label className="block text-gray-600 font-medium">
                    Card
                  </label>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Card number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-1/2 border border-gray-300 rounded-lg px-4 py-2"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="w-1/2 border border-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  >
                    <option>Hong Kong SAR China</option>
                    <option>United States</option>
                    <option>Canada</option>
                  </select>
                </div>
              </div>

              {/* Alternative Payment Options */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <input type="radio" name="payment" className="mr-2" />
                  <label className="text-gray-600">Afterpay</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="payment" className="mr-2" />
                  <label className="text-gray-600">Klarna</label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-[60%]  bg-[#074226] text-white rounded-lg px-4 py-2 mt-4"
              >
                Done
              </button>
            </form>
          </div>

          {/* Subscription Summary */}
          <div className="bg-[#074226] text-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">
              Subscribe to OtterAI Premium Plus
            </h2>
            <p className="text-4xl font-bold mb-2">SUR $2,648.00</p>
            <p className="text-sm mb-6">Then HK$ 2,648.00 per month</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Accounting & Auditing</h3>
                  <p className="text-sm">Course</p>
                  <p className="text-xs text-gray-300">
                    Quantity: 2 | Charged monthly HK$ 990.00 each
                  </p>
                </div>
                <p className="font-bold">SUR $1,980.00</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Finance & Investment</h3>
                  <p className="text-sm">Course</p>
                  <p className="text-xs text-gray-300">Quantity: 1</p>
                </div>
                <p className="font-bold">SUR $668.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
