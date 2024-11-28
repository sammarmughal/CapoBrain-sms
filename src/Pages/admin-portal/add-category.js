import Sidebar from "./component/sidebar";
import Admin_Nav from "./component/admin-nav";
import { FaTag } from "react-icons/fa6";


const AddCategory = () => {

  return (
    <>
      <div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <Admin_Nav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="flex items-center justify-center mb-12">
            <form className="w-full mt-8" >
              <div className="w-full grid md:w-3/5">
                  <h1 className="sm:text-3xl text-xl text-slate-700 text-center heading-body">Add Category</h1>
                <div className="flex justify-center py-4">
                  <div className="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
                   <FaTag className="w-8 h-8 text-purple-800"/>
                  </div>
                </div>
                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Category Name
                  </label>
                  <input
                    className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    type="text"
                    placeholder="Enter Category Name"
                  />
                </div>
               
                <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                  <button
                    type="submit"
                    className="btn-anim  w-auto rounded-full shadow-xl font-medium text-white px-4 py-2"
                  >
                    Upload Category
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
export default AddCategory;
