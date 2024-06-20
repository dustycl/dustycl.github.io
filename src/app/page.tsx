import Image from "next/image"

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid"
import todoolyThumbnail from "/public/images/todooly-react-screenshot.png"
import markdownThumbnail from "/public/images/markdown-previewer-screenshot.png"
import quoteThumbnail from "/public/images/quote-generator-screenshot.png"
import Link from "next/link"

export default function Page() {
  return (
    <div className="w-4/5 mx-auto h-screen">
      <div className="text-xl font-medium mt-4">Dustin Lamperts</div>

      <header className="my-36">
        <div className="w-1/2 py-4">
          <h1 className="text-6xl font-bold mb-8">Front End Developer and UX Designer</h1>
          <p className="text-2xl leading-normal">Hi! I recently graduated from UCSD in Design and Interaction. I love designing and coding digital products</p>
        </div>
      </header>

      <main className="mb-16">
        <section className="">
          <h1 className="text-2xl font-bold mb-12">Projects</h1>
          <div className="grid grid-cols-3 gap-8">
            
              <div className="border-0 shadow-md rounded-lg">
                <Image
                 src={todoolyThumbnail}
                 alt="..."
                />
                <div className="p-4">
                  <div className="text-lg font-semibold">Todooly App</div>
                  <div className="mb-4">
                    <span className="text-xs font-medium text-slate-700 bg-slate-200 rounded-full py-0.5 px-1.5 mr-1">React</span>
                    <span className="text-xs font-medium text-slate-700 bg-slate-200 rounded-full py-0.5 px-1.5 mr-1">HTML</span>
                    <span className="text-xs font-medium text-slate-700 bg-slate-200 rounded-full py-0.5 px-1.5">CSS</span>
                  </div>
                  <p className="card-text"></p>
                  <Link
                   href="https://dustycl.github.io/todooly-react"
                   className="text-blue-600 visited:text-purple-600 align-middle"
                  >
                    <span className="mr-1">View project</span>
                    <ArrowTopRightOnSquareIcon className="size-5 inline pb-0.5" />
                  </Link>
                </div>
              </div>

            
              <div className="border-0 shadow-md rounded-lg">
                <Image
                 src={markdownThumbnail}
                 alt="..."
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold">Markdown Previewer</h5>
                  <div className="mb-4">
                    <span className="text-xs font-medium text-slate-600 bg-slate-200 rounded-full py-0.5 px-1.5 mr-1">Javascript</span>
                    <span className="text-xs font-medium text-slate-600 bg-slate-200 rounded-full py-0.5 px-1.5 mr-1">HTML</span>
                    <span className="text-xs font-medium text-slate-600 bg-slate-200 rounded-full py-0.5 px-1.5 mr-1">CSS</span>
                  </div>
                  <p className="card-text"></p>
                  <Link
                   href="https://codepen.io/dustycl/pen/MWmarbd"
                   className="text-blue-600 visited:text-purple-600 align-middle"
                  >
                    <span className="mr-1">View project</span>
                    <ArrowTopRightOnSquareIcon className="size-5 inline pb-0.5" />
                  </Link>
                </div>
              </div>
            

              <div className="border-0 shadow-md rounded-lg">
                <Image
                 src={quoteThumbnail}
                 className="relative"
                 alt="..."
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold">Quote Generator</h5>
                  <div className="mb-4">
                    <span className="text-xs font-medium text-slate-600 bg-slate-200 rounded-full py-0.5 px-1.5 mr-1">Javascript</span>
                    <span className="text-xs font-medium text-slate-600 bg-slate-200 rounded-full py-0.5 px-1.5 mr-1">HTML</span>
                    <span className="text-xs font-medium text-slate-600 bg-slate-200 rounded-full py-0.5 px-1.5 mr-1">CSS</span>
                  </div>
                  <p className="card-text"></p>
                  <Link
                   href="https://codepen.io/dustycl/full/oNWgRNP"
                   className="text-blue-600 visited:text-purple-600 align-middle"
                  >
                    <span className="mr-1">View project</span>
                    <ArrowTopRightOnSquareIcon className="size-5 inline pb-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          
        </section>
      </main>
    </div>
  )
}