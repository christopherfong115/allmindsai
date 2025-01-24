import FeedbackCard from "@/components/FeedbackCard";
import Navbar from "@/components/Navbar";
import { IoMdCheckmark } from "react-icons/io";

const webHavest = [
  {
    icon: "/icon01.svg",
    title: "1. General Web Scraping",
    text: "ScrapingBee web scraping API works great for general web scraping tasks like real estate scraping, price-monitoring, extracting reviews without getting blocked.",
  },
  {
    icon: "/data.svg",
    title: "2. Data Extraction",
    text: "Getting HTML is cool, getting formatted JSON data is better. Thanks to our easy-to-use extraction rules, get just the data you need with one simple API call.",
  },
  {
    icon: "/js.svg",
    title: "3. JavaScript scenario",
    text: "If you need to click, scroll, wait for some elements to appear or just run some custom JavaScript code on the website you want to scrape, check our JS scenario feature.",
  },
  {
    icon: "/picture-1.svg",
    title: "4. Screenshots",
    text: "Need a screenshot of that website and not HTML? You can do this very easily with our screenshot feature. We also support full page and partial screenshots!",
  },
  {
    icon: "/search.svg",
    title: "5. Search Engine Result Page",
    text: "Scraping search engine result pages is extremely painful because of rate limits. Thanks to our Google search API, it's now easier than ever.",
  },
  {
    icon: "/nocode.svg",
    title: "6. No code web scraping",
    text: "If coding is not your thing, you can leverage our Make integration to create custom web scraping engines without writing a single line of code!",
  },
];

const pricing = [
  ["", "", "", "Recommended", ""],
  ["", "Freelance", "Startup", "Business", "Business +"],
  ["", "$49 /mo", "$99 /mo", "$249 /mo", "$599 /mo"],
  ["Api Credits", "150,000", "1,000,000", "3,000,000", "8,000,000"],
  ["Concurrent requests", "5", "50", "100", "200"],
  ["JavaScript rendering", "y", "y", "y", "y"],
  ["Rotating & Premium Proxies", "y", "y", "y", "y"],
  ["Geotargeting", "y", "y", "y", "y"],
  ["Screenshots, Extraction Rules, Google Search API", "y", "y", "y", "y"],
  ["Priority Email Support", "n", "y", "y", "y"],
  ["Dedicated Account Manager", "n", "n", "y", "y"],
  ["Team Management", "n", "n", "y", "y"],
  ["", "Try Now", "Try Now", "Try Now", "Try Now"],
];

const printVal = (val: string, index: number) => {
  if (val == "Recommended" && index == 3) {
    return <td className="bg-yellow-400 py-4 px-14">{val}</td>;
  }
  if (val == "n") {
    return <td className="py-4 px-14">-</td>;
  }
  if (val == "y" && index != 3) {
    return (
      <td className="py-4 px-14 text-center">
        <IoMdCheckmark className="text-green-500 mx-auto text-3xl" />
      </td>
    );
  }
  if (val == "y" && index == 3) {
    return (
      <td className="bg-black py-4 px-14">
        <IoMdCheckmark className="text-green-500 mx-auto text-3xl" />
      </td>
    );
  }
  if (val == "Try Now" && index == 3) {
    return (
      <td className="py-4 px-14 bg-black -z-50">
        <button className="bg-yellow-400 px-6 py-2">{val}</button>
      </td>
    );
  }
  if (val == "Try Now" && index != 3) {
    return (
      <td className="py-4 px-14 -z-50">
        <button className="border border-black px-6 py-2">{val}</button>
      </td>
    );
  }
  if (index == 3) {
    return <td className="bg-black text-white py-4 px-14">{val}</td>;
  }
  if (index == 0) {
    return <td className="py-4 px-14 text-left">{val}</td>;
  }
  return <td className="py-4 px-14">{val}</td>;
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="bg-yellow-400 h-screen w-[115%] absolute pt-20 -rotate-6 -translate-y-20 top-0 -translate-x-60 -z-50 overflow-hidden" />
      <div className="bg-yellow-400 h-1/2 absolute pt-20 -translate-y-[6.5rem] -z-50 w-screen overflow-hidden" />
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
      <div className="flex items-center w-7/12 gap-20 justify-center mx-auto mt-[20%]">
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
      <div className="flex items-center w-7/12 gap-20 justify-center mx-auto mt-[20%]">
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
      <div className="flex items-center w-7/12 gap-20 justify-center mx-auto mt-[20%]">
        <img src="/feature_proxies.svg" />
        <div>
          <h1 className="text-5xl mb-10 font-bold">
            Rotate proxies to{" "}
            <strong className="underline decoration-yellow-400 font-bold">
              bypass rate limiting
            </strong>
            .
          </h1>
          <p>
            Thanks to our large proxy pool, you can bypass rate limiting while
            scraping web pages, hiding your bots and reducing the chances of
            being blocked.
          </p>
          <ul className="flex gap-10 mt-10 mb-10">
            <li className="flex gap-2 items-center">
              <IoMdCheckmark className="text-green-500" /> Large proxy pool
            </li>
            <li className="flex gap-2 items-center">
              <IoMdCheckmark className="text-green-500" /> IP geolocation
            </li>
            <li className="flex gap-2 items-center">
              <IoMdCheckmark className="text-green-500" /> Automatic proxy
              rotation
            </li>
          </ul>
          <FeedbackCard
            companyLink="https://codesubmit.io"
            companyName="CodeSubmit"
            name="Dominic Phillips"
            pfp="/dominic.jpeg"
            position="Co-Founder"
            text="ScrapingBee clear documentation, easy-to-use API, and great success rate made it a no-brainer."
          />
        </div>
      </div>
      <div className="text-center items-center w-7/12 gap-20 justify-center mx-auto mt-[20%]">
        <h1 className="text-4xl font-bold mb-10">
          Six ways to use ScrapingBee for web harvesting
        </h1>
        <h2 className="text-gray-500 text-2xl">
          Wondering how our customers use our web scraping API?
        </h2>
        <h2 className="text-gray-500 text-2xl">
          From a general web scrape to JavaScript rendering, our simple API does
          it all.
        </h2>
        <ul className="grid grid-cols-3 mt-20 gap-10">
          {webHavest.map((item) => (
            <li key={item.title}>
              <img className="aspect-square w-20 mx-auto" src={item.icon} />
              <h2 className="font-bold text-xl py-5">{item.title}</h2>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative mt-[20%] h-screen overflow-hidden">
        <div className="absolute bg-black w-[200%] h-3/4 rotate-6 -translate-x-32 -z-50" />
        <div className="text-white w-7/12 items-center justify-center mx-auto translate-y-20">
          <div className="rounded-2xl w-fit h-fit p-6">
            <p className="text-4xl">
              "Scrapingbee helps us to retrieve information from sites that use
              very sophisticated mechanism to block unwanted traffic, we were
              struggling with those sites for soem time now and{" "}
              <strong>
                I'm very glad that we found ScrapingBee.<strong>"</strong>
              </strong>
              "
            </p>
            <div className="flex gap-5 items-center mt-5">
              <img
                className="aspect-square rounded-2xl h-20"
                src="/anton.jpeg"
              />
              <div className="text-yellow-400">
                <h2 className="font-bold text-xl">Anton R</h2>
                <div className="flex gap-1">
                  <h3>CTO</h3>
                  <a
                    className="font-bold underline"
                    href={
                      "https://www.capterra.com/p/195060/ScrapingBee/reviews/Capterra___3145309/"
                    }
                  >
                    (see it on Capterra)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center items-center w-7/12 gap-20 justify-center mx-auto mt-[20%] mb-4">
        <h2 className="text-5xl font-bold">Simple, transparent pricing.</h2>
        <h3 className="text-xl mb-20 mt-5">
          Cancel anytime, no questions asked!
        </h3>
        <table className="w-fit mx-auto">
          <tbody>
            {pricing.map((option, j) => {
              return (
                <tr>
                  {option.map((price, i) => {
                    return printVal(price, i);
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
