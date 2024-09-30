import Link from "next/link";

export default function HomePage() {
  return (
    <main className="items-center justify-center bg-gradient-to-b from-[#f6f3f4] to-[#f4e1ef] text-black">
      <div className="flex w-full flex-row justify-center">
        {/* Left side: Image and green section */}
        <div className="item-center mx-3 flex w-1/4 flex-col bg-red-300">
          {/* Image */}
          <div className="p-1" style={{ maxHeight: "75vh" }}>
            <img
              src="/me.jpg" // Replace with your image URL
              alt="Sample"
              className="h-full w-full rounded-lg" // Ensure the image takes full width
            />
          </div>

          {/* Green section with words, directly below the image */}
          <div className="flex flex-col bg-green-600 p-1">
            <ul className="space-y-1">
              <li>yluo460 [at] gatech [dot] edu</li>

              <li>+1 404-432-8754</li>

              <li>
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
              </li>
            </ul>
          </div>
        </div>

        {/* Right side: List of words */}
        <div className="mx-3 w-1/3 bg-blue-600 p-4">
            My name is Yicong (Eddy) Luo.
            I am a first year PhD student in 
            the School of computational science
            and engineering at Georgia Tech under Helen Xu.

            I completed my undergraduate degree in 
            the Computer Science Specialist program at 
            the University of Toronto in Canada in June 2024.

            <br/>
            <br/>

            I am interested in High Performance Computing. During my undergraduate
            study I worked in Dr. Maryam Dehnavi's lab on the topic of
            Sparse Matrix Multiplication on Nvidia's GPU. I am currently working on
            Paralle data structure and algorithm. 
        </div>

        <div className="mx-3 flex w-1/3 flex-col bg-yellow-600 p-4">
          <ul className="space-y-2">
 
          </ul>
        </div>
      </div>
    </main>
  );
}
