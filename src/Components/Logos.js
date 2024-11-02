import React from "react";
import laravel from "../img/Laravel.svg";
import SaaS from "../img/saas.png";
import js from "../img/valina_js.jpg";
const Logos = () => {
  return (
    <div className="bg-gray-50 w-full px-4 pt-8 pb-3" id="faq">
      <p className="font-semibold text-center text-lg tracking-wider">
        Built on
      </p>

      <div className="flex flex-row flex-wrap max-w-[1000px] w-full mx-auto items-center justify-center md:justify-around">
        <div className="text-gray-400 ">
          <svg
            width="120"
            height="60"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#E44D26" d="M71,460 30,0h452l-41,460-184,52" />
            <path fill="#F16529" d="M256,472l149-41,35-394H256" />
            <path
              fill="#EBEBEB"
              d="m256 208h-70l-5-56h75v-56h-139l1 14 13 144h125zm0 139-62-17-4-43h-56l8 89 114 32z"
            />
            <path
              fill="#fff"
              d="m256 208v56h67l-6 65-61 17v57l114-32 1-12 13-144 1-14zm0 0z"
            />
          </svg>
        </div>
        <div className="text-gray-400 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="120"
            height="80"
            viewBox="0 0 48 48"
            title="css5 Logo - Best School Software"
          >
            <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
            <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
            <path
              fill="#FFF"
              d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
            ></path>
            <path
              fill="#EEE"
              d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
            ></path>
          </svg>
        </div>
        <div className="text-gray-400 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 30 30"
            title="Javascript Logo - School Management Software"
          >
            <path
              fill="#dcd5f2"
              d="M15,22.5c-7.995,0-14.5-3.364-14.5-7.5S7.005,7.5,15,7.5s14.5,3.364,14.5,7.5S22.995,22.5,15,22.5z"
            ></path>
            <path
              fill="#8b75a1"
              d="M15,8c7.589,0,14,3.206,14,7s-6.411,7-14,7S1,18.794,1,15S7.411,8,15,8 M15,7C6.716,7,0,10.582,0,15 s6.716,8,15,8s15-3.582,15-8S23.284,7,15,7L15,7z"
            ></path>
            <path
              fill="#36404d"
              d="M9.417 13c.598 0 1.116.203 1.384.543.192.244.245.555.157.927C10.69 15.599 10.216 16 8.089 16H6.58l.563-3H9.417M9.417 12H6.313L5 19h1l.396-2h1.693c2.199 0 3.395-.417 3.842-2.299C12.316 13.084 11.039 12 9.417 12L9.417 12zM22.417 13c.598 0 1.116.203 1.384.543.192.244.245.555.157.927C23.69 15.599 23.216 16 21.089 16H19.58l.563-3H22.417M22.417 12h-3.104L18 19h1l.396-2h1.693c2.199 0 3.395-.417 3.842-2.299C25.316 13.084 24.039 12 22.417 12L22.417 12z"
            ></path>
            <g>
              <path
                fill="#36404d"
                d="M17.652,12.424C17.323,12.122,16.742,12,15.875,12h-1.848l0.451-2h-1.017L12,17h1.016l0.841-4h0.171 h1.848c0.91,0,1.094,0.155,1.096,0.155c0.019,0.03,0.058,0.194-0.008,0.532L16.288,17h1.046l0.61-3.121 C18.075,13.212,17.976,12.722,17.652,12.424z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="text-gray-400 ">
          <img
            src={laravel}
            alt="Laravel Logo"
            height="60"
            width="160"
            className=""
            title="Laravel Logo - School ERP Solutions"
          />
        </div>
        <div className="text-gray-400 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            title="Bootstrap Logo - School Software Solutions"
          >
            <path
              fill="#7c4dff"
              d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.726,2.353,1.951,3.84,3.957,4.031v2.167c-2.006,0.191-3.23,1.678-3.957,4.031	c-0.724,2.345-0.824,5.222-0.747,7.443C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443	c0.077-2.221-0.023-5.097-0.747-7.443c-0.726-2.353-1.954-3.84-3.96-4.031v-2.167c2.006-0.191,3.233-1.678,3.96-4.031	C7.35,16.54,7.451,13.664,7.373,11.443z"
            ></path>
            <path
              fill="#fff"
              d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"
            ></path>
          </svg>
        </div>

        <div className="text-gray-400 ">
          <img
            src={SaaS}
            alt="SaaS School Software Solutions"
            height="100"
            width="120"
            className=""
            title="Saas Logo - School Software Solutions"
          />
        </div>
        <div className="text-gray-400 ">
          <img
            src={js}
            alt="Vanila Javscript"
            height="60"
            width="80"
            className="rounded-xl ml-2"
            title="Javascript Logo - School Software Solutions"
          />
        </div>
      </div>
    </div>
  );
};

export default Logos;
