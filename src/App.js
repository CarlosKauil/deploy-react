import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./App.css"; // Asegúrate de que este CSS exista o ajusta según tu estructura


function App() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "assets/game.loader.js",
    dataUrl: "assets/game.data",
    frameworkUrl: "assets/game.framework.js",
    codeUrl: "assets/game.wasm",
  });

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">Kreaverse</div>
        <ul className="navbar-links">
          <li>Inicio</li>
          <li>Información</li>
          <li>Areas</li>
          <li>Metaverso</li>
          <li>Login</li>
        </ul>
      </nav>

      {/* Contenedor del juego Unity */}
      <main className="unity-wrapper">
        {!isLoaded && <p className="loading-text">Cargando... {Math.round(loadingProgression * 100)}%</p>}
        <Unity
          unityProvider={unityProvider}
          style={{ width: "100%", height: "100%" }}
        />
      </main>
    </div>
  );
}

export default App;
