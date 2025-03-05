import logo from "../assets/wundt_logo.jpg";
import b1 from "../assets/b1.jpg";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";
import s7 from "../assets/s7.jpg";
import s8 from "../assets/s8.jpg";
import s9 from "../assets/s9.jpg";
import s10 from "../assets/s10.jpg";
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
  TbMailFilled,
} from "react-icons/tb";
import { TbActivityHeartbeat, TbMinus } from "react-icons/tb";
import { MdLocationOn, MdOutlineFacebook } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";
import MapComponent from "../components/MapComponent";
import { useNavigate } from "react-router";

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="font-poppins text-slate-800">
      {/* nav */}
      <header className=" bg-white sticky top-0 z-20 shadow-card2 px-6 lg:px-12">
        <div className=" max-w-7xl mx-auto py-4 flex justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10 rounded-full" />
            <h1 className="font-black text-emerald-600 uppercase font-lisu text-lg sm:text-xl">
              Wundt Psychological Institute
            </h1>
          </div>

          <nav className="hidden lg:flex gap-2 text-sm ">
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
        </div>
      </header>

      {/* home */}
      <div
        style={{ backgroundImage: `url(${b1})` }}
        className="h-screen bg-cover bg-center"
      >
        <div className="h-full backdrop-blur-sm bg-gradient-to-r from-white to-white/0 max-sm:to-white/10 px-6 lg:px-12">
          <div className="h-full max-w-7xl mx-auto flex items-center gap-8">
            <div className="max-w-[45rem]">
              <h1 className="font-bold text-2xl sm:text-4xl ">
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

              <button
                onClick={() => navigate("/appointment")}
                className="bg-radial-[at_-50%_-50%] from-green-500 to-emerald-600 to-75% text-sm text-white px-8 py-4 font-semibold rounded mt-8 "
              >
                Get Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* card */}
      {/* <div className="px-6 lg:px-12 -mt-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
        </div> */}

      {/* why choose us */}
      <div className="mt-40 px-6 lg:px-12">
        <div className="  max-w-7xl mx-auto ">
          <div className="flex justify-center flex-col items-center gap-2">
            <h1 className="text-3xl font-semibold  text-center">
              Why Choose Wundt Psychological Institute?
            </h1>

            <div className="flex items-center text-3xl text-emerald-600">
              <TbMinus />
              <TbActivityHeartbeat />
              <TbMinus />
            </div>
          </div>

          <div className="flex max-sm:flex-col-reverse mt-12 gap-6 xs:gap-8">
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
      </div>

      {/* services */}
      <div className="px-6 lg:px-12">
        <div className="mt-40  max-w-7xl mx-auto">
          <div className="flex justify-center flex-col items-center gap-2">
            <h1 className="text-3xl font-semibold  text-center">
              Comprehensive Services We Offer
            </h1>

            <div className="flex items-center text-3xl text-emerald-600">
              <TbMinus />
              <TbActivityHeartbeat />
              <TbMinus />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
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
      </div>

      {/* about */}
      <div
        style={{ backgroundImage: `url(${b1})` }}
        className="mt-40 text-white bg-center bg-cover"
      >
        <div className="p-6 lg:p-12 bg-radial-[at_-35%_15%] from-green-500/90 to-emerald-600/90 to-75%">
          <div className=" max-w-7xl mx-auto">
            <div className="flex justify-center flex-col items-center gap-2 ">
              <h1 className="text-3xl font-semibold  text-center">About us</h1>

              <div className="flex items-center text-3xl text-white">
                <TbMinus />
                <TbActivityHeartbeat />
                <TbMinus />
              </div>
            </div>

            <div className="flex max-lg:flex-col mt-12 gap-12 lg:gap-8">
              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 flex-1">
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
                <div className="flex-1">
                  <h3 className="uppercase font-semibold text-lg">History</h3>
                  <p className="text-sm mt-4">
                    The Wundt Psychological Institute (formerly{" "}
                    <span className="italic">Wundt Institute</span>) was
                    conceived through the wishful thinking of its founder and
                    director, Dr. Nhorly U. Domenden. His decades of exposure in
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

                <div className="text-sm grid grid-cols-2 gap-4 mt-4">
                  <div className="outline-2 outline-white/15 rounded p-4 bg-white/10">
                    <h3 className="font-semibold uppercase">Mission</h3>
                    <p className="mt-4">
                      Deliver quality, accessible, and affordable psychological,
                      counseling and educational services that suit the needs of
                      its clientele.
                    </p>
                  </div>

                  <div className="outline-2 outline-white/15 rounded p-4 bg-white/10">
                    <h3 className="font-semibold uppercase">Vision</h3>
                    <p className="mt-4">
                      Be the leading provider-of-choice if psychological,
                      counseling and educational services in North and Central
                      Luzon and be recognized nationally.
                    </p>
                  </div>

                  <div className="outline-2 outline-white/15 rounded p-4 bg-white/10 col-span-2">
                    <h3 className="font-semibold uppercase">Objectives</h3>
                    <ol className="list-disc mt-4 pl-4">
                      <li>
                        Promote ethical and high standards practice of
                        psychological, counseling and educational services.
                      </li>
                      <li>
                        Provide affordable services without sacrificing its
                        quality.
                      </li>
                      <li>
                        Extend free services to less fortunate individuals.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* gallery */}
      <div className="px-6 lg:px-12">
        <div className="mt-40  max-w-7xl mx-auto">
          <div className="flex justify-center flex-col items-center gap-2">
            <h1 className="text-3xl font-semibold  text-center">Our Gallery</h1>

            <div className="flex items-center text-3xl text-emerald-600">
              <TbMinus />
              <TbActivityHeartbeat />
              <TbMinus />
            </div>
          </div>

          <div className="mt-12 rounded grid grid-cols-5 gap-2">
            <div className="overflow-hidden rounded">
              <img
                src={s10}
                alt=""
                className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="col-span-2 overflow-hidden rounded">
              <img
                src={s9}
                alt=""
                className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="overflow-hidden rounded">
              <img
                src={s8}
                alt=""
                className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="overflow-hidden rounded">
              <img
                src={s7}
                alt=""
                className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="overflow-hidden rounded">
              <img
                src={s6}
                alt=""
                className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="overflow-hidden rounded">
              <img
                src={s5}
                alt=""
                className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="col-span-2 overflow-hidden rounded">
              <img
                src={s4}
                alt=""
                className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="overflow-hidden rounded">
              <img
                src={s3}
                alt=""
                className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button className="outline outline-emerald-600 px-6 py-2 text-sm rounded shadow-card2 text-emerald-600">
              Show more
            </button>
          </div>
        </div>
      </div>

      {/* news */}
      <div
        style={{ backgroundImage: `url(${b1})` }}
        className="mt-40  bg-center bg-cover"
      >
        <div className="px-6 pb-6 lg:px-12 lg:pb-12 bg-gradient-to-b from-white from-5% to-emerald-600/60 backdrop-blur-sm">
          <div className=" max-w-7xl mx-auto">
            <div className="flex justify-center flex-col items-center gap-2">
              <h1 className="text-3xl font-semibold  text-center">
                Latest News & Updates
              </h1>

              <div className="flex items-center text-3xl text-emerald-600">
                <TbMinus />
                <TbActivityHeartbeat />
                <TbMinus />
              </div>
            </div>

            <div className="mt-12 flex gap-2 snap-x snap-mandatory overflow-x-auto pt-2 scroll-smooth scrollbar scrollbar-thumb-white scrollbar-track-white/30 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-6">
              <div className="rounded overflow-hidden aspect-square relative group transition-all hover:-translate-y-1 duration-500 w-[20rem] shrink-0 snap-center">
                <img
                  src={s9}
                  alt=""
                  className="object-center object-cover h-full w-full"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2  gap-2 bg-gradient-to-b from-black/10 to-black/80 group-hover:to-black/90 transition-all duration-500">
                  <p className="text-sm text-white font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, sit. Lorem, ipsum dolor.
                  </p>
                  <p className="text-white/80 text-sm line-clamp-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facilis rem eos ratione explicabo earum dignissimos laborum
                    laudantium dolorum assumenda animi.
                  </p>
                  <button className="text-center py-2 text-sm font-semibold bg-emerald-600 text-white rounded">
                    Read more
                  </button>
                </div>
              </div>

              <div className="rounded overflow-hidden aspect-square relative group transition-all hover:-translate-y-1 duration-500 w-[20rem] shrink-0 snap-center">
                <img
                  src={s7}
                  alt=""
                  className="object-center object-cover h-full w-full"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2  gap-2 bg-gradient-to-b from-black/10 to-black/80 group-hover:to-black/90 transition-all duration-500">
                  <p className="text-sm text-white font-semibold">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <p className="text-white/80 text-sm line-clamp-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facilis rem eos ratione explicabo earum dignissimos laborum
                    laudantium dolorum assumenda animi.
                  </p>
                  <button className="text-center py-2 text-sm font-semibold bg-emerald-600 text-white rounded">
                    Read more
                  </button>
                </div>
              </div>

              <div className="rounded overflow-hidden aspect-square relative group transition-all hover:-translate-y-1 duration-500 w-[20rem] shrink-0 snap-center">
                <img
                  src={s2}
                  alt=""
                  className="object-center object-cover h-full w-full"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2  gap-2 bg-gradient-to-b from-black/10 to-black/80 group-hover:to-black/90 transition-all duration-500">
                  <p className="text-sm text-white font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe.
                  </p>
                  <p className="text-white/80 text-sm line-clamp-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facilis rem eos ratione explicabo earum dignissimos laborum
                    laudantium dolorum assumenda animi.
                  </p>
                  <button className="text-center py-2 text-sm font-semibold bg-emerald-600 text-white rounded">
                    Read more
                  </button>
                </div>
              </div>

              <div className="rounded overflow-hidden aspect-square relative group transition-all hover:-translate-y-1 duration-500 w-[20rem] shrink-0 snap-center">
                <img
                  src={s3}
                  alt=""
                  className="object-center object-cover h-full w-full"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2  gap-2 bg-gradient-to-b from-black/10 to-black/80 group-hover:to-black/90 transition-all duration-500">
                  <p className="text-sm text-white font-semibold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat ducimus voluptates id.
                  </p>
                  <p className="text-white/80 text-sm line-clamp-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facilis rem eos ratione explicabo earum dignissimos laborum
                    laudantium dolorum assumenda animi.
                  </p>
                  <button className="text-center py-2 text-sm font-semibold bg-emerald-600 text-white rounded">
                    Read more
                  </button>
                </div>
              </div>

              <div className="rounded overflow-hidden aspect-square relative group transition-all hover:-translate-y-1 duration-500 w-[20rem] shrink-0 snap-center">
                <img
                  src={s9}
                  alt=""
                  className="object-center object-cover h-full w-full"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2  gap-2 bg-gradient-to-b from-black/10 to-black/80 group-hover:to-black/90 transition-all duration-500">
                  <p className="text-sm text-white font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, sit. Lorem, ipsum dolor.
                  </p>
                  <p className="text-white/80 text-sm line-clamp-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facilis rem eos ratione explicabo earum dignissimos laborum
                    laudantium dolorum assumenda animi.
                  </p>
                  <button className="text-center py-2 text-sm font-semibold bg-emerald-600 text-white rounded">
                    Read more
                  </button>
                </div>
              </div>

              <div className="rounded overflow-hidden aspect-square relative group transition-all hover:-translate-y-1 duration-500 w-[20rem] shrink-0 snap-center">
                <img
                  src={s7}
                  alt=""
                  className="object-center object-cover h-full w-full"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2  gap-2 bg-gradient-to-b from-black/10 to-black/80 group-hover:to-black/90 transition-all duration-500">
                  <p className="text-sm text-white font-semibold">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <p className="text-white/80 text-sm line-clamp-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facilis rem eos ratione explicabo earum dignissimos laborum
                    laudantium dolorum assumenda animi.
                  </p>
                  <button className="text-center py-2 text-sm font-semibold bg-emerald-600 text-white rounded">
                    Read more
                  </button>
                </div>
              </div>

              <div className="rounded overflow-hidden aspect-square relative group transition-all hover:-translate-y-1 duration-500 w-[20rem] shrink-0 snap-center">
                <img
                  src={s2}
                  alt=""
                  className="object-center object-cover h-full w-full"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2  gap-2 bg-gradient-to-b from-black/10 to-black/80 group-hover:to-black/90 transition-all duration-500">
                  <p className="text-sm text-white font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe.
                  </p>
                  <p className="text-white/80 text-sm line-clamp-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facilis rem eos ratione explicabo earum dignissimos laborum
                    laudantium dolorum assumenda animi.
                  </p>
                  <button className="text-center py-2 text-sm font-semibold bg-emerald-600 text-white rounded">
                    Read more
                  </button>
                </div>
              </div>

              <div className="rounded overflow-hidden aspect-square relative group transition-all hover:-translate-y-1 duration-500 w-[20rem] shrink-0 snap-center">
                <img
                  src={s3}
                  alt=""
                  className="object-center object-cover h-full w-full"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2  gap-2 bg-gradient-to-b from-black/10 to-black/80 group-hover:to-black/90 transition-all duration-500">
                  <p className="text-sm text-white font-semibold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat ducimus voluptates id.
                  </p>
                  <p className="text-white/80 text-sm line-clamp-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facilis rem eos ratione explicabo earum dignissimos laborum
                    laudantium dolorum assumenda animi.
                  </p>
                  <button className="text-center py-2 text-sm font-semibold bg-emerald-600 text-white rounded">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact */}
      <div className="px-6 lg:px-12">
        <div className="mt-40 mb-12  max-w-7xl mx-auto">
          <div className="flex justify-center flex-col items-center gap-2">
            <h1 className="text-3xl font-semibold  text-center">
              Reach Out to Us
            </h1>

            <div className="flex items-center text-3xl text-emerald-600">
              <TbMinus />
              <TbActivityHeartbeat />
              <TbMinus />
            </div>
          </div>
          <div className="mt-12 flex max-lg:flex-col-reverse gap-4">
            <div className="flex flex-col gap-2  flex-1">
              <div className="outline outline-slate-300 p-4 rounded">
                <h3 className="font-semibold text-sm">Dagupan City</h3>
                <div className="mt-2 text-slate-500 flex flex-col gap-1">
                  <div className="flex items-center gap-4 text-sm ">
                    <span className="text-emerald-600 text-base">
                      <BiSolidPhone />
                    </span>
                    0939-902-6188
                  </div>
                  <div className="flex items-center gap-4 text-sm truncate">
                    <span className="text-emerald-600 text-base">
                      <MdOutlineFacebook />
                    </span>
                    https://www.facebook.com/wundtpsychologicalinstitute
                  </div>
                  <div className="flex items-center gap-4 text-sm truncate">
                    <span className="text-emerald-600 text-base">
                      <TbMailFilled />
                    </span>
                    wundt_inst@yahoo.com.ph
                  </div>
                  <div className="flex items-start gap-4 text-sm">
                    <span className="text-emerald-600 text-base">
                      <MdLocationOn />
                    </span>
                    2/F ENCARNACION BLDG., RIOFERIO RD., COR. ARELLANO ST.,
                    DAGUPAN CITY
                  </div>
                </div>
              </div>

              <div className="outline outline-slate-300 p-4 rounded">
                <h3 className="font-semibold text-sm">Vigan City</h3>
                <div className="mt-2 text-slate-500 flex flex-col gap-1">
                  <div className="flex items-center gap-4 text-sm ">
                    <span className="text-emerald-600 text-base">
                      <BiSolidPhone />
                    </span>
                    0955-896-7345
                  </div>
                  <div className="flex items-center gap-4 text-sm truncate">
                    <span className="text-emerald-600 text-base">
                      <MdOutlineFacebook />
                    </span>
                    https://www.facebook.com/wundtvigan
                  </div>
                  <div className="flex items-center gap-4 text-sm truncate">
                    <span className="text-emerald-600 text-base">
                      <TbMailFilled />
                    </span>
                    wundt_inst@yahoo.com.ph
                  </div>
                  <div className="flex items-start gap-4 text-sm ">
                    <span className="text-emerald-600 text-base">
                      <MdLocationOn />
                    </span>
                    2/F EL SENOR JESUS APT., QUIRINO AVE., TAMAG VIGAN CITY,
                    ILOCOS SUR
                  </div>
                </div>
              </div>

              <div className="outline outline-slate-300 p-4 rounded">
                <h3 className="font-semibold text-sm">Urdaneta City</h3>
                <div className="mt-2 text-slate-500 flex flex-col gap-1">
                  <div className="flex items-center gap-4 text-sm ">
                    <span className="text-emerald-600 text-base">
                      <BiSolidPhone />
                    </span>
                    0969-265-3903
                  </div>
                  <div className="flex items-center gap-4 text-sm truncate">
                    <span className="text-emerald-600 text-base">
                      <MdOutlineFacebook />
                    </span>
                    https://www.facebook.com/wundturdaneta
                  </div>
                  <div className="flex items-center gap-4 text-sm truncate">
                    <span className="text-emerald-600 text-base">
                      <TbMailFilled />
                    </span>
                    wundt_inst@yahoo.com.ph
                  </div>
                  <div className="flex items-start gap-4 text-sm ">
                    <span className="text-emerald-600 text-base">
                      <MdLocationOn />
                    </span>
                    3/F GR8 CORPORATE CENTRE BYPASS RD., ANONAS URDANETA CITY,
                    PANGASINAN
                  </div>
                </div>
              </div>

              <div className="outline outline-slate-300 p-4 rounded">
                <h3 className="font-semibold text-sm">Mangaldan</h3>
                <div className="mt-2 text-slate-500 flex flex-col gap-1">
                  <div className="flex items-center gap-4 text-sm ">
                    <span className="text-emerald-600 text-base">
                      <BiSolidPhone />
                    </span>
                    0939-902-6188
                  </div>
                  <div className="flex items-center gap-4 text-sm truncate">
                    <span className="text-emerald-600 text-base">
                      <MdOutlineFacebook />
                    </span>
                    https://www.facebook.com/wundtpsychologicalinstitute
                  </div>
                  <div className="flex items-center gap-4 text-sm truncate">
                    <span className="text-emerald-600 text-base">
                      <TbMailFilled />
                    </span>
                    wundt_inst@yahoo.com.ph
                  </div>
                  <div className="flex items-start gap-4 text-sm ">
                    <span className="text-emerald-600 text-base">
                      <MdLocationOn />
                    </span>
                    F&M BLDG. NATIONAL HI-WAY BARI MANGALDAN, PANGASINAN
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 max-lg:aspect-video outline outline-slate-300 rounded overflow-hidden">
              <MapComponent />
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className=" bg-radial-[at_-35%_15%] hover:bg-radial-[at_-20%_15%] from-green-500 to-emerald-600 to-75% px-6 lg:px-12">
        <div className="flex max-md:flex-col items-center text-center gap-4 justify-between text-sm text-white max-w-7xl mx-auto py-4">
          <p>© Wundt Psychological Institute. All Rights Reserved. 2025</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
