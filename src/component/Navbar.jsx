import { FaChevronRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";

const navbar = () => {
  const [Open, setOpen] = useState(false);

  return (
    <div className="">
      <div className="flex justify-between align-middle items-center p-3 ">
        <div className="flex  md:order-2   md:hidden -translate-x-3   ">
          <div
            onClick={() => setOpen(!Open)}
            className="  text-xl   reletive pl-3 flex  "
          >
            <ion-icon name={Open ? "close" : "menu"}></ion-icon>
          </div>
          <div
            className={` border-solid list absolute top-7  bg-slate-300 h-screen w-screen text-left z-50 space-y-4 ${
              Open ? "block" : "hidden"
            }`}
          >
            <div className="fitems border-b-2 pt-5 "> Microsoft 365</div>
            <div className="fitems border-b-2"> Teams </div>
            <div className="fitems border-b-2"> Copilot</div>
            <div className="fitems border-b-2"> Windows</div>
            <div className="fitems border-b-2"> Surface</div>
            <div className="fitems border-b-2 "> Xbox</div>
            <div className="fitems  border-b-2"> Support</div>
          </div>
          <div className=" mx-4 ">
            <FaSearch />
          </div>
        </div>

        <div className=" md:order-1 flex  ">
          <img className="h-7 " src="/images/logo.png " alt="" />
          <div className="feature    md:flex ml-2 space-x-3 hidden md:mx-5">
            <div className="fitems "> Microsoft 365</div>
            <div className="fitems "> Teams </div>
            <div className="fitems "> Copilot</div>
            <div className="fitems"> Windows</div>
            <div className="fitems"> Surface</div>
            <div className="fitems "> Xbox</div>
            <div className="fitems "> Support</div>
          </div>
        </div>
        <div className=" flex  space-x-4  text-xl md:order-3">
          <div className="hidden md:block ">
            <FaSearch />
          </div>

          <FaCartShopping />
          <MdAccountCircle />
        </div>
      </div>

      <main className="slider flex   flex-col-reverse lg:flex-row  ">
        <div className="  lg:flex-row lg:align-middle lg:text-justify    lg:bg-sky-200 text-center lg:p-14 xl:py-24 lg:w-2/5 py-7  ">
          <p className="text-2xl ">Maximise the everyday with Microsoft 365</p>
          <p>
            Get online protection, secure cloud storage and innovative apps
            designed to fit your needs-all in one plan
          </p>
          <div className="xl:flex m-4 space-x-3 lg:flex-auto items-center lg:text-center space-y-4 inline-table ">
            <button className=" text-white bg-sky-600  rounded w-32 h-12 font-medium">
              For one person
            </button>
            <div className=" flex  -translate-y-2   hover:underline  relative cursor-pointer  hover:translate-x-1  -z-50">
              <div className=" hover:-translate-x-1 absolute">
                For up to six people
              </div>
              <div className=" lg:translate-y-1   translate-y-1">
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className=" md:w-full  " src="/images/1st.webp" alt="" />
        </div>
      </main>
      <div className=" justify-between icons md:flex  grid grid-cols-2 text-center  mt-10 ">
        <div>
          <img
            className=" translate-x-16 size-12"
            src="/images/logo.2.svg"
            alt=""
          />{" "}
          <span className="  font-medium text-cyan-700 underline">
            Choose your Microsoft 365
          </span>
        </div>
        <div className=" ">
          <img
            className=" size-12 translate-x-20"
            src="/images/logo.3.svg"
            alt=""
          />
          <span className="font-medium text-cyan-700 underline">
            Shop Xbox games and console
          </span>
        </div>
        <div>
          <img
            className="translate-x-16 size-12"
            src="/images/logo.3.svg"
            alt=""
          />
          <span className="font-medium text-cyan-700 underline">
            Get Windows 11
          </span>
        </div>
        <div>
          <img
            className="translate-x-20 size-12"
            src="/images/logo.4.svg"
            alt=""
          />
          <span className="font-medium text-cyan-700 underline">
            Explore Surface devices
          </span>
        </div>
      </div>

      <div className="lap grid md:grid-cols-4  grid-cols-2 ustify-between  text-left  space-x-2 my-16   md:mx-20 ">
        <div className=" overflow-ellipsis ">
          <img className="  w-64" src="/images/laptop1.jpg" alt="" />
          <h1 className=" text-2xl font-medium pt-3">Surface Laptop 5</h1>
          <h2 className=" py-5 ">
            Sophisticated style and multitasking <br />
            speed powered by 12th Gen Intel® <br />
            Core, with Windows 11.
          </h2>
          <h3 className=" cursor-pointer flex text-cyan-700 font-medium hover:underline hover:translate-x-1">
            <span className=" hover:-translate-x-1 mb-8">Learn more</span>
            <span className=" translate-y-1">
              <FaChevronRight />
            </span>
          </h3>
        </div>
        <div>
          <img className=" w-64" src="/images/laptop2.jpg" alt="" />
          <h1 className=" pt-3 text-2xl font-medium">Xbox Series X </h1>
          <p className=" py-5"> The fastest, most powerful Xbox ever. </p>
          <h3 className=" cursor-pointer flex text-cyan-700 font-medium hover:underline hover:translate-x-1">
            <span className=" hover:-translate-x-1">Shop Xbox Series X</span>
            <span className=" translate-y-1">
              <FaChevronRight />
            </span>
          </h3>
        </div>
        <div>
          <img className="  w-64" src="/images/lap3.webp" alt="" />
          <h1 className=" pt-3 text-2xl font-medium">Xbox Series S</h1>

          <p className="py-5">
            Next-gen performance in the smallest Xbox ever. The fastest, most
            powerful Xbox ever.
          </p>
          <h3 className=" cursor-pointer flex text-cyan-700 font-medium hover:underline hover:translate-x-1">
            <span className=" hover:-translate-x-1">Shop Xbox Series S</span>
            <span className=" translate-y-1">
              <FaChevronRight />
            </span>
          </h3>
        </div>
        <div>
          <img className="  w-64" src="/images/lap4.webp" alt="" />
          <h1 className=" pt-3 text-2xl font-medium">Surface Laptop Studio</h1>
          <p className="py-5">
            Flex your creative muscle on the most powerful Surface Laptop. Now
            available with Windows 11.
          </p>
          <h3 className=" cursor-pointer flex text-cyan-700 font-medium hover:underline hover:translate-x-1">
            <span className=" hover:-translate-x-1">Learn more</span>
            <span className=" translate-y-1">
              <FaChevronRight />
            </span>
          </h3>
        </div>
      </div>

      <div className="   lg:w-full lg:flex lg:flex-row-reverse ">
        <div className="">
          <img className="  w-screen " src="/images/new.jpg" alt="" />
        </div>
        <div className="  lg:px-14  lg:py-20 text-left   lg:bg-black lg:text-white ">
          <h1 className=" text-2xl font-medium pt-4">
            Xbox Game Pass Ultimate
          </h1>
          <p className=" py-4">
            Play new games on day one. Plus, enjoy hundreds of high-quality
            games with friends on console and PC.
          </p>
          <button className=" p-2 text-white font-medium bg-sky-700 rounded">
            Join now
          </button>
        </div>
      </div>

      <h1 className=" text-left mx-4 font-medium text-3xl pt-14 ">
        For Business
      </h1>

      <div className="lap grid md:mx-16 lg:grid-cols-4 grid-cols-2 justify-between  text-left  space-x-2 my-16  ">
        <div className=" overflow-ellipsis ">
          <img className="  w-64" src="/images/lap3.webp" alt="" />
          <h1 className=" text-2xl font-medium pt-3">Surface For Business</h1>
          <h2 className=" py-5 ">
            No matter what you do, there’s a Surface to help you do it.
          </h2>
          <h3 className=" cursor-pointer flex text-cyan-700 font-medium hover:underline hover:translate-x-1">
            <span className=" hover:-translate-x-1">Shop now</span>
            <span className=" translate-y-1">
              <FaChevronRight />
            </span>
          </h3>
        </div>
        <div>
          <img className=" w-64" src="/images/bussinwss2.webp" alt="" />
          <h1 className=" pt-3 text-2xl font-medium">
            Try Microsoft 365 For Free{" "}
          </h1>
          <p className=" py-5">
            Get Microsoft Teams, secure cloud storage and premium apps across
            devices with a free one-month Microsoft 365 Business Standard trial.{" "}
          </p>
          <h3 className=" cursor-pointer flex text-cyan-700 font-medium hover:underline hover:translate-x-1">
            <span className=" hover:-translate-x-1 mb-6">
              Start your free trail
            </span>
            <span className=" translate-y-1">
              <FaChevronRight />
            </span>
          </h3>
        </div>
        <div>
          <img className="  w-64" src="/images/lap3.webp" alt="" />
          <h1 className=" pt-3 text-2xl font-medium">Join The Era Of AI</h1>

          <p className="py-5">
            Create, communicate, and code with the latest Microsoft AI
            solutions.
          </p>
          <h3 className=" cursor-pointer flex text-cyan-700 font-medium hover:underline hover:translate-x-1">
            <span className=" hover:-translate-x-1"> Explore AI solutions</span>
            <span className=" translate-y-1">
              <FaChevronRight />
            </span>
          </h3>
        </div>
        <div>
          <img className="  w-64" src="/images/bussiness4.webp" alt="" />
          <h1 className=" pt-3 text-2xl font-medium">
            Get Microsoft Teams For Free
          </h1>
          <p className="py-5">
            Online meetings, chat and shared cloud storage – all in one place.
            Create, communicate, and code with the latest Microsoft AI
            solutions.
          </p>
          <h3 className=" cursor-pointer flex text-cyan-700 font-medium hover:underline hover:translate-x-1">
            <span className=" hover:-translate-x-1">Sign up for free</span>
            <span className=" translate-y-1">
              <FaChevronRight />
            </span>
          </h3>
        </div>
      </div>

      <footer className=" bg-slate-200 ">
        <div className="py-8  lg:grid-cols-6 grid grid-cols-3 text-left row gap-5  mx-5 ">
          <ul className=" font-extralight space-y-1 ">
            <li className=" font-medium   "> What's new</li>
            <li className=" ">Microsoft 365</li>
            <li>Games</li>
            <li>Surface Pro 9</li>
            <li>Surface Laptop 5</li>
            <li>Surface Laptop Go 2</li>
            <li>Windows 11 </li>
          </ul>
          <ul className=" font-extralight space-y-1">
            <li className=" font-medium">Microsoft Store</li>
            <li>Account Profile</li>
            <li>Microsoft Store Support</li>
            <li>Return</li>
            <li>Order Tracking</li>
          </ul>
          <ul className=" font-extralight space-y-1">
            <li className=" font-medium">Education</li>
            <li>Microsoft in Education</li>
            <li>Devices For Education</li>
            <li>Microsoft Team For Education</li>
            <li>Microsoft 365 Education</li>
          </ul>
          <ul className=" font-extralight space-y-1">
            <li className=" font-medium">Education</li>
            <li>Microsoft in Education</li>
            <li>Devices For Education</li>
            <li>Microsoft Team For Education</li>
            <li>Microsoft 365 Education</li>
          </ul>
          <ul className=" font-extralight space-y-1">
            <li className=" font-medium">Education</li>
            <li>Microsoft in Education</li>
            <li>Devices For Education</li>
            <li>Microsoft Team For Education</li>
            <li>Microsoft 365 Education</li>
          </ul>
          <ul className=" font-extralight space-y-1">
            <li className=" font-medium">Microsoft Store</li>
            <li>Account Profile</li>
            <li>Microsoft Store Support</li>
            <li>Return</li>
            <li>Order Tracking</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
export default navbar;
