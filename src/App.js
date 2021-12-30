import { useEffect, useState } from "react";
import tinykeys from "tinykeys";
import RightArrow from "./RightArrow.js";
import "./App.css";

// 1st - Get layout of the application in order.

function App() {
  const [isZen, setZen] = useState(false);

  const handleToggle = () => {
    setZen(!isZen);
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
          <div className="Zen-container" onClick={handleToggle}>
            {/* Might wanna wrap this around a state variable */}
            {isZen ? (
              <>
                <div className="Zen-mode">
                  <div>
                    <h4>Zen Mode</h4>
                  </div>
                  <div>
                    <RightArrow className="Rotate-arrow" />
                  </div>
                </div>
                <div>
                  <h2>Instructions</h2>
                  <div className="Instruction-container">
                    <div className="Instruction">
                      <p className="Number-container">1</p>
                      <h4>
                        A tool name or action will be given along with the
                        context of the shortcut. All actions follow the menu bar
                        commands.
                      </h4>
                    </div>
                    <div className="Instruction">
                      <p className="Number-container">2</p>
                      <h4>
                        Press the keys prompted that correspond with the tool or
                        contextual action.
                      </h4>
                    </div>
                    <div className="Instruction">
                      <p className="Number-container">3</p>
                      <h4>
                        Bask in glory as you recieve a dosage of the good brain
                        chemicals. When you are ready, try competitve mode.
                      </h4>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="Zen-mode">
                <div>
                  <h4>Zen Mode</h4>
                  <p>
                    Practice figma shortcuts in an untimed, infinite setting.
                  </p>
                </div>
                <div>
                  <RightArrow />
                </div>
              </div>
            )}
          </div>
          <div className="Competitive-mode">
            <div>
              <h4>Competitive Mode</h4>
              <p>
                Race against the clock in a timed test to see how well you
                really know your shortcuts.
              </p>
            </div>
            <div>
              <RightArrow />
            </div>
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
