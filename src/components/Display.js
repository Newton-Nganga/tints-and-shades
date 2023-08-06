
function Display({title,children}) {
  return (
    <div className='display-section-el'>
        <section>
        <div className="inner-section start">
          <div className="head-el">
            <span className="head-el__circle"></span>
            <h4 className="head-el__text">{title}</h4>
            <span className="head-el__hr"></span>
          </div>
        </div>
      </section>
      <section className="display">
        <div className="inner-section">
          <div className="display-section">
          {children}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Display