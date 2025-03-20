import Image from "next/image";
import Link from "next/link";

interface BookLinkProps {
  href: string;
  icon: string;
  name: string;
}

function BookLink({ href, icon, name }: BookLinkProps) {
  return (
    <a
      href={href}
      className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors flex items-center gap-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={icon} alt={name} width={16} height={16} className="w-4 h-4" />
      {name}
    </a>
  );
}

export default function BookPost() {
  return (
    <main className="p-8 mx-auto">
      {/* Book Header and Content Section */}
      <div className="flex justify-between items-center mb-12">
        <div className="flex flex-col gap-2">
          <Link
            href="/blog"
            className="bg-[var(--color-primary)] text-[var(--color-background-alt)] text-sm font-bold px-8 py-[0.5] uppercase tracking-[0.1em]"
          >
            Book Review
          </Link>
          <div className="flex gap-2">
            <Link
              href="/blog"
              className="bg-[var(--color-primary)] text-[var(--color-background-alt)] text-sm font-bold px-3 py-[0.5] uppercase"
            >
              Horror
            </Link>
            <Link
              href="/blog"
              className="bg-[var(--color-primary)] text-[var(--color-background-alt)] text-sm font-bold px-3 py-[0.5] uppercase"
            >
              Thriller
            </Link>
          </div>
        </div>
        <p className="text-sm text-[var(--color-text-faded)]">
          January 15, 2024
        </p>
      </div>
      <div>
        {/* Book Cover */}
        <div className="float-left w-[200px] mr-8 mb-4">
          <div className="aspect-[2/3] bg-gray-200">
            {/* Image will go here */}
          </div>
        </div>

        {/* Content Column */}
        <div>
          <div className="mb-4 text-center">
            <h1 className="text-3xl font-bold uppercase tracking-[0.1em]">
              Book Title
            </h1>
            <h2 className="text-xl text-[var(--color-text-faded)]">
              Author Name
            </h2>
          </div>
          {/* Star Rating */}
          <div className="flex items-center gap-2 mb-4 justify-center">
            <div className="flex text-[var(--color-button)]">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>★</span>
              ))}
            </div>
            <span className="text-sm text-[var(--color-text-faded)]">
              Quick rating summary here
            </span>
          </div>

          <div className="flex flex-wrap gap-2 text-sm items-center mb-4 justify-center">
            <BookLink
              href="#"
              icon="https://www.amazon.com/favicon.ico"
              name="Amazon"
            />
            <BookLink
              href="#"
              icon="https://www.goodreads.com/favicon.ico"
              name="Goodreads"
            />
            <BookLink
              href="#"
              icon="https://bookshop.org/favicon.ico"
              name="Bookshop.org"
            />
          </div>
          {/* Main Review Content */}
          <article className="prose prose-lg">
            <p>
              Ut excepteur mollit ad nostrud. Ex nostrud nisi do cupidatat et
              nisi ea laboris. Anim nulla nostrud aliqua ut culpa sunt officia
              ipsum velit adipisicing nulla consectetur. Aliqua Lorem nisi et
              anim elit minim anim. Veniam in dolor nisi ea irure pariatur ipsum
              adipisicing consectetur laboris pariatur adipisicing.
            </p>
            <p>
              Aliquip consequat ipsum est. Aliqua anim adipisicing consectetur
              Lorem nostrud officia laborum duis anim dolore culpa sit nostrud
              laborum. Enim do sit tempor nisi aliqua anim. Consectetur
              cupidatat ex deserunt proident commodo ullamco tempor. Ad culpa
              quis sit laboris irure elit quis ad nulla laboris do laboris do
              incididunt. Magna nostrud qui ad ut incididunt pariatur cillum.
            </p>
            <p>
              Ipsum qui nisi commodo. Cupidatat eu excepteur fugiat ipsum sit
              veniam pariatur ut qui. Consectetur magna cupidatat dolor
              excepteur aliqua in deserunt duis elit ullamco magna officia qui
              consectetur labore. Nisi qui culpa laboris magna exercitation sit.
              Pariatur ut ea amet amet adipisicing amet in sunt anim. Ipsum sint
              excepteur nulla labore eu sint aute cillum nostrud ullamco labore
              duis. Exercitation nulla deserunt nulla cupidatat officia
              cupidatat anim sunt sint exercitation sit laboris ipsum irure
              adipisicing.
            </p>
            <p>
              Ea quis commodo aliqua ut nisi ut incididunt qui proident aute
              mollit. Cillum officia veniam Lorem id sit proident ea magna
              adipisicing occaecat nostrud magna. Culpa cillum amet Lorem
              officia aliquip proident minim amet qui. Nulla ex nostrud sint
              quis sint commodo esse Lorem veniam nisi. Ipsum Lorem non
              adipisicing nostrud excepteur ad sunt sint magna velit ex aliquip
              et cillum. Reprehenderit adipisicing commodo enim labore aliquip
              et adipisicing reprehenderit cillum ad culpa esse et. Labore qui
              proident mollit eu laborum incididunt voluptate veniam do ea qui.
              In fugiat occaecat aute.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
