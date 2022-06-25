import React from "react";

const UpCommingEvent = () => {
  return (
    <div className=" border-2 mx-4 md:mx-0 border-[#EDEBEB] bg-white dark:bg-[#2C2222] dark:border-[#2C2222] rounded-md pt-4">
      <h1 className="text-primary dark:text-[#FFFFFF] text-[16px] pl-4 font-medium mb-4">
        Upcoming Appointments
      </h1>
      <div className="xl:h-[590px] lg:h-[550px] h-[468px] overflow-y-scroll text-center text-[#FBFBFB] font-medium rounded-md upcomming-appoinment">
        <ul className="relative upcomming-item xl:px-4 lg:px-1">
          {appoinments.map((appoinment) => (
            <li key={appoinment.id} className="relative upcomming-list">
              <div
                className={`absolute w-[25px] z-10 h-[25px] ${appoinment.color} rounded-full -left-1 sm:-left-2 top-1/2 border-[5px] border-white dark:border-[#2C2222] `}
              ></div>
              <div className="flex items-center  rounded-lg mx-4 my-4">
                <div className="bg-white xl:p-4 md:p-3 p-2 rounded-lg z-10 border-[#EDEBEB] border-2">
                  <h5 className="text-secondary text-[13px]">
                    {appoinment.year}
                  </h5>
                  <h4 className="text-secondary py-1 md:py-2 text-[20px]">
                    {appoinment.date}
                  </h4>
                  <h3 className="text-secondary text-[20px]">
                    {appoinment.month}
                  </h3>
                </div>
                <div className="rounded-md border-2 border-[#FDDAD6] xl:py-4 py-3 lg:py-2 -ml-5 pl-6 z-0 w-full bg-[#FFF5F5] dark:bg-[#413838] text-left">
                  <h3 className="text-[#384449] dark:text-white font-medium text-[16px]">
                    {appoinment.doctor}
                  </h3>
                  <h4 className="text-secondary dark:text-white text-[13px] xl:pt-1 lg:pt-0 xl:pb-3 mb-1 lg:pb-0">
                    {appoinment.specialist}
                  </h4>
                  <div className="flex items-center gap-1">
                    <div className="flex gap-2 items-center bg-white rounded-md  font-medium  py-1 px-2">
                      <span className="text-accent text-[14px]">Slot</span>
                      <span className="text-[#384449] text-[10px]">{appoinment.slot}</span>
                    </div>
                    <div className="flex gap-2 items-center bg-white rounded-md  font-medium  py-1 px-2">
                      <span className="text-accent text-[14px]">Time</span>
                      <span className="text-[#384449] text-[10px]">{appoinment.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const appoinments = [
  {
    id: 1,
    year: 2022,
    month: "sep",
    date: 13,
    doctor: "Dr. Muhammad Abdul Hussein",
    specialist: "Cardiologist",
    slot: "Morning",
    time: "10.00 AM",
    color: "bg-[#FF9898]",
  },
  {
    id: 2,
    year: 2022,
    month: "sep",
    date: 13,
    doctor: "Dr. Muhammad Abdul Hussein",
    specialist: "Cardiologist",
    slot: "Morning",
    time: "10.00 AM",
    color: "bg-[#FFF598]",
  },
  {
    id: 3,
    year: 2022,
    month: "sep",
    date: 13,
    doctor: "Dr. Muhammad Abdul Hussein",
    specialist: "Cardiologist",
    slot: "Morning",
    time: "10.00 AM",
    color: "bg-[#98FFC1]",
  },
  {
    id: 4,
    year: 2022,
    month: "sep",
    date: 13,
    doctor: "Dr. Muhammad Abdul Hussein",
    specialist: "Cardiologist",
    slot: "Morning",
    time: "10.00 AM",
    color: "bg-[#FF9898]",
  },
  {
    id: 5,
    year: 2022,
    month: "sep",
    date: 13,
    doctor: "Dr. Muhammad Abdul Hussein",
    specialist: "Cardiologist",
    slot: "Morning",
    time: "10.00 AM",
    color: "bg-[#FFF598]",
  },
  {
    id: 6,
    year: 2022,
    month: "sep",
    date: 13,
    doctor: "Dr. Muhammad Abdul Hussein",
    specialist: "Cardiologist",
    slot: "Morning",
    time: "10.00 AM",
    color: "bg-[#98FFC1]",
  },
];

export default UpCommingEvent;
