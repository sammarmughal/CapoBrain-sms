import React, {useState} from "react";
import Sidebar from "./component/sidebar";
import Admin_Nav from "./component/admin-nav";
import { FaTag } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import Swal from 'sweetalert2';


const AddCategory = () => {
  const [formData, setFormData] = useState({
    categoryName: "",
  });

  const [errors, setErrors] = useState({
    categoryName: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { categoryName: "" };

    if (!formData.categoryName.trim()) {
      newErrors.categoryName = "Category name is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      Swal.fire({
        title: "Success!",
        text: "Category has been added successfully!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        setFormData({
          categoryName: "",
        });
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please fix the errors in the form.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Capobrain Admin Panel - Add Category Page. Easily create new blog categories for your Capobrain School Management System's blog. Organize and manage blog content effectively."
        />
        <meta
          name="keywords"
          content="Capobrain Admin Panel Add Category, Create Blog Category, Add New Blog Categories, Admin Panel for School Blogs, Manage Categories for Blogs, Blog Category Creation"
        />
        <meta name="robots" content="index, follow" />
        <title>Add Blog Category - Capobrain Admin Panel</title>

        <meta
          property="og:title"
          content="Add Blog Category - Capobrain Admin Panel"
        />
        <meta
          property="og:description"
          content="Add new blog categories to Capobrain’s School Management System. Organize content efficiently for easy navigation and categorization."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="YOUR_ADMIN_PANEL_ADD_CATEGORY_URL" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Add Blog Category - Capobrain Admin Panel"
        />
        <meta
          name="twitter:description"
          content="Create and organize blog categories in Capobrain’s Admin Panel to manage and display your content better."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <Admin_Nav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="flex items-center justify-center mb-12">
            <form className="w-full mt-8" onSubmit={handleSubmit}>
              <div className="w-full grid md:w-3/5">
                <h1 className="sm:text-3xl text-xl text-slate-700 text-center heading-body">
                  Add Category
                </h1>
                <div className="flex justify-center py-4">
                  <div className="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
                    <FaTag className="w-8 h-8 text-purple-800" />
                  </div>
                </div>
                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Category Name
                  </label>
                  <input
                    className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    type="text"
                    name="categoryName"
                    value={formData.categoryName}
                    onChange={handleChange}
                    placeholder="Enter Category Name"
                  />
                   {errors.categoryName && (
            <div className="text-sm text-red-500 mt-1">{errors.categoryName}</div>
          )}
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
