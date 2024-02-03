import React from "react";

import Navbar from "@/components/navbar";

const EventPage = async ({ params }) => {





    return (<div>
		
				<Navbar></Navbar>
		  <div className="bg-[url('/Assets/bgevent.png')] w-full min-h-screen  bg-no-repeat bg-cover ">
		  <div className=" pt-10">
		
		
			  <section className="w-[90vw] mx-auto lg:w-[60vw] mt-28  flex flex-col justify-between items-center text-white bg-gradient-to-r from-[#ffffff1a] to-[#ffffff00] bg-slate-950  border-[#130C5C] rounded-xl border-[1px] md:py-[40px] md:px-10 px-4 text-sm py-6 gap-5   md:text-base">
				{/* <IoCaretBack className="text-white text-xl"/> */}
				<h1 className="text-3xl font-semibold">Privacy policy for KIIT FEST</h1>
				<p>Privacy Policy for KIITFest
				Information Collection, Use & Security
		
				KIITFest is the sole owner of the information collected on this website. We take every precaution to protect and secure our databases and user’s information, and we will not sell, share, or rent this information to others.
				 <p className="my-8">
		
					 </p>
				Cookies
		
				We use “cookies” on our website. Cookies are text-only pieces of information that a website transfers to your browser for record-keeping purposes. Usage of a cookie is in no way linked to any personally identifiable information while on our site. Cookies allow the website to remember important information that will make your use of the site more convenient. We use cookies for a variety of purposes in order to improve your online experience, for analytics, and for marketing.
		
				You can choose to visit our website without cookies, but in some cases, certain services, features, and functionality may not be available. To visit without cookies, you can configure your browser to reject all cookies or notify you when a cookie is set. Each browser is different, so check the “Help” menu of your browser to learn how to change your cookie preferences.
					<p className="my-8">
		
		</p>
				Analytics
		
				This website uses vercel Analytics Advertising features for Interests and Demographics reporting. The information collected uses cookies to serve ads based on someone’s past visit to KIITFest’s website. Of course, any data collected will be used in accordance with our own privacy policy and vercel privacy policy.
		
				If you prefer to opt-out of the vercel Analytics Advertising Features, you may do so through Ads Settings, Ad Settings for mobile apps, or any other available means. Click here for the currently available vercel Analytics opt-outs.
					<p className="my-8">
		
		</p>
		
				Links
		
				This website contains links to other websites. We encourage you to read the privacy statements of these linked sites as their privacy policies may differ from ours.
					<p className="my-8">
		
		</p>
				Contact Information
		
				If you have questions or concerns regarding this Policy, you should email KIITFest at: <a href="mailto:kiit.fest@kiit.ac.in">kiit.fest@kiit.ac.in</a>
				<p className="my-8">
		</p>
				Changes to the Privacy Policy
		
				KIITFest retains the right to occasionally update this Privacy Policy in response to changing business circumstances and legal developments.</p>
		
		
			  </section>
			  </div>
		  </div>
		
	</div>)
}


export default EventPage;