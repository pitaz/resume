"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-black dark:via-purple-950/20 dark:to-pink-950/20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 relative z-10">
        <div
          className={`text-center space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-4">
            <p className="text-sm md:text-base font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Welcome to my Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block">I'm a</span>
              <span className="block gradient-text">Creative Developer</span>
              <span className="block text-gray-800 dark:text-gray-200">
                Building Digital Experiences
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-6">
              I craft beautiful, functional, and user-centered digital solutions
              that bring ideas to life through code and design.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-purple-600 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="pt-16 animate-bounce">
            <a
              href="#about"
              className="inline-block text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              aria-label="Scroll to about section"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

