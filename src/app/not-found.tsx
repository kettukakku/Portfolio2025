import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-[var(--color-text-faded)] mb-8">
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)]"
      >
        Return Home
      </Link>
    </div>
  );
}
