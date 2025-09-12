function Footer() {
  return (
    <footer className="bg-[var(--dark-purple)] text-[var(--light-purple)] py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Leandro Gómez. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;