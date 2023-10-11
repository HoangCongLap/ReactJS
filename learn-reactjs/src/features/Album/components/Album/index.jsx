import React from "react";
import PropTypes from "prop-types";
import './styles.scss'

Album.prototype = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <div classname="album">
      <div className="album_thumbnail">
        <img src={album.thumbnailUrl} alt={album.nam} />
      </div>

      <p className="album_thumbnail">{album.name}</p>
    </div>
  );
}
export default Album;
