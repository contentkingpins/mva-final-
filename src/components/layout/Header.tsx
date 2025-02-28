"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ClickToCallButton from '../common/ClickToCallButton';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">Claim Connectors</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#how-it-works" className="font-medium hover:text-blue-600 transition-colors">
            How It Works
          </Link>
          <Link href="/#testimonials" className="font-medium hover:text-blue-600 transition-colors">
            Testimonials
          </Link>
          <Link href="/#faq" className="font-medium hover:text-blue-600 transition-colors">
            FAQ
          </Link>
          <Link href="/#claim-form" className="font-medium hover:text-blue-600 transition-colors">
            Start Claim
          </Link>
          <ClickToCallButton variant="primary" text="Call Now" showIcon={true} />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link
              href="/#how-it-works"
              className="font-medium py-2 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/#testimonials"
              className="font-medium py-2 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/#faq"
              className="font-medium py-2 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/#claim-form"
              className="font-medium py-2 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Claim
            </Link>
            <ClickToCallButton
              variant="primary"
              text="Call Now"
              showIcon={true}
              className="w-full justify-center"
            />
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 