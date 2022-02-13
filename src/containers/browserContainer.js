import React, { useContext, useState } from "react";

import FirebaseContext from "../context/firebase";
import { Profiles } from "../components";
import HeaderContainer from "./headerContainer";

function BrowserContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  return (
    profile.displayName ? (
      <>
        <HeaderContainer backgroundUrl='url("../images/misc/joker1.jpg")' profile={user} Group='Group'>
          <div className="home-feature">
            <h2>Watch Joker Now</h2>
            <p>Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
              City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
              futile attempt to feel like he's part of the world around him.
            </p>
            <button className="play-button">Play</button>
          </div>
        </HeaderContainer>
      </>) :
      (<Profiles title="Who's Watching?" user={user} setProfile={setProfile}>
        <HeaderContainer />
      </Profiles>)
  );
}

export default BrowserContainer;
