import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="w-80 bg-[var(--color-primary)] p-8 flex flex-col gap-8 min-h-screen">
      {/* Profile Image Container */}
      <div className="w-full aspect-square relative">
        <div className="absolute inset-[1px] bg-white" 
             style={{ 
               clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
               transform: 'scale(1.05)' 
             }}>
          <div className="absolute inset-[8px] bg-[var(--color-primary)]"
               style={{ 
                 clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
               }}>
            <Image
              src="/siamese-cat-cover.webp"
              alt="Profile"
              fill
              className="object-cover"
              style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <section>
        <h2 className="section-header">
          NAVIGATION
        </h2>
        <nav className="sidebar-text flex flex-col gap-2">
          <a href="/resume" className="hover:text-[var(--color-primary-light)] transition-colors font-bold flex items-center gap-2">
            <span className="text-[var(--color-primary-light)]">◆</span>
            Resume
          </a>
          <a href="/samples" className="hover:text-[var(--color-primary-light)] transition-colors font-bold flex items-center gap-2">
            <span className="text-[var(--color-primary-light)]">◆</span>
            Writing Samples
          </a>
          <a href="/blog" className="hover:text-[var(--color-primary-light)] transition-colors font-bold flex items-center gap-2">
            <span className="text-[var(--color-primary-light)]">◆</span>
            Blog
          </a>
        </nav>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="section-header">CONTACT</h2>
        <form className="space-y-4 sidebar-text">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded bg-white/90 text-[var(--color-text-dark)]"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded bg-white/90 text-[var(--color-text-dark)]"
              placeholder="your@email.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 rounded bg-white/90 text-[var(--color-text-dark)] resize-none"
              placeholder="Your message..."
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[var(--color-button)] text-[var(--color-text-light)] py-1 rounded hover:bg-[var(--color-button-hover)] hover:text-[var(--color-text-dark)] transition-colors font-semibold"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Social Media Section */}
      <section>
        <h2 className="section-header">SOCIAL MEDIA</h2>
        <ul className="flex justify-around py-2 sidebar-text">
          <li>
            <a href="#" className="social-icon">
              <FaGithub className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="#" className="social-icon">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="#" className="social-icon">
              <FaTwitter className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="#" className="social-icon">
              <FaInstagram className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </section>
    </aside>
  );
}