import React from "react";
import Delivery from "../../img/delivery.png";
import { heroData } from "../../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
      id="home"
    >
      <div className="md:py-2 md:flex-1 md:flex md:flex-col md:items-start md:justify-center md:gap-6 mx-10">
        <div className="flex items-center gap-2 justify-center bg-blue-400 px-4 py-1 rounded-full">
          <p className="text-base font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] lg:my-0 mt-10 mb-8 font-bold tracking-wide text-headingColor">
          Giao hàng siêu nhanh tại <span className="text-blue-600 text-[3rem] lg:text-[5rem]">Thành phố Hồ Chí Minh</span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%] md:mb-0 mb-12">
          Được thành lập vào 2022, chúng tôi tin rằng Pulu Pulu Pulu là dịch vụ giao đồ ăn, đồ uống, thực phẩm,... nhanh nhất và tiện nhất 
          tại thành phố Hồ Chí Minh, với giá cả phải chăng cùng với những promo giảm giá và ưu đãi cho những thành viên mới.
          Đăng kí ngay để nhận được những ưu đãi hấp dẫn nhất từ Pulu Pulu Pulu!
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-blue-400 to-blue-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:mb-0 mb-10"
        >
          Order Now
        </button>
      </div>
      <div className="hidden md:py-2 md:flex-1 md:flex md:items-center md:relative">
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 h-20 lg:h-40 -mt-10 lg:-mt-20 object-contain"
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-blue-500">{n.price} VND</span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
