import Sidebar from "./component/sidebar";
import Admin_Nav from "./component/admin-nav";

const ChangePasswords = () => {
  return (
    <>
      <div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black ">
        <Admin_Nav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="block md:flex mt-10">
            <div className="w-full md:w-3/5 p-4 sm:p-6 lg:ml-4 lg:p-8 ">
              <div className="mb-6">
                  <h1 className="text-xl font-bold text-slate-600 mb-5 ml-8 my-4">
                    Admin Profile
                  </h1>
                  
                <span className="text-gray-600">
                  This information is secret so be careful
                </span>
              </div>
              <div className="">
                <div className="pb-6 w-full">
                  <label
                    htmlFor="email"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Email{" "}
                  </label>
                  <div className="flex">
                    <input                      
                      id="username"
                      className="input-field w-full"
                      type="email"
                      placeholder="Jane Name"
                    />
                  </div>
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="type"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Old Password
                  </label>
                  <input
                    
                    id="password"
                    className="input-field w-full"
                    type="text"
                    placeholder="Enter your Password"
                  />
                  
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="about"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    New Password
                  </label>
                  <input
                    
                    id="password"
                    className="input-field w-full"
                    type="text"
                    placeholder="Enter your New Password"
                  />
                  
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="about"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Confirm New Password
                  </label>
                  <input
                    
                    id="password"
                    className="input-field w-full"
                    type="text"
                    placeholder="Re-type your New Password"
                  />
                  
                </div>
                <div>
                <button
                    className="btn-anim mt-2 text-white rounded-full px-5 py-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChangePasswords;
