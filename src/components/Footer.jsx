const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 text-center space-y-6">
      {/* Keywords */}
      <div className="flex flex-wrap justify-center gap-3 text-sm uppercase tracking-wide">
        <span className="font-bold">Digital Product Design</span>
        <span>Remote Work</span>
        <span className="font-bold">UX Design</span>
        <span>Distributed Teams</span>
        <span className="font-bold">Creativity</span>
        <span>Strategy</span>
        <span className="font-bold">Suspense</span>
        <span>Growth</span>
      </div>

      {/* Brand name */}
      <h2 className="text-2xl font-serif font-semibold">NORDIC ROSE</h2>

      {/* Description */}
      <p className="max-w-xl mx-auto text-gray-400 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
        tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a
        nunc eget ligula suscipit finibus.
      </p>

      {/* Social links */}
      <div className="space-x-6 text-sm">
        <a href="#" className="hover:underline">
          Twitter
        </a>
        <a href="#" className="hover:underline">
          LinkedIn
        </a>
        <a href="#" className="hover:underline">
          RSS
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-xs text-gray-500">
        <p>© 2012–2020 Nordic Rose Co.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
