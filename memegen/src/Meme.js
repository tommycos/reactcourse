import React from "react";

//https://api.imgflip.com/get_memes

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((dat) => setAllMeme(dat.data.memes));
  }, []);

  /*Doing it with async await
    async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
        */

  function getMemeImage() {
    const mlength = allMeme.length;
    var random = allMeme[Math.floor(Math.random() * mlength)].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: random,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main>
      <div className="form--body">
        <input
          type="text"
          className="text--box"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="text--box"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <input
          type="submit"
          value={"Get a new meme Image"}
          className="submit--button"
          onClick={getMemeImage}
        />
      </div>
      <section className="meme--body">
        <img src={meme.randomImage} alt="meme" className="meme--image" />
        <h2 id="meme--texttop">{meme.topText}</h2>
        <h2 id="meme--textbot">{meme.bottomText}</h2>
      </section>
    </main>
  );
}
