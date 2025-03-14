
import Image from "next/image";

export default function BookPost() {
  return (
    <main className="flex-1 p-8">
      <div className="flex-1 flex flex-col gap-8">
        {/* Book Header and Content Section */}
        <div className="flex md:flex-row flex-col gap-8">
          {/* Book Cover */}
          <div className="md:w-64 w-full aspect-[2/3] bg-gray-200 relative shrink-0">
            {/* Image will go here */}
          </div>

          {/* Content Column */}
          <div className="flex flex-col gap-8 flex-1">
            {/* Rating Section */}
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-3xl font-bold uppercase tracking-[0.1em]">Book Title</h1>
                <h2 className="text-xl text-[var(--color-text-faded)]">Author Name</h2>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Star Rating */}
                <div className="flex text-[var(--color-button)]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
                <span className="text-sm text-[var(--color-text-faded)]">
                  Quick rating summary here
                </span>
              </div>

              <div className="flex gap-4 text-sm items-center">
                <a 
                  href="#" 
                  className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image 
                    src="https://www.amazon.com/favicon.ico" 
                    alt="Amazon" 
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  Amazon
                </a>
                <a 
                  href="#" 
                  className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src="https://www.goodreads.com/favicon.ico" 
                    alt="Goodreads" 
                    className="w-4 h-4"
                  />
                  Goodreads
                </a>
                <a 
                  href="#" 
                  className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src="https://bookshop.org/favicon.ico" 
                    alt="Bookshop.org" 
                    className="w-4 h-4"
                  />
                  Bookshop.org
                </a>
              </div>
            </div>

            {/* Main Review Content */}
            <article className="prose prose-lg">
              <p>Your detailed book review goes here...</p>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}