import React from "react";

const UpCommingEvent = () => {
  return (
    <div className=" border-2 border-[#EDEBEB] bg-white  rounded-md pt-4">
      <h1 className="text-primary text-[16px] pl-4 font-medium mb-4">
        Upcoming Appointments
      </h1>
      <div className="lg:h-[590px] md:h-[550px] overflow-y-scroll text-center text-[#FBFBFB] font-medium rounded-md upcomming-appoinment">
        <ul className="relative upcomming-item lg:px-4 md:px-1">
          {appoinments.map((appoinment) => (
            <li key={appoinment.id} className="relative upcomming-list">
              <div
                className={`absolute w-[25px] z-50 h-[25px] ${appoinment.color} rounded-full -left-2 top-1/2 border-[5px] border-white`}
              ></div>
              <div className="flex items-center  rounded-lg mx-4 my-4">
                <div className="bg-white sm:p-4 p-2 rounded-lg z-50 border-[#EDEBEB] border-2">
                  <h5 className="text-secondary text-[13px]">
                    {appoinment.year}
                  </h5>
                  <h4 className="text-secondary py-1 sm:py-2 text-[20px]">
                    {appoinment.date}
                  </h4>
                  <h3 className="text-secondary text-[20px]">
                    {appoinment.month}
                  </h3>
                </div>
                <div className="rounded-md border-2 border-[#FDDAD6] lg:py-4 md:py-1 -ml-5 pl-6 z-0 w-full bg-[#FFF5F5] text-left">
                  <h3 className="text-[#384449] font-medium text-[16px]">
                    {appoinment.doctor}
                  </h3>
                  <h4 className="text-secondary text-[13px] pt-1 sm:pb-3">
                    {appoinment.specialist}
                  </h4>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2 items-center bg-white font-medium  py-1 px-2">
                      <span className="text-accent">Slot</span>
                      <span className="text-[#384449]">{appoinment.Slot}</span>
                    </div>
                    <div className="flex gap-2 items-center bg-white font-medium  py-1 px-2">
                      <span className="text-accent">Time</span>
                      <span className="text-[#384449]">{appoinment.time}</span>
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
