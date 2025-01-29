import React, { useState ,useRef } from "react";
import Sidebar from "./component/sidebar";
import AdminNav from "./component/admin-nav";
import { SiBloglovin } from "react-icons/si";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddBlog = () => {
  const [image_url, setImage_url] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    slug: "",
    content: "",
    image: null,
  });

  const [errors, setErrors] = useState({
    title: "",
    category: "",
    slug: "",
    content: "",
    image: "",
  });
  const quillRef = useRef(null);
  const handleContentChange = (value, delta, source, editor) => {
    setFormData({ ...formData, content: editor.getHTML() });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file.");
        return;
      }
      setImage_url(URL.createObjectURL(file));
      setFormData({
        ...formData,
        image: file,
      });
    }
  };

  const handleCancel = () => {
    setImage_url(null);
    setFormData({
      ...formData,
      image: null,
    });
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      title: "",
      category: "",
      slug: "",
      content: "",
      image: "",
    };

    if (!formData.title.trim()) {
      newErrors.title = "Blog name is required.";
      isValid = false;
    }

    if (!formData.category) {
      newErrors.category = "Category is required.";
      isValid = false;
    }

    if (!formData.slug.trim()) {
      newErrors.slug = "Slug is required.";
      isValid = false;
    }

    if (!formData.content.trim()) {
      newErrors.content = "Blog content is required.";
      isValid = false;
    }

    if (!formData.image) {
      newErrors.image = "You must upload a photo.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("slug", formData.slug);
      formDataToSend.append("content", formData.content);
      formDataToSend.append("image", formData.image);
      for (let [key, value] of formDataToSend.entries()) {
        console.log(`${key}: ${value}`);
      }
      try {
        const response = await fetch("https://capobrain-backend.vercel.app/api/auth/createpost", {
          method: "POST",
          body: formDataToSend,
        });

        if (response.ok) {
          const result = await response.json();
          const imageUrl = result.imageUrl; 

          Swal.fire({
            title: "Success!",
            text: "Blog has been uploaded successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });

          setFormData({
            title: "",
            category: "",
            slug: "",
            content: "",
            image: null,
          });
          setImage_url(null);
        } else {
          const errorText = await response.text();
          console.error(`Error ${response.status}: ${errorText}`);
          Swal.fire({
            title: "Error!",
            text: `Failed to upload blog. ${errorText}`,
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while uploading the blog.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  }

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Add a new blog post to Capobrain School Management System's blog. Create, edit, and publish informative articles, school news, and updates easily through the Admin Panel."
        />
        <meta
          name="keywords"
          content="Capobrain Admin Panel Add Blog, Add New Blog Post, Admin Panel Blog Editor, School Management Blog Page, Create Blog for School Software, Add Content for School Blog"
        />
        <meta name="robots" content="index, follow" />
        <title>Add New Blog Post - Capobrain Admin Panel</title>

        <meta
          property="og:title"
          content="Add New Blog Post - Capobrain Admin Panel"
        />
        <meta
          property="og:description"
          content="Easily add new blog posts to the Capobrain School Management System's blog. Create and publish articles, school news, and updates from the admin dashboard."
        />
        <meta
          property="og:image"
          content="https://capobrain.com/static/media/capobrain-logo.adec461fe08022b24b28.png"
        />
        <meta
          property="og:url"
          content="https://capobrain.com/adminpanel/addblog"
        />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Add New Blog Post - Capobrain Admin Panel"
        />
        <meta
          name="twitter:description"
          content="Add and publish new blog posts to Capobrain’s school management blog. Manage school updates, articles, and news from the admin panel."
        />
        <meta
          name="twitter:image"
          content="https://capobrain.com/static/media/capobrain-logo.adec461fe08022b24b28.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <AdminNav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="flex items-center justify-center mb-12">
            <form className="w-full mt-8" onSubmit={handleSubmit}>
              <div className="w-full grid p b-10">
                <h1 className="sm:text-3xl text-xl text-slate-700 text-center heading-body">
                  Add Blog
                </h1>
                <div className="flex justify-center py-2">
                  <div className="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
                    <SiBloglovin className="w-8 h-8 text-white" />
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
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                  {errors.title && (
                    <div className="text-sm text-red-500">
                      {errors.title}
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Category
                  </label>
                  <select
                    className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option>Select a Category</option>
                    <option>Technology</option>
                    <option>Educational Software</option>
                    <option>Education Management</option>
                    <option>Manual Treasures</option>
                  </select>
                  {errors.category && (
                    <div className="text-sm text-red-500">
                      {errors.category}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Blog Slug
                  </label>
                  <input
                    className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    type="text"
                    placeholder="Enter Blog Slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Blog Content
                  </label>
                  {/* <ReactQuill
                    value={formData.content}
                    onChange={handleContentChange}
                    placeholder="Type Content"
                    modules={modules}
                    formats={formats}
                  /> */}
                  <ReactQuill
                   ref={quillRef}
                    className="py-2 px-1 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:border-transparent realtive h-max"
                style={{ backgroundColor: "white" }}
                theme="snow"
                value={formData.content}
                onChange={handleContentChange}
                modules={{
                  toolbar: [
                    [
                      { header: "1" },
                      { header: "2" },
                      {
                        header: "3",
                        attributes: { className: "custom-header" },
                      },
                      {
                        header: "4",
                        attributes: { className: "custom-header" },
                      },
                      {
                        header: "5",
                        attributes: { className: "custom-header" },
                      },
                      { font: [] },
                    ],
                    ["bold", "italic", "underline", "strike", "blockquote"],
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
                  {errors.content && (
                    <div className="text-sm text-red-500">{errors.content}</div>
                  )}
                </div>
                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
                    Upload Photo
                  </label>
                  <div className="flex items-center justify-center w-full">
                    {!image_url ? (
                      <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group">
                        <div className="flex flex-col items-center justify-center pt-7">
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
                        </div>
                        <input
                          id="fileInput"
                          type="file"
                          name="image"
                          className="hidden"
                          onChange={handlePhotoChange}
                        />
                      </label>
                    ) : (
                      <div className="relative flex">
                        <img
                          src={image_url}
                          alt="Uploaded"
                          
                          loading="lazy"
                          className="w-36 h-36 object-cover rounded-md"
                        />
                        <button
                          type="button"
                          onClick={handleCancel}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                        >
                          ✕
                        </button>
                      </div>
                    )}
                  </div>
                  {errors.image && (
                    <div className="text-sm text-red-500">{errors.image}</div>
                  )}
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
