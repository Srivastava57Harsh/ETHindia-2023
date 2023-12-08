export default function ChatPage() {
    return (
      <div className="hidden lg:col-span-2 lg:block">
        <div className="w-full">
          <div className="relative flex items-center border-b border-black-300 p-3">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
              alt="username"
            />
            <span className="ml-2 block font-bold text-gray-600">Group 1</span>
            <span className="absolute left-10 top-3 h-3 w-3 rounded-full bg-green-600">
              {" "}
            </span>
          </div>
          <div className="relative h-[40rem] w-full overflow-y-auto p-6">
            <ul className="space-y-2">
              <li className="flex justify-start">
                <div className="relative max-w-xl rounded px-4 py-2 text-gray-700 shadow">
                  <span className="block">Hi</span>
                </div>
              </li>
              <li className="flex justify-end">
                <div className="relative max-w-xl rounded bg-gray-100 px-4 py-2 text-gray-700 shadow">
                  <span className="block">Hiiii</span>
                </div>
              </li>
              <li className="flex justify-end">
                <div className="relative max-w-xl rounded bg-gray-100 px-4 py-2 text-gray-700 shadow">
                  <span className="block">how are you?</span>
                </div>
              </li>
              <li className="flex justify-start">
                <div className="relative max-w-xl bg-red rounded px-4 py-2 text-gray-700 shadow">
                  <span className="block">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
                  </span>
                </div>
              </li>
            </ul>
          </div>
  
          <div className="flex w-full items-center justify-between border-t border-gray-300 p-3">
            
          <button className="bg-[#79D17F] hover:bg-blue-700 lg-200 w-3/5 text-white font-bold py-2 px-4 rounded">
            Split Expense
            </button>
  
            <input
              type="text"
              placeholder="Message"
              className="mx-3 block w-2/5 rounded-full bg-gray-100 py-2 pl-4 outline-none focus:text-gray-700"
              name="message"
              required
            />
            <button>
              
            </button>
            <button type="submit">
              <svg
                className="h-5 w-5 origin-center rotate-90 transform text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }