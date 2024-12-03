import React,{useState} from  "react";
 const Testimonials = () =>{
	const [testimonialActive, setTestimonialActive] = useState(2);

	const handlePrevious = () => {
	  setTestimonialActive(testimonialActive === 1 ? 4 : testimonialActive - 1);
	};
  
	const handleNext = () => {
	  setTestimonialActive(testimonialActive >= 4 ? 1 : testimonialActive + 1);
	};
  
	return (
	  <div className="mt-10 md:mt-24 container mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden">
		<div className="relative w-full py-2 md:py-24 bg-purple-800 md:w-1/2 flex flex-col items-center justify-center">
		  <div className="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24"></div>
		  
		  <div className="relative text-2xl md:text-5xl py-2 px-6 md:py-6 md:px-1 md:w-64 md:mx-auto text-indigo-100 font-semibold leading-tight tracking-tight mb-0 z-20">
			<span className="md:block">What Our</span>
			<span className="md:block">Customers</span>
			<span className="block">Are Saying!</span>
		  </div>
  
		  <div className="absolute right-0 bottom-0 mr-4 mb-4 hidden md:block">
			<button
			  className="rounded-l-full border-r bg-gray-100 text-gray-500 focus:outline-none hover:text-purple-800 font-bold w-12 h-10"
			  onClick={handlePrevious}
			>
			  &#8592;
			</button>
			<button
			  className="rounded-r-full bg-gray-100 text-gray-500 focus:outline-none hover:text-purple-800 font-bold w-12 h-10"
			  onClick={handleNext}
			>
			  &#8594;
			</button>
		  </div>
		</div>
  
		<div className="bg-gray-100 md:w-1/2">
		  <div className="flex flex-col h-full relative">
			<div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
			  <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-200 fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24">
				<path d="M6.5 10c-.223..."></path>
			  </svg>
			</div>
  
			<div className="h-full relative z-10">
			  {testimonialActive === 1 && (
				<p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
				"CapoBrain's user-friendly interface has streamlined our student management, class scheduling, and attendance tracking, making these tasks effortless."</p>
			  )}
			  {testimonialActive === 2 && (
				<p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
				"CapoBrain has transformed our administrative processes, enhancing efficiency and allowing us to concentrate on student success."</p>
			  )}
			  {testimonialActive === 3 && (
				<p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
				"With CapoBrain, our teachers efficiently assign tasks and communicate with parents, fostering a collaborative learning environment."				</p>
			  )}
			  {testimonialActive === 4 && (
				<p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
				"CapoBrain has enhanced our communication and strengthened relationships, promoting parental engagement in their children's education."				</p>
			  )}
			</div>
  
			<div className="flex my-4 justify-center items-center">
			  {['NI', 'AR', 'SNC' , 'FM'].map((label, index) => {
				const active = index + 1 === testimonialActive;
				return (
				  <button
					key={index}
					onClick={() => setTestimonialActive(index + 1)}
					className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2 ${
					  active
						? 'h-16 w-16 opacity-100 bg-purple-800 text-white'
						: 'h-12 w-12 opacity-25 bg-indigo-300 text-gray-600'
					}`}
				  >
					{label}
				  </button>
				);
			  })}
			</div>
  
			<div className="flex justify-center px-6 pt-2 pb-6 md:py-6">
			  {testimonialActive === 1 && (
				<div className="text-center">
				  <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">Nimra Ihsan</h2>
				  <small className="text-gray-500 text-xs md:text-sm truncate">Manager HR (The Educators).</small>
				</div>
			  )}
			  {testimonialActive === 2 && (
				<div className="text-center">
				  <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">Asim Rasool</h2>
				  <small className="text-gray-500 text-xs md:text-sm truncate">Director (Apex College)</small>
				</div>
			  )}
			  {testimonialActive === 3 && (
				<div className="text-center">
				  <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">Sikandar Nawaz Cheema</h2>
				  <small className="text-gray-500 text-xs md:text-sm truncate">Principal (Falcon Central School).</small>
				</div>
			  )}
			  {testimonialActive === 4 && (
				<div className="text-center">
				  <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">Faizan Minhas</h2>
				  <small className="text-gray-500 text-xs md:text-sm truncate">Genral Manager (Dar e Arqam Schools).</small>
				</div>
			  )}
			</div>
		  </div>
		</div>
	  </div>
	);
  }
 
 export default Testimonials;