import React, { useState, useEffect } from "react";
import Sidebar from "./component/sidebar";
import AdminNav from "./component/admin-nav";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const [seeCategory, setSeeCategory] = useState([]);
  const [seCategory, setSeCategory] = useState("");
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    categoryName: "",
  });
  const [errors, setErrors] = useState({
    categoryName: "",
  });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // For Add Category Modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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
  const Getcategory = async () => {
    await fetch("https://capobrain-backend.vercel.app/api/auth/getcategory", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  };

  // Fetch a single category by ID
  const viewCategory = async (id) => {
    await fetch(
      `https://capobrain-backend.vercel.app/api/auth/getcategory/${id}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setSeeCategory(data));
  };

  // Delete a category by ID
  const deleteCategory = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (isConfirmed) {
      await fetch(
        `https://capobrain-backend.vercel.app/api/auth/delcategory/${id}`,
        {
          method: "DELETE",
        }
      );

      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      Getcategory();
    }
  };
  // Edit a category by ID
  const editCategory = async (id) => {
    await fetch(
      `https://capobrain-backend.vercel.app/api/auth/getcategory/${id}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setSeCategory(data.category);
        setEditId(data._id);
        setIsEditModalOpen(true);
      });
  };

  // Update a category
  const updateCategory = async () => {
    await fetch(
      `https://capobrain-backend.vercel.app/api/auth/editcategory/${editId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category: seCategory }),
      }
    );

    Getcategory();
    setIsEditModalOpen(false);
  };

  // Add a new category
  const addCategory = async () => {
    try {
      const response = await fetch(
        "https://capobrain-backend.vercel.app/api/auth/addcategory",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ categoryName: formData.categoryName.trim() }), // Ensure proper data
        }
      );

    const data = await response.json();
    console.log("API Response:", data);

      if (response.ok) {
        Swal.fire(
          "Success!",
          "Category has been added successfully!",
          "success"
        );
        Getcategory(); // Refresh the category list
        setFormData({ categoryName: "" }); // Reset form data
        setIsAddModalOpen(false); // Close modal
      } else {
        Swal.fire(
          "Error!",
          data.message || "Failed to add category. Please try again.",
          "error"
        );
      }
    } catch (error) {
      console.error("Error adding category:", error);
      Swal.fire("Error!", "An unexpected error occurred.", "error");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (editId) {
        updateCategory(); 
      } else {
        addCategory(); 
      }
    } else {
      Swal.fire("Error!", "Please fix the errors in the form.", "error");
    }
  };
  useEffect(() => {
    Getcategory();
  }, []);
  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setFormData({ categoryName: "" });
    setErrors({ categoryName: "" });
  };
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Capobrain Admin Panel - Category Page. Manage and organize blog categories, set category names, and assign posts easily through the admin panel of Capobrain School Management System."
        />
        <meta
          name="keywords"
          content="Capobrain Admin Panel Category Page, Category Management for Blogs, Blog Categories, Admin Panel for School Blogs, Manage Blog Categories, School Management System Blog Categories"
        />
        <meta name="robots" content="index, follow" />
        <title>Blog Categories - Capobrain Admin Panel</title>

        <meta
          property="og:title"
          content="Blog Categories - Capobrain Admin Panel"
        />
        <meta
          property="og:description"
          content="Manage and organize blog categories from Capobrain’s Admin Panel. Set category names, assign posts, and structure your content effectively for easy navigation."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="YOUR_ADMIN_PANEL_CATEGORY_URL" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Blog Categories - Capobrain Admin Panel"
        />
        <meta
          name="twitter:description"
          content="Organize and manage your blog categories through Capobrain’s Admin Panel. Efficient content organization for school management system blogs."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="w-full flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <AdminNav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="w-full md:flex px-10 mb-4 justify-end items-center">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(true)}
              className="btn-anim  mt-10 ml-6 justify-end font-semibold text-white rounded-full py-2 px-8"
            >
              Add Category
            </button>
          </div>
          <div className=" bg-slate-150">
            <div className="flex justify-between mx-8">
              <h1 className="my-4 text-xl text-slate-600 font-semibold">
                Categories
              </h1>
            </div>
            <div className="mt-4 mx-4">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Category
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {category &&
                      category.map((post) => {
                        return (
                          <tr className="bg-white">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                              {post.category}
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div class="flex items-center gap-1">
                                <button
                                  class="p-2  rounded-full  group transition-all duration-500  flex item-center"
                                  onClick={() => editCategory(post._id)}
                                >
                                  <FiEdit className="w-5 h-5 text-purple-500" />
                                </button>
                                <button
                                  class="p-2 rounded-full  group transition-all duration-500  flex item-center"
                                  onClick={() => deleteCategory(post._id)}
                                >
                                  <RiDeleteBinLine className="w-5 h-5 text-red-500" />
                                </button>
                                {/* <button
                                  class="p-2 rounded-full  group transition-all duration-500  flex item-center"
                                  onClick={() => viewCategory(post._id)}
                                >
                                  <FaEye className="text-gray-600 w-5 h-5" />
                                </button> */}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/3">
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-xl font-semibold">
                Add Category
              </h2>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setIsAddModalOpen(false)}
                >
                ✕
              </button>
            </div>
            <form
              className="px-6 py-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (validateForm()) addCategory();
              }}
            >
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category Name
                  </label>
                  <input
                    className="w-full py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    type="text"
                    name="categoryName"
                    value={formData.categoryName}
                    onChange={(e) =>
                      setFormData({ ...formData, categoryName: e.target.value })
                    }
                    placeholder="Enter Category Name"
                  />
                  {errors.categoryName && (
                    <div className="text-sm text-red-500 mt-1">
                      {errors.categoryName}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-end mt-6">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-800 rounded-full px-4 py-2 mr-2"
                  onClick={() => setIsAddModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-anim w-auto rounded-full shadow-xl font-medium text-white px-4 py-2"
                >
            Upload Category
            </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/3">
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-xl font-semibold">Edit Category</h2>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setIsEditModalOpen(false)}
              >
                ✕
              </button>
            </div>
            <form
              className="px-6 py-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (validateForm()) updateCategory();
              }}
            >
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category Name
                  </label>
                  <input
                    className="w-full py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    type="text"
                    name="categoryName"
                    value={formData.categoryName || seCategory}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData({ categoryName: value });
                      setSeCategory(value); 
                    }}
                    placeholder="Enter Category Name"
                  />
                  {errors.categoryName && (
                    <div className="text-sm text-red-500 mt-1">
                      {errors.categoryName}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-end mt-6">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-800 rounded-full px-4 py-2 mr-2"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-anim w-auto rounded-full shadow-xl font-medium text-white px-4 py-2"
                >
                  Update Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default Categories;
