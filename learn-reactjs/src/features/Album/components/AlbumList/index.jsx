import PropTypes from "prop-types";
import './styles.scss';
import React from "react";
import Album from "../Album";

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

function AlbumList({ albumList }) {
  // console.log("list",albumList);
  return (
    <ul className="album-list">
      {albumList.map((album) => (
        <li key={album.id}>
          <Album album={album} />
        </li>
      ))}
    </ul>
  );
}
export default AlbumList;
