import React, { useState } from "react";

function Map() {
  const [activeTab, setActiveTab] = useState("ContactForm");

  return (
    <section id="section_6" className="py-12 px-4 sm:px-6 lg:px-8 bg-white/60">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-semibold mb-6">
          Interested? Let's talk
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <nav className="flex gap-4 border-b w-full max-w-md justify-center">
            <button
              className={`py-2 px-4 font-medium transition-all delay-100 ${
                activeTab === "ContactForm"
                  ? "border-b-2 border-red-500 text-red-500"
                  : "text-gray-600 hover:text-red-400"
              }`}
              onClick={() => setActiveTab("ContactForm")}
            >
              Contact Info
            </button>
            <button
              className={`py-2 px-4 font-medium transition-all delay-100 ${
                activeTab === "ContactMap"
                  ? "border-b-2 border-red-500 text-red-500"
                  : "text-gray-600 hover:text-red-400"
              }`}
              onClick={() => setActiveTab("ContactMap")}
            >
              Google Maps
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6 shadow-lg p-6 rounded-lg bg-white">
          {activeTab === "ContactForm" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              {/* Location */}
              <div>
                <div className="mx-auto mb-4 flex items-center justify-center w-[75px] h-[75px] rounded-full bg-gray-100">
                  <i className="fas fa-map-marker-alt fa-2x text-red-500"></i>
                </div>
                <h6 className="text-sm font-medium">
                  National Highway 2, D-3, UPSIDC Industrial Area, Naini, Prayagraj, Uttar Pradesh
                </h6>
              </div>

              {/* Email */}
              <div>
                <div className="mx-auto mb-4 flex items-center justify-center w-[75px] h-[75px] rounded-full bg-gray-100">
                  <i className="fas fa-envelope-open fa-2x text-red-500"></i>
                </div>
                <h6 className="text-sm font-medium">
                  <a href="mailto:gdsc.uit@united.edu.in" className="text-blue-600 hover:underline">
                    gdsc.uit@united.edu.in
                  </a>
                </h6>
              </div>

              {/* Phone */}
              <div>
                <div className="mx-auto mb-4 flex items-center justify-center w-[75px] h-[75px] rounded-full bg-gray-100">
                  <i className="fas fa-phone-alt fa-2x text-red-500"></i>
                </div>
                <h6 className="text-sm font-medium">
                  <a href="https://wa.me/918577098055" className="text-blue-600 hover:underline">
                    +91 9565266758
                  </a>
                </h6>
              </div>
            </div>
          )}

          {activeTab === "ContactMap" && (
            <div className="w-full h-[450px] mt-4">
              <iframe
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.2201856751703!2d81.89525770667376!3d25.343221398748497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb316ad307d9%3A0x1d46d58ff5ae5116!2sUIT!5e1!3m2!1sen!2sin!4v1728472148601!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UIT Location"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Map;
