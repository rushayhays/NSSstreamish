import React from "react";
import "./App.css";
import VideoList from "./components/VideoList";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <VideoList />
    </div>
  );
}

export default App;