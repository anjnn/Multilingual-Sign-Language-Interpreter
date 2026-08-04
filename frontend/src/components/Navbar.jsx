function Navbar() {
    return (
        <nav className="w-full bg-[#070709]/85 backdrop-blur-md text-white border-b border-white/10 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">

                {/* Logo */}
                <h1 className="text-orange-500 text-2xl font-black tracking-[0.25em]">
                    SIGNBRIDGE
                </h1>

                {/* Navigation Links */}
                <ul className="hidden md:flex items-center gap-9 text-gray-300 text-sm font-medium">
                    <li className="hover:text-[#ff5e14] transition-colors duration-200 cursor-pointer">Features</li>
                    <li className="hover:text-[#ff5e14] transition-colors duration-200 cursor-pointer">How It Works</li>
                    <li className="hover:text-[#ff5e14] transition-colors duration-200 cursor-pointer">About</li>
                    <li className="hover:text-[#ff5e14] transition-colors duration-200 cursor-pointer">Contact</li>
                </ul>

                {/* CTA Button */}
                <button className="bg-gradient-to-r from-[#ff5e14] to-[#f94100] hover:from-[#ff6b26] hover:to-[#ff4d00] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,94,20,0.35)] hover:shadow-[0_0_25px_rgba(255,94,20,0.6)] hover:scale-105 active:scale-95 cursor-pointer">
                    Get Started
                </button>

            </div>
        </nav>
    );
}

export default Navbar;