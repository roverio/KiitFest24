
import React from "react";
import Navbar from "@/components/navbar";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";


const ContactUs = () => {
  return (
    <div className=" min-h-screen bg-about-background">
      <Navbar/>
      <div id="footer" className="w-full h-full bg-no-repeat bg-cover pt-24">
        <footer className="g-gradient-to-b from-black to-black via-blue-900 md:mx-auto mx-2 md:px-12 py-6 rounded-lg text-white">
          <div className="container mx-auto space-y-8 ">
            <div className="flex flex-col">
              <div className="flex justify-center">
                <h3 className="text-2xl text-center font-extrabold text-white font-sans ">
                  CONTACT US
                </h3>
              </div>
              <div className="mt-12 flex justify-start ">
                <div className="w-full rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="350"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.636720758235!2d85.81634771159072!3d20.35662091044425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093cc3e1974b%3A0x85a345e1f4fcce86!2sKIIT%20Student%20Activity%20Center%20-%20KSAC!5e0!3m2!1sen!2sin!4v1689966822541!5m2!1sen!2sin"
                    allowFullScreen
                    style={{ borderRadius: "30px" }}
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between mt-6 ">
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4 text-left">
                <h4 className="text-lg font-bold text-white">PHONE</h4>
                <p className="text-white">
                  <a href="tel: +917008051628">
                    +91-7008051628 (Shivram Krishna){" "}Operation
                  </a>
                </p>
                <p className="text-white">
                  <a href="https://wa.me/8697087952">
                    +91-8697087952 (Sohini Joarder){" "}Payments and Tech
                  </a>{" "}
                </p>
                <p className="text-white">
                  <a href="tel: +917478299805">
                    +91-7478299805 (Anamitra Sen Gupta){" "}Public Relations
                  </a>
                </p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4 md:pl-16">
                <h4 className="text-lg font-bold text-white">Address</h4>
                <p className="text-white">Student Activity Centre</p>
                <p className="text-white">
                  Campus 13 KIIT (Deemed to be University)
                </p>
                <p className="text-white">Bhubaneswar, Odisha-751024</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4 md:pl-16">
                <h4 className="text-lg font-bold text-white">Email</h4>
                <p className="text-white">
                  <a href="mailto:kiit.mun@kiit.ac.in">kiit.fest@kiit.ac.in</a>{" "}
                </p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4 md:pl-16">
                <h4 className="text-lg font-bold text-white text-centert">
                  Social Media
                </h4>
                <div className="flex items-center">
                  <FaFacebook
                    style={{ fontSize: "xs", marginRight: "0.5rem" }}
                  />
                  <a
                    href="https://www.facebook.com/kiitfest/"
                    className="text-white"
                    target="blank"
                  >
                    Facebook
                  </a>
                </div>
                <div className="flex items-center">
                  <FaInstagram
                    style={{ fontSize: "xs", marginRight: "0.5rem" }}
                  />
                  <a
                    href="https://www.instagram.com/kiitfest/"
                    className="text-white"
                    target="blank"
                  >
                    Instagram
                  </a>
                </div>
                <div className="flex items-center">
                  <FaTwitter
                    style={{ fontSize: "xs", marginRight: "0.5rem" }}
                  />
                  <a
                    href="https://x.com/KIITFest?t=SK7oE2X1zqdfwy7e8tG2aw&s=09"
                    className="text-white"
                    target="blank"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-300" />

            <div className="flex items-center gap-4 justify-between">
              <div className="flex gap-2 ml-4 md:ml-0">
                <p className="text-left text-sm md:text-base md:text-left text-white-700 flex flex-col md:flex-row gap-1">
                  <span>© KIITFEST 7.0</span>
                  <span>All rights reserved.</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;
