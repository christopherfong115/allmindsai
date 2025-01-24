import FeedbackCard from "@/components/FeedbackCard";
import Navbar from "@/components/Navbar";
import { IoMdCheckmark } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div className="bg-yellow-400 h-screen w-[115%] absolute pt-20 -rotate-6 -translate-y-20 top-0 -translate-x-60 -z-50" />
      <div className="bg-yellow-400 h-1/2 w-screen absolute pt-20 -translate-y-[6.5rem] -z-50" />
      <Navbar />
      <div className="flex align-middle items-center p-10 pt-32 w-fit mx-auto justify-center">
        <div className="w-1/4">
          <h1 className="font-bold text-4xl pb-10">
            Tired of getting blocked while scraping the web?
          </h1>
          <p>
            The ScrapingBee web scraping API handles headless browsers and
            rotates proxies for you.
          </p>
          <button className="mt-10 bg-black font-bold text-white px-6 py-3 rounded">
            Try ScrapingBee for Free
          </button>
        </div>
        <img src="/hero_illustration.svg" />
      </div>
      <div className="flex items-center w-2/3 gap-20 justify-center mx-auto mt-[20%]">
        <img src="/feature_headless.svg" />
        <div>
          <h1 className="text-5xl mb-10 font-bold">
            Render your web page as if it were a{" "}
            <strong className="underline decoration-yellow-400 font-bold">
              real browser
            </strong>
            .
          </h1>
          <p>
            We manage thousands of headless instances using the latest Chrome
            version. Focus on extracting the data you need, not dealing with
            inefficient headless browsers.
          </p>
          <ul className="flex gap-10 mt-10 mb-10">
            <li className="flex gap-2 items-center">
              <IoMdCheckmark className="text-green-500" /> Latest Chrome version
            </li>
            <li className="flex gap-2 items-center">
              <IoMdCheckmark className="text-green-500" /> Fast, no matter what!
            </li>
          </ul>
          <FeedbackCard
            companyLink="https://seekwell.io"
            companyName="SeekWell"
            name="Mike Ritchie"
            pfp="/mike.png"
            position="CEO"
            text="ScrapingBee simplified our day-to-day marketing and engineering operations a lot . We no longer have to worry about managing our own fleet of headless browsers, and we no longer have to spend days sourcing the right proxy provider"
          />
        </div>
      </div>
      <div className="flex items-center w-2/3 gap-20 justify-center mx-auto mt-[20%]">
        <div>
          <h1 className="text-5xl mb-10 font-bold">
            Render JavaScript to scrape{" "}
            <strong className="underline decoration-yellow-400 font-bold">
              any website
            </strong>
            .
          </h1>
          <p>
            With JavaScript rendering, a simple parameter enables you to scrape
            any web page, even single-page applications using React, AngularJS,
            Vue.js, or any other libraries.
          </p>
          <ul className="flex gap-10 mt-10 mb-10">
            <li className="flex gap-2 items-center">
              <IoMdCheckmark className="text-green-500" /> Custom JavaScript
              snippet
            </li>
            <li className="flex gap-2 items-center">
              <IoMdCheckmark className="text-green-500" /> All JavaScript
              libraries supported
            </li>
          </ul>
          <FeedbackCard
            companyLink="https://hellooutbound.com"
            companyName="HelloOutbound"
            name="Russel Taylor"
            pfp="/russel.jpeg"
            position="CEO"
            text="ScrapingBee is helping us scrape many job boards and company websites without having to deal with proxies or chrome browsers. It drastically simplified our data pipeline"
          />
        </div>
        <img src="/feature_rendering.svg" />
      </div>
    </>
  );
}
