type TerminalProps = {
  children: React.ReactNode;
};

function Terminal({ children }: TerminalProps) {
  return (
    <div className="terminal">
      <div className="terminal-content">
        {children}
      </div>
    </div>
  );
}

export default Terminal;