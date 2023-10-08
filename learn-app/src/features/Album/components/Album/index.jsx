import React from "react";
import PropTypes from "prop-types";

Album.prototype = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <div className="album">
      <div classNAme="album_thumbnail">
        <img src={album.thumbnailUrl} alt={album.name} />
      </div>
      <p>{album.name}</p>
    </div>
  );
}
export default Album;
