import React from "react";
import somPng from "/Users/mac/Desktop/i-tapp-client/src/assets/images/company.png";
const AboutSpace = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto p-6">
        {/* Company Banner */}
        <div>
          <img
            src={somPng.src} // Replace with actual image URL
            alt="Company Banner"
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Title and Dates Section (now under the image) */}
        <div className="mt-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex items-center justify-center w-12 h-12 bg-red-500 text-white rounded-full text-xl font-bold">
              N
            </div>
            <div className="ml-4">
              <h2 className="text-base font-bold">Exxonmobil</h2>
              <p className="text-sm text-blue-500">Ikeja, Lagos</p>
            </div>
          </div>
          <div className="text-left md:text-right">
            <p className="text-base">
              Start date:
              <span className="font-bold"> Monday, 12th Feb, 2024</span>
            </p>
            <p className="text-base">
              End date:{" "}
              <span className="font-bold"> Monday, 12th Aug, 2024</span>
            </p>
          </div>
        </div>

        {/* About the Company Section */}
        <section className="mt-8">
          <h4 className="text-2xl font-bold">About the Company</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
            <div className="border p-4 rounded-lg text-center">
              <p className="font-bold">Founded</p>
              <p>1911</p>
            </div>
            <div className="border p-4 rounded-lg text-center">
              <p className="font-bold">Headquarters</p>
              <p>Ikeja, Lagos</p>
            </div>
            <div className="border p-4 rounded-lg text-center">
              <p className="font-bold">Industry</p>
              <p>Energy & Utilities</p>
            </div>
            <div className="border p-4 rounded-lg text-center">
              <p className="font-bold">IT Duration</p>
              <p>6 months</p>
            </div>
            <div className="border p-4 rounded-lg text-center">
              <p className="font-bold">Company Size</p>
              <p>6,000</p>
            </div>
            <div className="border p-4 rounded-lg text-center">
              <p className="font-bold">Website Link</p>
              <p>N/A</p>
            </div>
          </div>
        </section>

        {/* Company Description */}
        <section className="mt-8">
          <p>
            We are a global group of energy and petrochemicals companies with
            over 90,000 employees in more than 70 countries and territories.
          </p>
          <p className="mt-4">
            Our operations are divided into Upstream, Integrated Gas and New
            Energies, Downstream, and Projects & Technology.
          </p>
          <p className="mt-4">
            Upstream focuses on exploration for new liquids and natural gas
            reserves and on developing major new projects.
          </p>
          <p className="mt-4">
            Integrated Gas and New Energies focuses on liquefying natural gas
            (LNG) and converting gas to liquids (GTL) so that it can be safely
            stored and shipped to markets around the world. The New Energies
            business explores and invests in new low-carbon opportunities.
          </p>
          <p className="mt-4">
            Downstream focuses on turning crude oil into a range of refined
            products, which are moved and marketed around the world. We also
            produce and sell petrochemicals for industrial use worldwide. Our
            oil sands mining activities are a part of Downstream.
          </p>
          <p className="mt-4">
            Our Projects & Technology business is responsible for delivering new
            development projects and innovative research and development.
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutSpace;
