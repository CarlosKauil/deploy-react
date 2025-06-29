import logo from './logo.svg';
import './App.css';

import { Unity, useUnityContext } from "react-unity-webgl";

const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
  loaderUrl: "assets/game.loader.js",
  dataUrl: "assets/game.data",
  frameworkUrl: "assets/game.framework.js",
  codeUrl: "assets/game.wasm",
});

function App() {
  return (
      <>
    {!isLoaded && <p>Cargando {Math.round(loadingProgression * 100)}%</p>}
    <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} />
  </>
  );
}

export default App;
