import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
    return (
        <main className="min-h-svh items-center justify-center bg-gradient-to-b from-[#f4e1ef] to-[#f6f3f4] p-5 text-green-800">
            <div className="flex w-full flex-row justify-center">
                {/* Left side: Image and links */}
                <div className="item-center mx-3 flex w-1/4 flex-col">
                    {/* Image */}
                    <div className="p-1" style={{ maxHeight: "75vh" }}>
                        <Image
                            src="/me.jpg" // Replace with your image URL
                            alt="Sample"
                            className="h-full w-full rounded-lg" // Ensure the image takes full width
                        />
                    </div>

                    {/* directly below the image */}
                    <div className="flex flex-col p-1">
                        <div>
                            Yicong <span className="text-red-400">(Eddy)</span> Luo
                        </div>
                        <br />
                        yluo460 at gatech dot edu
                        <br />
                        +1 404-432-8754
                        <br />
                        <div>
                            Follow on{" "}
                            <Link
                                href="https://www.linkedin.com/in/eddyluo1"
                                className="text-blue-600 underline"
                            >
                                LinkedIn,
                            </Link>{" "}
                            <Link
                                href="https://github.com/Ratbuyer"
                                className="text-blue-600 underline"
                            >
                                GitHub
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Center */}
                <div className="mx-3 w-1/3 p-4">
                    <h1 className="mb-3 text-center text-xl text-green-600">About</h1>
                    I am a first year PhD student in the School of computational science
                    and engineering at Georgia Institute of Technology advised by Helen
                    Xu. I completed my undergraduate degree in the Computer Science
                    Specialist program at the University of Toronto in June 2024.
                    <br />
                    <br />I am interested in High Performance Computing. During my
                    undergraduate study I worked in Dr. Maryam Dehnavi&apos;s lab on the
                    topic of Sparse Matrix Multiplication on Nvidia&apos;s GPU. I am
                    currently working on Paralle data structure and algorithm.
                </div>

                {/* Right side */}
                <div className="mx-3 flex w-1/3 flex-col p-4">
                    <h1 className="mb-3 text-center text-xl text-green-600">
                        Publications
                    </h1>
                    <ul className="space-y-2">
                        <li>Nothing yet LOL</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
