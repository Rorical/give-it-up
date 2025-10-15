function Footer() {
  return (
    <footer className="relative z-10 bg-black border-t border-white/20 py-12 mb-[32px]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GIVE IT UP</h3>
            <p className="text-white/70 text-sm">
              Give it up just means give it up.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">LINKS</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer transition-colors">Give It Up</li>
              <li className="hover:text-white cursor-pointer transition-colors">Give It Up</li>
              <li className="hover:text-white cursor-pointer transition-colors">Give It Up</li>
              <li className="hover:text-white cursor-pointer transition-colors">Give It Up</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>giveitup@giveitup.top</li>
              <li>+1 (GIVE) IT-UP</li>
              <li>123 Give It Up Street</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Copyright by Give It Up. All rights reserved.
          </p>
          <p className="text-white/30 text-xs mt-2">
            Give it up. Give it up. Give it up.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
