const Index = () => {
  const onClickHandler = () => {
    alert("CLICKED");
  }

  return (
    <section>
      <div className="container mx-auto">
        <h1>
          Welcome to NextWind!
        </h1>
        <button className={`tracking-wide font-mono px-4 py-2 border-2 border-black uppercase text-sm   hover:text-white hover:bg-black hover:border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2`} onClick={onClickHandler}>MINT Now!</button>
      </div>
    </section>
  )
};

export default Index;