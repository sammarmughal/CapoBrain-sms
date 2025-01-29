import React, { useState, useEffect } from "react";
import Sidebar from "./component/sidebar";
import AdminNav from "./component/admin-nav";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState("");
  const [editPost, setEditPost] = useState({});
  const [postId, setPostId] = useState("");
  const [category, setCategory] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const APIURL = process.env.API_URL;
  const openModal = () => setIsModalOpen(true);
  const openEditModal = () => setIsEditModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditPost({
      title: "",
      slug: "",
      category: "",
      content: "",
      image: "",
    });
  };

  const Getallposts = async () => {
    try {
      const res = await fetch(
        "https://capobrain-backend.vercel.app/api/auth/getallposts",
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    Getallposts();
  }, []);

  // View single post
  const viewPosts = async (id) => {
    try {
      const res = await fetch(
        `https://capobrain-backend.vercel.app/api/auth/getposts/${id}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setPost(data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  // Delete a post
  const deletePosts = async (id) => {
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
      try {
        await fetch(
          `https://capobrain-backend.vercel.app/api/auth/delposts/${id}`,
          {
            method: "DELETE",
          }
        );
        Swal.fire("Deleted!", "Your post has been deleted.", "success");
        Getallposts();
      } catch (error) {
        console.error("Error deleting post:", error);
        Swal.fire(
          "Error!",
          "Failed to delete the post. Please try again.",
          "error"
        );
      }
    }
  };

  // Edit a post
  const editPosts = async (id) => {
    try {
      const res = await fetch(
        `https://capobrain-backend.vercel.app/api/auth/getposts/${id}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setEditPost(data);
      setPostId(data._id);
    } catch (error) {
      console.error("Error fetching post for editing:", error);
    }
  };

  const onchange = (e) => {
    setEditPost({ ...editPost, [e.target.name]: e.target.value });
  };
  const Getcategory = async () => {
    try {
      const res = await fetch(
        `https://capobrain-backend.vercel.app/api/auth/getcategory`,
        { method: "GET" }
      );
      const data = await res.json();
      setCategory(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Fetch posts (replace with your actual API call)
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        `https://capobrain-backend.vercel.app/api/auth/getposts`
      );
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
    Getcategory();
  }, []);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      (searchCategory === "" ||
        post.category.toLowerCase() === searchCategory.toLowerCase())
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  // const updatePost = async () => {
  //   const { title, category, content, slug } = editPost
  //   const res = await fetch(`https://capobrain-backend.vercel.app/api/auth/editposts/${postId}`, {
  //     method: "PUT",
  //     headers:{
  //       "Content-Type":"application/json"
  //     },
  //     body: JSON.stringify({
  //       title,
  //       category,
  //       content,
  //       slug,
  //     }),
  //   });
  //   const data = await res.json()
  //   console.log(data)
  //   Getallposts();
  // };

  const updatePost = async () => {
    try {
      const { title, slug, category, content, image } = editPost;
      const formData = new FormData();
      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("category", category);
      formData.append("content", content);
      formData.append("image", image);
      const res = await fetch(
        `https://capobrain-backend.vercel.app/api/auth/editposts/${postId}`,
        {
          method: "PUT",
          body: formData,
        }
      );
      if (res.ok) {
        const updatedData = await res.json();
        Swal.fire({
          title: "Success!",
          text: "Post updated successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        // Close modal and refresh post list
        closeEditModal();
      } else {
        const errorData = await res.json();
        Swal.fire({
          title: "Error!",
          text: errorData.message || "Failed to update post.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error updating post:", error);
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  const validateForm = () => {
    if (
      !editPost.title ||
      !editPost.slug ||
      !editPost.category ||
      !editPost.content ||
      !editPost.image
    ) {
      Swal.fire({
        title: "Error!",
        text: "All fields are required.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return false;
    }
    return true;
  };

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Capobrain Admin Panel - Blog Page. Manage, edit, and publish blogs related to school management, updates, and news. Easily manage content within the admin panel of Capobrain School Management System."
        />
        <meta
          name="keywords"
          content="Capobrain Admin Panel Blog, Blog Management Dashboard, Admin Panel Blog Page, School Management System Blog, Manage Blogs for School Software, Blog Management for Schools"
        />
        <meta name="robots" content="index, follow" />
        <title>Blog Management - Capobrain Admin Panel</title>

        <meta
          property="og:title"
          content="Blog Management - Capobrain Admin Panel"
        />
        <meta
          property="og:description"
          content="Manage and edit blogs related to Capobrain School Management System. From school updates to informative articles, manage all content in the admin panel with ease."
        />
        <meta
          property="og:image"
          content="https://capobrain.com/static/media/capobrain-logo.adec461fe08022b24b28.png"
        />
        <meta
          property="og:url"
          content="https://capobrain.com/adminpanel/blogs"
        />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Blog Management - Capobrain Admin Panel"
        />
        <meta
          name="twitter:description"
          content="Access the blog management section of Capobrain's Admin Panel. Easily manage, edit, and publish school-related blogs and updates from the admin dashboard."
        />
        <meta
          name="twitter:image"
          content="https://capobrain.com/static/media/capobrain-logo.adec461fe08022b24b28.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="w-full flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <AdminNav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="w-full md:flex px-10 mb-4 justify-between items-center">
            <div className="relative mt-10 ml-6">
              <input
                className="appearance-none lg:min-w-[600px] border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                id="serachtitle"
                type="text"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                placeholder="Search By Title"
              />
              <div className="absolute right-0 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="absolute left-0 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <Link to="/adminpanel/addblog" className="w-flex justify-end">
              <button
                type="button"
                className="btn-anim  mt-10 ml-6 justify-end font-semibold text-white rounded-full py-2 px-8"
              >
                Add Blog
              </button>
            </Link>
          </div>
          <div className="bg-slate-150">
            <div className="flex justify-between mx-8">
              <h1 className="my-4 text-xl text-slate-600 font-semibold">
                Blogs
              </h1>
              <div className="flex items-end justify-end">
                <div className="relative inline-block text-left mb-3">
                  <button
                    onClick={handleDropdownToggle}
                    className="inline-flex justify-center w-full px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500"
                  >
                    {searchCategory || "All Categories"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2 -mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 011.414 1.414l-3 3a1 1 01-1.414 0l-3-3a1 1 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <button
                          onClick={() => {
                            setSearchCategory("");
                            setDropdownOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          All Categories
                        </button>
                        {category.map((item, index) => (
                          <button
                            onClick={() => {
                              setSearchCategory(item.category);
                              handleDropdownToggle();
                            }}
                            className="blog-cat-menu"
                            role="menuitem"
                            key={index}
                          >
                            {item.category}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4 mx-4">
              <div className="flex justify-between items-center">
                <div className="relative inline-block text-left mb-3"></div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Blog Title
                      </th>
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
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Image
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
                    {filteredPosts.map((post, index) => (
                      <tr key={index} className="bg-white">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-800">
                          {" "}
                          {post.title}{" "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">
                          {post.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            {" "}
                            {formatDate(post.date)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-800">
                          {post.image && (
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-16 h-16 object-cover"
                            />
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">
                          <div className="flex items-center gap-1">
                            <button
                              className="p-2  rounded-full  group transition-all duration-500  flex item-center"
                              onClick={() => {
                                editPosts(post._id);
                                openEditModal();
                              }}
                            >
                              <FiEdit className="w-5 h-5 text-purple-500" />
                            </button>
                            <button
                              className="p-2 rounded-full  group transition-all duration-500  flex item-center"
                              onClick={() => deletePosts(post._id)}
                            >
                              <RiDeleteBinLine className="w-5 h-5 text-red-500" />
                            </button>
                            <button
                              className="p-2 rounded-full  group transition-all duration-500  flex item-center"
                              onClick={() => {
                                viewPosts(post._id);
                                openModal();
                              }}
                            >
                              <FaEye className="text-gray-600 w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {isModalOpen && (
                  <div
                    className="overflow-y-auto fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="bg-white w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
                      {/* Modal Header */}
                      <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 py-4 border-b">
                        <h5
                          className="text-lg font-semibold"
                          id="exampleModalToggleLabel"
                        >
                          Blog Posts
                        </h5>
                        <div className="" onClick={closeModal}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 space-y-4">
                        <form className="space-y-4">
                          <div className="mb-6">
                            <label
                              htmlFor="title"
                              className="block text-lg font-medium text-gray-800 mb-1"
                            >
                              Title
                            </label>
                            <input
                              type="text"
                              id="title"
                              name="title"
                              value={post.title}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                              readOnly
                            />
                          </div>
                          <div className="mb-6">
                            <label
                              htmlFor="category"
                              className="block text-lg font-medium text-gray-800 mb-1"
                            >
                              Category
                            </label>
                            <input
                              type="text"
                              id="title"
                              name="title"
                              value={post.title}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                              readOnly
                            />
                          </div>
                          <div className="mb-6">
                            <label
                              htmlFor="content"
                              className="block text-lg font-medium text-gray-800 mb-1"
                            >
                              Content
                            </label>
                            <div
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                              dangerouslySetInnerHTML={{
                                __html: post.content,
                              }}
                            ></div>
                          </div>
                        </form>
                      </div>
                      <div className="flex items-center justify-end px-6 py-4 border-t">
                        <button
                          type="button"
                          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {isEditModalOpen && (
                  <div
                    className="overflow-y-auto fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="bg-white w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
                      {/* Modal Header */}
                      <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 py-4 border-b">
                        <h5
                          className="text-lg font-semibold"
                          id="exampleModalToggleLabel"
                        >
                          Blog Posts
                        </h5>
                        <div className="" onClick={closeEditModal}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 space-y-4">
                        <form className="space-y-4">
                          <div className="mb-6">
                            <label
                              htmlFor="title"
                              className="block text-lg font-medium text-gray-800 mb-1"
                            >
                              Title
                            </label>
                            <input
                              type="text"
                              id="title"
                              name="title"
                              value={editPost.title}
                              onChange={onchange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                          </div>
                          <div className="mb-6">
                            <label
                              htmlFor="slug"
                              className="block text-lg font-medium text-gray-800 mb-1"
                            >
                              Slug
                            </label>
                            <input
                              type="text"
                              id="slug"
                              name="slug"
                              value={editPost.slug}
                              onChange={onchange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                          </div>
                          <div className="mb-6">
                            <label
                              htmlFor="category"
                              className="block text-lg font-medium text-gray-800 mb-1"
                            >
                              Category
                            </label>
                            <select
                              type="text"
                              id="category"
                              name="category"
                              value={editPost.category}
                              onChange={onchange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            >
                              <option value="">Select a category</option>
                              {category &&
                                category.map((select, index) => (
                                  <option key={index}>{select.category}</option>
                                ))}
                            </select>
                          </div>
                          <div className="mb-6">
                            <label
                              htmlFor="content"
                              className="block text-lg font-medium text-gray-800 mb-1"
                            >
                              Content
                            </label>
                            <ReactQuill
                              theme="snow"
                              value={editPost.content}
                              // onChange={(value) => onchange({ target: { name: "content", value } })}
                              onChange={(value) =>
                                onchange({ target: { name: "content", value } })
                              }
                              modules={{
                                toolbar: [
                                  [
                                    { header: "1" },
                                    { header: "2" },
                                    {
                                      header: "3",
                                      attributes: {
                                        className: "custom-header",
                                      },
                                    },
                                    {
                                      header: "4",
                                      attributes: {
                                        className: "custom-header",
                                      },
                                    },
                                    {
                                      header: "5",
                                      attributes: {
                                        className: "custom-header",
                                      },
                                    },
                                    { font: [] },
                                  ],
                                  [
                                    "bold",
                                    "italic",
                                    "underline",
                                    "strike",
                                    "blockquote",
                                  ],
                                  [{ list: "ordered" }, { list: "bullet" }],
                                  ["link", "image"],
                                  [{ color: [] }, { background: [] }],
                                  ["clean"],
                                  [{ align: [] }],
                                ],
                              }}
                              formats={[
                                "header",
                                "font",
                                "bold",
                                "italic",
                                "underline",
                                "strike",
                                "blockquote",
                                "list",
                                "bullet",
                                "link",
                                "image",
                                "color",
                                "background",
                                "align",
                              ]}
                            />
                          </div>
                          <div className="mb-6">
                            <label
                              htmlFor="image"
                              className="block text-lg font-medium text-gray-800 mb-1"
                            >
                              Blog Image
                            </label>
                            {editPost.image ? (
                              <div className="space-y-4">
                                <img
                                  src={
                                    typeof editPost.image === "string"
                                      ? editPost.image
                                      : URL.createObjectURL(editPost.image)
                                  }
                                  alt="Blog Preview"
                                  className="max-w-full h-auto rounded-md"
                                />
                                <div className="flex items-center gap-4">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      onchange({
                                        target: { name: "image", value: null },
                                      })
                                    }
                                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                  >
                                    Remove Image
                                  </button>
                                  <label
                                    htmlFor="new-image"
                                    className="px-4 py-2 bg-indigo-500 text-white rounded-md cursor-pointer hover:bg-indigo-600"
                                  >
                                    Upload New Image
                                  </label>
                                  <input
                                    type="file"
                                    id="new-image"
                                    name="image"
                                    accept="image/*"
                                    onChange={(e) =>
                                      onchange({
                                        target: {
                                          name: "image",
                                          value: e.target.files[0],
                                        },
                                      })
                                    }
                                    className="hidden"
                                  />
                                </div>
                              </div>
                            ) : (
                              <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={(e) =>
                                  onchange({
                                    target: {
                                      name: "image",
                                      value: e.target.files[0],
                                    },
                                  })
                                }
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                              />
                            )}
                          </div>
                        </form>
                      </div>
                      <div className="flex items-center gap-4 justify-end px-6 py-4 border-t">
                        <button
                          type="button"
                          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                          onClick={closeEditModal}
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn-anim text-white px-6 py-2 rounded-md"
                          data-bs-dismiss="modal"
                          onClick={updatePost}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blogs;
