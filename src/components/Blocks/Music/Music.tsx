import React, { FC } from "react";
import Column from "components/Layout/Column";
import Row from "components/Layout/Row";

const Music: FC = () => {
  return (
    <Row margin="music pb-20 flex items-center flex-col md:flex-row">
      <Column size="w-full mb-10 md:w-2/4 md:mb-0 ">
        <h2>How Music Taste...</h2>
        <p>Part of the designer life. If you wanna taste little bit :)</p>
      </Column>
      <Column size="w-full md:2/4">
        <div className="relative">
          <img
            src="images/music/music-section-bear.png"
            alt="music-section-bear"
          />
          <div className="spotify-iframe relative md:absolute">
            <iframe
              src="https://open.spotify.com/embed/playlist/37i9dQZEVXcDU6YnZAPdLx"
              width="280"
              height="285"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </Column>
    </Row>
  );
};

export default Music;
