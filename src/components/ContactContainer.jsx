import React from "react";

const ContactContainer = () => {
  return (
    <div>
      <p className="w-screen max-w-lg lg:max-w-2xl mx-auto mt-5 mb-10 text-[2rem] lg:text-[3rem] font-bold tracking-wide text-headingColor">
        <span className="text-blue-600">Cần hỗ trợ?</span><br/>
        Hãy liên hệ với chúng tôi qua đơn bên dưới.
      </p>
      <form class="h-screen lg:max-w-2xl max-w-lg mx-auto">
        <div class="flex flex-wrap mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-textColor text-sm font-bold mb-2"
              for="grid-last-name"
            >
              Họ tên
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Họ tên của bạn"
            />
          </div>
        </div>
        <div class="flex flex-wrap mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-textColor text-sm font-bold mb-2"
              for="grid-email"
            >
              Email
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
            />
          </div>
        </div>
        <div class="flex flex-wrap mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-textColor text-sm font-bold mb-2"
              for="grid-message"
            >
              Lời nhắn
            </label>
            <textarea
              class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="grid-message"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mx-3">
          <div class="md:w-1/3 px-3">
            <button
              class="shadow bg-cartNumBg hover:bg-white hover:text-cartNumBg focus:outline-none focus:ring focus:ring-gray-500 focus:ring-offset-0 text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Gửi
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactContainer;