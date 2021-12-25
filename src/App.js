import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import tinykeys from "tinykeys";

const AppBackground = styled.div({
  backgroundColor: "white",
  color: "black",
  fontWeight: "bold",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh",
  display: "flex",
});

const Title = styled.div({
  margin: 64,
});

const ZenMode = styled.div({
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 64,
  width: "100%",
  backgroundColor: "#D5BFF7",
  border: "solid",
  borderWidth: 4,
  borderColor: "black",
});

const CompetitiveMode = styled.div({
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 64,
  width: "100%",
  backgroundColor: "#F4D150",
  border: "solid",
  borderWidth: 4,
  borderTopWidth: 0,
  borderColor: "black",
});

const Footer = styled.div({
  fontWeight: "normal",
  paddingLeft: 64,
  marginTop: 8,
  marginBottom: 8,
});

const ZenModeToggle = styled.div({
  margin: 300,
  visibility: "false",
});

//
// 1st, create a random expectation of keybindings like a "set"
//

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
    <div>
      <AppBackground>
        <Title>
          <h1>Figma Trainer</h1>
          <h3>An unofficial tool for practicing Figma shortcuts.</h3>
        </Title>
        {/* Should be the same component, refactor later */}
        <div>
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
        <Footer>Designed and developed by @ngeloxyz</Footer>
      </AppBackground>
    </div>
  );
}

export default App;
