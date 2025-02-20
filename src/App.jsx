import logo from "./assets/wundt_logo.jpg";
import b1 from "./assets/b1.jpg";
import s1 from "./assets/s1.jpg";
import s2 from "./assets/s2.jpg";
import s3 from "./assets/s3.jpg";
import s4 from "./assets/s4.jpg";
import s5 from "./assets/s5.jpg";
import prof from "./assets/prof.png";
import r1 from "./assets/r1.jpg";
import r2 from "./assets/r2.jpg";
import r3 from "./assets/r3.jpg";
import r4 from "./assets/r4.jpg";
import r6 from "./assets/r6.jpg";

import {
  FaArrowRightLong,
  FaCalendarCheck,
  FaHouseChimneyMedical,
} from "react-icons/fa6";
import { FaClinicMedical } from "react-icons/fa";
import { BsFillClipboard2PulseFill } from "react-icons/bs";
import { RiServiceFill } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import { PiCalendarCheckBold } from "react-icons/pi";
import {
  TbHeartHandshake,
  TbShieldCheck,
  TbUsers,
  TbHeartRateMonitor,
  TbBrain,
  TbUsersGroup,
  TbBook,
  TbClipboardList,
  TbPresentation,
} from "react-icons/tb";
import { TbActivityHeartbeat } from "react-icons/tb";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { FaUserDoctor } from "react-icons/fa6";
import { PiGraduationCapBold } from "react-icons/pi";

function App() {
  return (
    <>
      <div className="font-poppins text-slate-800">
        <header className="flex justify-between items-center bg-white px-36 py-4 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10 rounded-full" />
            <h1 className="font-semibold text-emerald-600 uppercase">
              Wundt Psychological Institute
            </h1>
          </div>

          <nav className="flex gap-2 text-sm ">
            <li className="list-none relative group py-2 px-4 cursor-pointer">
              <p className="group-hover:text-emerald-600 transition-all duration-500">
                Home
              </p>
              <span className="absolute left-0 bottom-0 right-0 scale-x-0 origin-left group-hover:scale-x-100 h-0.5 transition-all duration-500 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100"></span>
            </li>
            <li className="list-none relative group py-2 px-4 cursor-pointer">
              <p className="group-hover:text-emerald-600 transition-all duration-500">
                Services
              </p>
              <span className="absolute left-0 bottom-0 right-0 scale-x-0 origin-left group-hover:scale-x-100 h-0.5 transition-all duration-500 bg-emerald-600 rounded-full"></span>
            </li>
            <li className="list-none relative group py-2 px-4 cursor-pointer">
              <p className="group-hover:text-emerald-600 transition-all duration-500">
                About
              </p>
              <span className="absolute left-0 bottom-0 right-0 scale-x-0 origin-left group-hover:scale-x-100 h-0.5 transition-all duration-500 bg-emerald-600 rounded-full"></span>
            </li>
            <li className="list-none relative group py-2 px-4 cursor-pointer">
              <p className="group-hover:text-emerald-600 transition-all duration-500">
                Gallery
              </p>
              <span className="absolute left-0 bottom-0 right-0 scale-x-0 origin-left group-hover:scale-x-100 h-0.5 transition-all duration-500 bg-emerald-600 rounded-full"></span>
            </li>
            <li className="list-none relative group py-2 px-4 cursor-pointer">
              <p className="group-hover:text-emerald-600 transition-all duration-500">
                News
              </p>
              <span className="absolute left-0 bottom-0 right-0 scale-x-0 origin-left group-hover:scale-x-100 h-0.5 transition-all duration-500 bg-emerald-600 rounded-full"></span>
            </li>
            <li className="list-none relative group py-2 px-4 cursor-pointer">
              <p className="group-hover:text-emerald-600 transition-all duration-500">
                Contact
              </p>
              <span className="absolute left-0 bottom-0 right-0 scale-x-0 origin-left group-hover:scale-x-100 h-0.5 transition-all duration-500 bg-emerald-600 rounded-full"></span>
            </li>
          </nav>
        </header>

        {/* home */}
        <div
          style={{ backgroundImage: `url(${b1})` }}
          className="h-[40rem] bg-cover bg-center relative"
        >
          <div className="backdrop-blur-sm bg-gradient-to-r from-white  to-white/0 h-full flex items-center px-36 gap-8 ">
            <div className="max-w-[45rem]">
              <h1 className="font-bold text-4xl ">
                Premiere Provider of
                <span className="text-emerald-600">
                  {" "}
                  Psychological Counseling
                </span>{" "}
                &<span className="text-emerald-600"> Educational Services</span>
              </h1>

              <p className="mt-4  text-sm">
                Professional Regulation Commission - Board of Psychology Permit
                to Operate No. 03
              </p>

              <div className="mt-8 flex gap-4">
                <button className="bg-radial-[at_-50%_-50%] from-green-500 to-emerald-600 to-75% text-sm text-white px-8 py-4 font-semibold rounded  ">
                  Get Appointment
                </button>

                <button className="bg-radial-[at_-50%_-50%] from-slate-600 to-slate-800 to-75% text-sm text-white px-8 py-4 font-semibold rounded  ">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-8 absolute -bottom-44 left-0 right-0 px-36">
            <div className="flex-1 flex flex-col relative p-8 rounded shadow-lg text-white text-sm bg-radial-[at_-35%_15%] hover:bg-radial-[at_-20%_15%] from-green-500 to-emerald-600 to-75% overflow-hidden hover:shadow-card transition-all duration-500 hover:-translate-y-1">
              <h3 className="mt-2 text-xl font-semibold"> Who We Are</h3>
              <p className="mt-4 flex-1">
                Providing affordable and quality psychological, counseling, and
                educational services.
              </p>

              <button className="flex items-center gap-4 mt-6 uppercase font-semibold ">
                Learn more <FaArrowRightLong />
              </button>

              <RiServiceFill className="absolute text-9xl -right-4 -bottom-6 text-white/15" />
            </div>

            <div className="flex-1 flex flex-col relative p-8 rounded shadow-lg text-white text-sm bg-radial-[at_-35%_15%] hover:bg-radial-[at_-20%_15%] from-green-500 to-emerald-600 to-75% overflow-hidden hover:shadow-card transition-all duration-500 hover:-translate-y-1">
              <h3 className="mt-2 text-xl font-semibold">What We Offer</h3>
              <p className="mt-4 flex-1">
                From psychological testing to counseling and development
                programs.
              </p>

              <button className="flex items-center gap-4 mt-6 uppercase font-semibold ">
                Learn more <FaArrowRightLong />
              </button>

              <HiClipboardDocumentCheck className="absolute text-9xl -right-6 -bottom-7 text-white/15" />
            </div>

            <div className="flex-1 flex flex-col relative p-8 rounded shadow-lg text-white text-sm bg-radial-[at_-35%_15%] hover:bg-radial-[at_-20%_15%] from-green-500 to-emerald-600 to-75% overflow-hidden hover:shadow-card transition-all duration-500 hover:-translate-y-1">
              <h3 className="mt-2 text-xl font-semibold">What Drives Us</h3>
              <p className="mt-4 flex-1">
                Passion for service, commitment to quality, and care that makes
                a difference.
              </p>

              <button className="flex items-center gap-4 mt-6 uppercase font-semibold ">
                Learn more <FaArrowRightLong />
              </button>

              <FaHandsHelping className="absolute text-9xl -right-0 -bottom-5 text-white/15" />
            </div>

            <div className="flex-1 flex flex-col relative p-8 rounded shadow-lg text-white text-sm bg-radial-[at_-35%_15%] hover:bg-radial-[at_-20%_15%] from-green-500 to-emerald-600 to-75% overflow-hidden hover:shadow-card transition-all duration-500 hover:-translate-y-1">
              <h3 className="mt-2 text-xl font-semibold">Visit Our Branches</h3>
              <p className="mt-4 flex-1">
                Serving Dagupan, Vigan, Urdaneta, and Mangaldan with accessible,
                expert care.
              </p>

              <button className="flex items-center gap-4 mt-6 uppercase font-semibold ">
                Learn more <FaArrowRightLong />
              </button>

              <FaHouseChimneyMedical className="absolute text-9xl -right-5 -bottom-5 text-white/15" />
            </div>
          </div>
        </div>

        {/* why choose us */}
        <div className="mt-64 px-36">
          <div className="flex justify-center flex-col items-center gap-2">
            <h1 className="text-3xl font-semibold  text-center">
              Why Choose Wundt Psychological Institute?
            </h1>

            <div className="flex items-center text-3xl text-emerald-600">
              <p>-</p>
              <TbActivityHeartbeat />
              <p>-</p>
            </div>
          </div>

          <div className="flex mt-12">
            <div className="flex-1 flex flex-col gap-8 justify-center">
              <div className="flex items-start gap-4">
                <div className="text-emerald-600 text-4xl">
                  <TbShieldCheck />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Licensed Professionals
                  </h3>
                  <p className="text-sm text-slate-500">
                    Experienced and certified experts providing ethical and
                    reliable care.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-emerald-600 text-4xl">
                  <TbHeartHandshake />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Client-Centered Approach
                  </h3>
                  <p className="text-sm text-slate-500">
                    Personalized services tailored to meet every client’s unique
                    needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-emerald-600 text-4xl">
                  <TbUsers />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Accessible for All</h3>
                  <p className="text-sm text-slate-500">
                    Making psychological services affordable and accessible for
                    everyone.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 h-[20rem] rounded relative">
              <img
                src={s2}
                alt=""
                className="w-full h-full object-cover rounded"
              />
              <span className="absolute inset-0 bg-emerald-600 -z-10 translate-y-2 translate-x-2 rounded"></span>
            </div>
          </div>
        </div>

        {/* services */}
        <div className="mt-36 px-36">
          <div className="flex justify-center flex-col items-center gap-2">
            <h1 className="text-3xl font-semibold  text-center">
              Comprehensive Services We Offer
            </h1>

            <div className="flex items-center text-3xl text-emerald-600">
              <p>-</p>
              <TbActivityHeartbeat />
              <p>-</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="p-8 rounded flex flex-col items-center text-center text-sm text-slate-500 shadow-card2 transition-all hover:shadow-card duration-500">
              <TbHeartRateMonitor className="text-4xl text-emerald-600 " />
              <h3 className="font-semibold text-slate-800 text-lg mt-4">
                Psychological & Psychiatric Testing
              </h3>
              <p className="text-xs italic">
                For Employment, Legal, Clinical, and Academic Purposes
              </p>
              <p className="mt-6">
                Comprehensive assessments tailored for employment screenings,
                academic needs, clinical diagnostics, and legal cases.
              </p>
            </div>

            <div className="p-8 rounded flex flex-col items-center text-center text-sm text-slate-500 shadow-card2 transition-all hover:shadow-card duration-500">
              <TbBrain className="text-4xl text-emerald-600 " />
              <h3 className="font-semibold text-slate-800 text-lg mt-4">
                Child & Adolescent Assessments
              </h3>
              <p className="text-xs italic">Supporting Young Minds with Care</p>
              <p className="mt-6">
                Specialized therapy for behavioral issues, developmental
                concerns, intellectual evaluations, and emotional quotient
                assessments.
              </p>
            </div>

            <div className="p-8 rounded flex flex-col items-center text-center text-sm text-slate-500 shadow-card2 transition-all hover:shadow-card duration-500">
              <TbUsersGroup className="text-4xl text-emerald-600 " />
              <h3 className="font-semibold text-slate-800 text-lg mt-4">
                Clinical Consultation & Counseling
              </h3>
              <p className="text-xs italic">
                Personalized Care for Mental Well-being
              </p>
              <p className="mt-6">
                Address interpersonal, marital, and trauma-related concerns
                through professional counseling and interventions.
              </p>
            </div>

            <div className="p-8 rounded flex flex-col items-center text-center text-sm text-slate-500 shadow-card2 transition-all hover:shadow-card duration-500">
              <TbBook className="text-4xl text-emerald-600 " />
              <h3 className="font-semibold text-slate-800 text-lg mt-4">
                Tutorial & Review Classes
              </h3>
              <p className="text-xs italic">Guiding Future Professionals</p>
              <p className="mt-6">
                Prepare for PRC Board Examinations with expert-led tutorials in
                psychology, psychometrics, and education.
              </p>
            </div>

            <div className="p-8 rounded flex flex-col items-center text-center text-sm text-slate-500 shadow-card2 transition-all hover:shadow-card duration-500">
              <TbClipboardList className="text-4xl text-emerald-600 " />
              <h3 className="font-semibold text-slate-800 text-lg mt-4">
                Program Development & Administration
              </h3>
              <p className="text-xs italic">
                For Students, Employees, and Organizations
              </p>
              <p className="mt-6">
                Tailored programs fostering growth through psychological
                insights and strategic development plans.
              </p>
            </div>

            <div className="p-8 rounded flex flex-col items-center text-center text-sm text-slate-500 shadow-card2 transition-all hover:shadow-card duration-500">
              <TbPresentation className="text-4xl text-emerald-600 " />
              <h3 className="font-semibold text-slate-800 text-lg mt-4">
                Trainings & Workshops
              </h3>
              <p className="text-xs italic">
                Building Stronger Teams and Communities
              </p>
              <p className="mt-6">
                Engage in seminars, workshops, and team-building activities
                promoting mental wellness and harmony.
              </p>
            </div>
          </div>
        </div>

        {/* about */}
        <div
          style={{ backgroundImage: `url(${b1})` }}
          className="mt-36 text-white bg-center bg-cover"
        >
          <div className="px-36 p-12 bg-radial-[at_-35%_15%] from-green-500/90 to-emerald-600/90 to-75%">
            <div className="flex justify-center flex-col items-center gap-2">
              <h1 className="text-3xl font-semibold  text-center">About us</h1>

              <div className="flex items-center text-3xl text-white">
                <p>-</p>
                <TbActivityHeartbeat />
                <p>-</p>
              </div>
            </div>

            <div className="flex mt-12">
              <div className="flex-1 grid grid-cols-2 grid-rows-2 aspect-square gap-4 pr-12">
                <div
                  style={{ backgroundImage: `url(${s1})` }}
                  className="bg-center bg-cover grid grid-rows-2 rounded overflow-hidden"
                >
                  <div className="h-full p-4 bg-white/80 text-emerald-800 backdrop-blur-sm text-sm row-start-2">
                    <h3 className="font-semibold">Compassion</h3>
                    <p className="mt-4">
                      Deliver services with utmost care founded on love for
                      humanity.
                    </p>
                  </div>
                </div>

                <div
                  style={{ backgroundImage: `url(${b1})` }}
                  className="bg-center bg-cover grid grid-rows-2 rounded overflow-hidden"
                >
                  <div className="h-full p-4 bg-white/80 text-emerald-800 backdrop-blur-sm text-sm row-start-2">
                    <h3 className="font-semibold">Accessibility</h3>
                    <p className="mt-4">Bring services closer to clients.</p>
                  </div>
                </div>

                <div
                  style={{ backgroundImage: `url(${s2})` }}
                  className="bg-center bg-cover grid grid-rows-2 rounded overflow-hidden"
                >
                  <div className="h-full p-4 bg-white/80 text-emerald-800 backdrop-blur-sm text-sm row-start-2">
                    <h3 className="font-semibold">Responsibility</h3>
                    <p className="mt-4">
                      Respond to clients needs the best possible way without
                      prejudice to race, sex, socio-economic status, or any
                      other factors.
                    </p>
                  </div>
                </div>

                <div
                  style={{ backgroundImage: `url(${s5})` }}
                  className="bg-center bg-cover grid grid-rows-2 rounded overflow-hidden"
                >
                  <div className="h-full p-4 bg-white/80 text-emerald-800 backdrop-blur-sm text-sm row-start-2">
                    <h3 className="font-semibold">Excellence</h3>
                    <p className="mt-4">
                      Deliver services at par professional and ethical standards
                      through licensed and competent human resources.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-8">
                <div>
                  <h3 className="uppercase font-semibold text-lg">History</h3>
                  <p className="text-sm mt-4">
                    The Wundt Psychological Institute (formerly{" "}
                    <span className="italic">Wundt Institute</span>) was
                    conceived through the wishful thinking of its founder and
                    director, Dr. Nhorty U. Domenden. His decades of exposure in
                    the academe and clinical psychology practice opened his eyes
                    to the need for an institution that caters to the various
                    psychological counseling and educational needs of
                    Pangasinenses. With zeal and enthusiasm, guided by his
                    desire to "
                    <span className="italic">create opportunities</span>", he
                    took the risk of establishing the Wundt Psychological
                    Institute. The institute was founded in January 2015 and has
                    since rendered services to various academic, legal,
                    industrial, and clinical institutions, primarily in
                    Pangasinan, before expanding its operations to several
                    provinces in North and Central Luzon.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Core Values</h3>
                  <div className="text-sm grid grid-cols-2 gap-4 mt-4">
                    <div className="outline-2 outline-white/15 rounded p-4 bg-white/10">
                      <h3 className="font-semibold">Compassion</h3>
                      <p className="mt-4">
                        Deliver services with utmost care founded on love for
                        humanity.
                      </p>
                    </div>

                    <div className="outline-2 outline-white/15 rounded p-4 bg-white/10">
                      <h3 className="font-semibold">Accessibility</h3>
                      <p className="mt-4">Bring services closer to clients.</p>
                    </div>

                    <div className="outline-2 outline-white/15 rounded p-4 bg-white/10">
                      <h3 className="font-semibold">Compassion</h3>
                      <p className="mt-4">
                        Respond to clients needs the best possible way without
                        prejudice to race, sex, socio-economic status, or any
                        other factors.
                      </p>
                    </div>

                    <div className="outline-2 outline-white/15 rounded p-4 bg-white/10">
                      <h3 className="font-semibold">Compassion</h3>
                      <p className="mt-4">
                        Deliver services at par professional and ethical
                        standards through licensed and competent human
                        resources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="mt-16 px-36 mb-36">
        <div className="flex justify-center flex-col items-center gap-2">
          <h1 className="text-3xl font-semibold  text-center">Our Gallery</h1>

          <div className="flex items-center text-3xl text-emerald-600">
            <p>-</p>
            <TbActivityHeartbeat />
            <p>-</p>
          </div>
        </div>

        <div className="h-[20rem] outline outline-slate-400 mt-12 rounded flex items-center justify-center">
          PICS HERE
        </div>
      </div>
    </>
  );
}

export default App;
