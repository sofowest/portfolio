function Footer() {
  return (
    <footer className="bg-[var(--dark-purple)] text-[var(--light-purple)] py-4 px-2">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Made with <span className="text-[var(--light-purple)]">💜</span> and so much coffee by Leandro Gómez.
        </p>
        <p className="text-sm">Credits for 
          <a href="https://www.youtube.com/@midudev" target="_blank" rel="noopener noreferrer">Midudev</a>, 
          <a href="https://www.youtube.com/@BettaTech" target="_blank" rel="noopener noreferrer">BettaTech</a>, 
          <a href="https://www.youtube.com/@mouredev" target="_blank" rel="noopener noreferrer">MoureDev</a>, 
          <a href="https://www.youtube.com/@goncypozzo" target="_blank" rel="noopener noreferrer">Goncy</a> and 
          <a href="https://www.youtube.com/@hdeleonnet" target="_blank" rel="noopener noreferrer">HdeLeon</a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;