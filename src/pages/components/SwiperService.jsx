import React from "react";
import PageWrapper from "../../main/Pagewraper";

const SwiperService = () => {
  return (
    <>
      <PageWrapper>
        <div className="flex p-10 bg-gray-100">
          <div className=" p-6 bg-white">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Success Stories from Our Clients
            </h2>

            <div className=" mb-6">
              <p className="text-gray-700 mb-4">
                "I am incredibly pleased with the website developed by Fronx
                Solution. It perfectly captures our brand identity and has
                significantly improved our online presence. The team was
                professional, attentive, and ensured every detail was just
                right. Since launching the site, we've seen a noticeable
                increase in customer engagement and inquiries. I highly
                recommend Fronx Solution to anyone looking for top-notch website
                development services."
              </p>
            </div>

            <div className="">
              <p className="text-gray-900 font-semibold">John Doe</p>
              <p className="text-gray-600">Founder & CEO of xyz.com</p>
            </div>
          </div>
          <div>
            <img src="/images/swiper.png" alt="" />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default SwiperService;
