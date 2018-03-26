import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <a href="#">Home</a>
          <a href="#">Technology</a>
          <a href="#">Creativity</a>
          <a href="#">Entrepeneurship</a>
          <a href="#">Self</a>
          <a href="#">Culture</a>
          <a href="#">Digital design</a>
          <a href="#">Popular on Medium</a>
          <a href="#">Politics</a>
          <a href="#">More</a>
          <button><a href="#">Get started</a></button>
        </header>

        <div className="main">
          <div className="main-left">
            <h1>Interested ideas that set your mind in motion</h1>
            <p>Hear directly from the people who know it best. From tech to politics to creativity and more - whatever your interest, we´ve got you covered</p>
            <button className="button-black">Get started</button>
            <button className="button-white">Learn more</button>
          </div>
          <div className="main-right">
            <img src="./images/medium-image.png" alt="pic"/>
          </div>
        </div>

      <div className="all-quarters">



        <div className="main-quarter">
          <div>
            <img src="./images/medium-image-puff-1.jpeg" alt="pic1"/>
          </div>
          <div className="quarterTextBox">
            <h2>The Boy Who Tamed the Sea</h2>
            <p>At 5:30 am, on the morning I can handle it. I´ll slip out of my covers and xcreep through the silver lig....</p>
          </div>
        </div>

        <div className="main-quarter">
          <div>
            <img src="./images/medium-image-puff-2.png" alt="pic1"/>
          </div>
          <div className="quarterTextBox">
            <h2>The Role of Human Emotions in the Future of Transport</h2>
            <p>Getting from A to B is about to feel very different.</p>
          </div>
        </div>

        <div className="main-quarter">
          <div>
            <img src="./images/medium-image-puff-3.png" alt="pic1"/>
          </div>
        <div className="quarterTextBox">
            <h2>The March of the Losers</h2>
            <p>Around the world, the victims are becoming the abusers, and Donald Trump is their king.</p>
          </div>
        </div>

        <div className="main-quarter">
          <div>
            <img src="./images/medium-image-puff-4.jpeg" alt="pic1"/>
          </div>
          <div className="quarterTextBox">
            <h2>The Burning Season</h2>
            <p>You cannot save everything when the fires comw to Northern California.</p>
          </div>
        </div>

        </div>
      </div>
    )
  }

}

export default App
