import { useState, Fragment } from "react";
import useGenerateTintsAndShades from "./Utils/useGenerateTintsAndShades";
import ColorPicker from "./components/ColorPicker";
import ShadesDisplay from "./components/ShadesDisplay";
import TintsDisplay from "./components/TintsDisplay";
import Navbar from "./components/Navbar";
import Display from "./components/Display";
import useScrollPosition from "./Utils/useScrolledDown";
function App() {
  const [colorValue, setColorValue] = useState("#4db64d");
  const [copy, setCopy] = useState({ index: "", state: false });
  function handleChange(e) {
    e.preventDefault();
    setColorValue(e.target.value);
  }
  function handleCopy(col, index) {
    setCopy({ index: index, state: true });
    navigator.clipboard.writeText(col);
    setTimeout(() => setCopy({ index: "", state: false }), 2000);
  }
  const { tintss, shadess } = useGenerateTintsAndShades(colorValue, 36);
  const scrolledDown = useScrollPosition();
  return (
    <Fragment>
      <Navbar scrolledDown={scrolledDown} />
      <section className="hero-section">
        <div className="inner-section hero">
          <div className="hero-header">
            <h1 className="hero-header__title">
              Where every color sparks 💥 an
              <br />
              <span className="colored-text">Imagination!</span>
            </h1>
            <span className="hero-header__title-rule"></span>
            <h3 className="hero-header__cta">
              Unleash creativity with inifine hues & tints and transform your
              ideas into vibrant realities.Lets get started 🥳.
            </h3>
          </div>
          <div className="hero-picker">
            <ColorPicker handleChange={handleChange} colorValue={colorValue} />
          </div>
        </div>
        <span className="cloud"></span>
      </section>
      <Display title="Shades">
        <ShadesDisplay
          shadess={shadess}
          handleCopy={handleCopy}
          colorValue={colorValue}
          copy={copy}
        />
      </Display>
      {/* //map over the tints and shades */}
      <Display title={"Tints"}>
        <TintsDisplay
          tintss={tintss}
          handleCopy={handleCopy}
          colorValue={colorValue}
          copy={copy}
        />
      </Display>

      <section className="about-section">
        <div className="inner-section">
          <div className="about-container">
             <h4 className="about-section__title">
              <span className="about-section__hr"></span>About
            </h4>
            <p className="about-section__text">
              Helloo 👋,Welcome to shadeAlchemy, your ultimate destination for
              crafting captivating color palettes and unleashing your creative
              genius. Our mission is to empower developers and designers with a
              dynamic tool that simplifies the process of generating stunning
              color tints and shades.
            </p>
            <p className="about-section__text">
              Designed and crafted by Newton a passionate fullstack
              engineer.Lets develop pixel perfect interfaces for thee web.
            </p>
            <div className="about-section__top"> 
           <p className="about-section__name">
              <span className="about-section__hr"></span><a href="https://newton-nganga.vercel.app">Newton-Nganga</a>
            </p>
            <div className="about-section__me"></div>
            </div>
          </div>
        </div>
        <span className="cloud-inverted"></span>
      </section>
      <section className="footer-section">
        <div className="inner-section">
          <p>Created {new Date().getFullYear()}</p>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
