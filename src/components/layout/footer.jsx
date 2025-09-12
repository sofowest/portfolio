function Footer() {
  return (
    <footer className="bg-[var(--dark-purple)] text-[var(--light-purple)] py-4 px-2">
      <div className="container mx-auto text-center gap-2 flex flex-col items-center">
        <p className="text-lg">
          Made with <span className="text-[var(--light-purple)]">💜</span> and so much coffee <br /> by <span className="font-bold">Leandro Gómez</span>.
        </p>
        <p className="text-sm">Credits for: 
          <a className="font-bold hover:text-[var(--extra-light-purple)]" href="https://www.youtube.com/@midudev" target="_blank" rel="noopener noreferrer"> Midudev</a>, 
          <a className="font-bold hover:text-[var(--extra-light-purple)]" href="https://www.youtube.com/@BettaTech" target="_blank" rel="noopener noreferrer"> BettaTech</a>, 
          <a className="font-bold hover:text-[var(--extra-light-purple)]" href="https://www.youtube.com/@mouredev" target="_blank" rel="noopener noreferrer"> MoureDev</a>, 
          <a className="font-bold hover:text-[var(--extra-light-purple)]" href="https://www.youtube.com/@goncypozzo" target="_blank" rel="noopener noreferrer"> Goncy</a> and 
          <a className="font-bold hover:text-[var(--extra-light-purple)]" href="https://www.youtube.com/@hdeleonnet" target="_blank" rel="noopener noreferrer"> HdeLeon</a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;