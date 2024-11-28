import Sidebar from "./component/sidebar";
import Admin_Nav from "./component/admin-nav";
import { SiBloglovin } from "react-icons/si";


const AddBlog = () => {

  return (
    <>
      <div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <Admin_Nav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="flex items-center justify-center mb-12">
            <form className="w-full mt-8" >
              <div className="w-full grid p b-10">
                  <h1 className="sm:text-3xl text-xl text-slate-700 text-center heading-body">Add Blog</h1>
                <div className="flex justify-center py-2">
                  <div className="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
                   
                    <SiBloglovin className="w-8 h-8 text-white"/>
                  </div>
                </div>
                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Blog Name
                  </label>
                  <input
                    className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    type="text"
                    placeholder="Enter Blog Name"
                  />
                </div>
                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Category
                  </label>
                  <select
                    className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option>Select a Category</option>
                    <option>Technology</option>
                    <option>Educational Software</option>
                    <option>Education Management</option>
                    <option>Manual Treasures</option>                    
                  </select>
                </div>
               
                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Blog Slug
                  </label>
                  <input
                    className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    type="text"
                    placeholder="Enter Blog Slug"
                  />
                </div>
                
                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Blog Content 
                  </label>
                  <textarea
                    className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Type Content"
                  />
                </div>
                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
                    Upload Photo
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group"
                    >
                      <div className="flex flex-col items-center justify-center pt-7">
                          <>
                            <svg
                              className="w-10 h-10 text-purple-400 group-hover:text-purple-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 16V7m4 9V7m4 9V7m4 9V7M5 12h14"
                              ></path>
                            </svg>
                            <p className="text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider">
                              Select a photo
                            </p>
                          </>
                      </div>
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                    {/* <button
                      type="button"
                      className="mt-2 text-red-500 text-xs"
                    >
                      Cancel
                    </button> */}
                </div>
                <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                  <button
                    type="submit"
                    className="btn-anim  w-auto rounded-full shadow-xl font-medium text-white px-4 py-2"
                  >
                    Upload Blog
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddBlog;
// export default withAuth(AddBlogs, ["admin"]);
