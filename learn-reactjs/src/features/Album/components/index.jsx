import React from 'react';
import AlbumList from './AlbumList';
// import './styles.scss';


AlbumFeature.propTypes = {};
function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Hoa Thịnh Hành",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/1/0/6/f106681b91a18931fdf3d9f628474eb2.jpg",
    },
    {
      id: 2,
      name: "Nhạc Hoa Lời Việt",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/b/e/6/9be6f892a7f95ef25632752dd2a319c2.jpg",
    },
    {
      id: 3,
      name: "Nhẹ Nhàng Cùng V-Pop",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/e/3/2/de320c7f69ddf70a91f62aec66085422.jpg",
    },
  ];

  return (
    <div className="title">
      <h2>Có thể bạn sẽ thích đấy </h2>
      <AlbumList albumList={albumList} />
    </div>

  );

}
export default AlbumFeature;
