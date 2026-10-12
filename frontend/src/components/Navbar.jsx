import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Features", href: "#features" },
        { name: "Applications", href: "#applications" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="w-full bg-[#070709]/85 backdrop-blur-md text-white border-b border-white/10 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">

                {/* Logo */}
                <a
                    href="#hero"
                    className="text-orange-500 text-2xl font-black tracking-[0.25em] transition-all duration-200 hover:opacity-90 cursor-pointer"
                >
                    SIGNBRIDGE
                </a>

                {/* Navigation Links (Desktop) */}
                <ul className="hidden md:flex items-center gap-9 text-gray-300 text-sm font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="hover:text-[#ff5e14] transition-colors duration-200 cursor-pointer"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA Button (Desktop) */}
                <div className="hidden md:block">
                    <a
                        href="#cta"
                        className="inline-block bg-gradient-to-r from-[#ff5e14] to-[#f94100] hover:from-[#ff6b26] hover:to-[#ff4d00] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,94,20,0.35)] hover:shadow-[0_0_25px_rgba(255,94,20,0.6)] hover:scale-105 active:scale-95 cursor-pointer"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                    className="md:hidden text-gray-300 hover:text-[#ff5e14] text-xl p-2 focus:outline-none cursor-pointer"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0a0b10] border-b border-white/10 px-6 py-5 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:text-[#ff5e14] font-medium py-1 text-base transition-colors duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#cta"
                        onClick={() => setIsOpen(false)}
                        className="text-center bg-gradient-to-r from-[#ff5e14] to-[#f94100] hover:from-[#ff6b26] hover:to-[#ff4d00] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,94,20,0.35)] mt-2"
                    >
                        Get Started
                    </a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;