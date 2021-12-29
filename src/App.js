import { useEffect, useState } from "react";
import tinykeys from "tinykeys";
import "./App.css";

// 1st - Get layout of the application in order.

function App() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    let unsubscribe = tinykeys(window, {
      "Shift+D": () => {
        console.log("The 'Shift' and 'd' keys were pressed at the same time");
      },
      "y e e t": () => {
        alert("The keys 'y', 'e', 'e', and 't' were pressed in order");
      },
      "$mod+KeyD": (event) => {
        event.preventDefault();
        alert("Either 'Control+d' or 'Meta+d' were pressed");
      },
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <div className="App">
      <div className="Menu">
        <div className="Title-container">
          <h1>FigmaTrainer</h1>
          <h3>An unofficial tool for practicing Figma shortcuts.</h3>
        </div>
        <div className="Game-container">
          <div className="Zen-mode">
            <h4>Zen Mode</h4>
            <p>Practice figma shortcuts in an untimed, infinite setting.</p>
          </div>
          <div className="Competitive-mode">
            <h4>Competitive Mode</h4>
            <p>
              Race against the clock in a timed test to see how well you really
              know your shortcuts.
            </p>
          </div>
          <div className="Footer">
            <p>Designed and developed by @ngeloxyz</p>
          </div>
        </div>
        {/* Should be the same component, refactor later */}
        {/* <div>
          <ZenMode onClick={handleToggle}>
            <h3>Zen Mode</h3>
            <p>Practice figma shortcuts in an untimed, infinite setting.</p>
            {isActive && <ZenModeToggle>Test</ZenModeToggle>}
          </ZenMode>
          <CompetitiveMode>
            <h3>Competitive Mode</h3>
            <p>
              Race against the clock in a timed test to see how well you really
              know your shortcuts.
            </p>
          </CompetitiveMode>
        </div>
        <Footer>Designed and developed by @ngeloxyz</Footer> */}
      </div>
    </div>
  );
}

export default App;
