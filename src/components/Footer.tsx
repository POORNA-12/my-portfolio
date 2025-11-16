const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-primary/10">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Purna Ajay Gadde. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with <span className="text-primary">React</span> & <span className="text-secondary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;