

import { Unity, useUnityContext } from "react-unity-webgl";
import React from "react";

function App() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "assets/game.loader.js",
    dataUrl: "assets/game.data",
    frameworkUrl: "assets/game.framework.js",
    codeUrl: "assets/game.wasm",
  });

  return (
    <div>
      {!isLoaded && <p>Cargando... {Math.round(loadingProgression * 100)}%</p>}
      <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default App;
