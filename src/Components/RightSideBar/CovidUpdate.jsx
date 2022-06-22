import React from "react";
import sample2 from "../../assets/images/Svg_sample2.png";
const CovidUpdate = () => {
  return (
    <div className=" my-2 bg-white  px-4 py-5 pt-4 rounded-md border-[#EDEBEB] border-2 pr-2">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-[#2E1619] font-medium text-[14px]">
            Covid-19 Updates
          </h3>
        </div>
        <div className="text-right">
          <h3 className="text-[#2E1619] font-medium text-[14px]">
            10 September 2022
          </h3>
          <h4 className="text-accent text-[14px]">Thursday 10:00:00 AM</h4>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <img src={sample2} alt="" />
        </div>
        <div className="bg-red-500 w-1/2 h-[190px] overflow-y-auto">
          <div>
            <h4>Infection Number</h4>
            <h4>500</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in cumque delectus laborum, dolorum ex id doloremque dolores architecto debitis corporis, unde dolore aliquam repudiandae culpa? Quo sit id dolorem minus! Illo id officiis iure ex quo suscipit libero error minus molestiae autem praesentium voluptas nam deleniti aspernatur dolorum modi fugit inventore reiciendis pariatur deserunt, sint molestias numquam unde. Provident, eaque. Magnam, debitis sit voluptates accusantium nemo dolores vitae rem? Voluptatem aut, eum cum expedita magnam porro. Ducimus, nesciunt. Officia cupiditate atque autem harum in, reiciendis illum odit necessitatibus et, recusandae tempora facilis voluptate expedita quibusdam iste error dignissimos nostrum?
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidUpdate;
