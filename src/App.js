import React, { useState } from "react";
import "./styles.css";

import { data } from "./data";
var songList = Object.keys(data);

export default function App() {
  var [genre, setGenre] = useState("Slow_Melodies");
  function genreHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <header className="header">
        <h1>What is your mood?</h1>
        <h2>Choose from the below categories of music depending on your mood</h2>
        <div className="buttons">
          {songList.map((genre) => {
            return <button onClick={() => genreHandler(genre)}>{genre}</button>;
          })}
        </div>
      </header>
      <div className="songs">
        {data[genre].map((song) => {
          return (
            <div className="song" key={song.name}>
              <script
                defer
                src="https://use.fontawesome.com/releases/v5.15.1/js/all.js"
                integrity="sha384-9/D4ECZvKMVEJ9Bhr3ZnUAF+Ahlagp1cyPC7h5yDlZdXs4DQ/vRftzfd+2uFUuqS"
                crossorigin="anonymous"
              ></script>
              <img className="songImg" alt="Song Name" src={song.imgURL}></img>
              <div className="songContent">
                <h4> {song.name}</h4>
                <p> {song.singer}</p>
                <a href={song.songURL} target="">
                   Play song 🎵 
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
