import React, { useContext, useEffect, useState } from "react";
import Fuse from 'fuse.js';
import FirebaseContext from "../context/firebase";
import { Profiles } from "../components";
import HeaderContainer from "./headerContainer";
import CardGroup, { Card } from "../components/card/card";
import FooterContainer from './footerContainer';
import Player from "../components/player/player";

function BrowserContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [showPlayer, setShowPlayer] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const [slideRows, setSlideRows] = useState([]);
  const [category, setCategory] = useState('series');
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
    const results = fuse.search(searchItem).map(({ item }) => item);

    if (slideRows.length > 0 && searchItem.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchItem]);

  return (
    profile.displayName ? (
      <>
        <HeaderContainer backgroundUrl='url("../images/misc/joker1.jpg")' profile={user} Group='Group' setCategory={setCategory} setSearchItem={setSearchItem} searchItem={searchItem}>
          <div className="home-feature">
            <h2>Watch Joker Now</h2>
            <p>Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
              City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
              futile attempt to feel like he's part of the world around him.
            </p>
            <button className="play-button" onClick={() => setShowPlayer((showPlayer => !showPlayer))}>Play</button>
            <Player src="/videos/bunny.mp4" showPlayer={showPlayer} setShowPlayer={setShowPlayer} />
          </div>
        </HeaderContainer>
        <CardGroup>
          {slideRows.map((slideItem) => (
            <Card key={`${category}-${slideItem.title.toLowerCase()}`} Item={slideItem} category={category} />
          ))}
        </CardGroup>
        <FooterContainer />
      </>) :
      (<Profiles title="Who's Watching?" user={user} setProfile={setProfile}>
        <HeaderContainer />
      </Profiles>)
  );
}

export default BrowserContainer;
