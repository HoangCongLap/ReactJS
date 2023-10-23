import React from 'react';
import './styles.scss';

// Album.prototype = {
//   album: PropTypes.object.isRequired,
// };

function Album({ album }) {
  return (
    <div className="album">
      <div className="album_thumbnail">
        <img src={album.thumbnailUrl} alt={album.nam} />
      </div>

      <p className="album_name">{album.name}</p>
    </div>
  );
}
export default Album;
