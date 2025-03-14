"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Hamburger Menu Button */}
      {isMobile && (
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 p-2 bg-[var(--color-primary)] rounded"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span className={`w-full h-0.5 bg-white transition-all absolute ${isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`} />
            <span className={`w-full h-0.5 bg-white transition-all absolute top-1/2 -translate-y-1/2 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all absolute ${isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`} />
          </div>
        </button>
      )}

      {/* Sidebar Content */}
      <aside className={`
        ${isMobile ? 'fixed inset-0 z-40 min-h-[100dvh]' : 'w-80'} 
        ${isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'}
        bg-[var(--color-primary)] flex flex-col
        transition-transform duration-100 ease-in-out
      `}>
        <div className={`${isMobile ? 'overflow-y-auto overscroll-contain pb-16' : ''} h-full`}>
          {/* Profile Image */}
          <div className="py-4">
            <div className={`${isMobile ? 'w-[200px]' : 'w-[280px]'} mx-auto aspect-square relative`}>
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
          </div>

          {/* Rest of content */}
          <div className={`${isMobile ? '' : 'px-8'} pb-8`}>
            {/* Navigation Section */}
            <section className="mb-8">
              <h2 className="section-header">
                NAVIGATION
              </h2>
              <nav className="sidebar-text flex flex-col gap-2">
                <Link href="/resume" className="nav-link">
                  <span className="text-[var(--color-primary-light)]">◆</span>
                  Resume
                </Link>
                <Link href="/samples" className="nav-link">
                  <span className="text-[var(--color-primary-light)]">◆</span>
                  Writing Samples
                </Link>
                <Link href="/blog" className="nav-link">
                  <span className="text-[var(--color-primary-light)]">◆</span>
                  Blog
                </Link>
                <Link href="/bookpost" className="nav-link">
                  <span className="text-[var(--color-primary-light)]">◆</span>
                  Book Post - FOR TESTING
                </Link>
              </nav>
            </section>

            {/* Contact Section */}
            <section className="mb-8">
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
          </div>
        </div>
      </aside>
    </>
  );
}