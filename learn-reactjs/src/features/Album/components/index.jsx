import AlbumList from "./AlbumList";

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
      name: "dskfjadfsd",
      thumbnailUrl:
        "<https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/8/7/0/b87093d7201c164981d6132ca0673745.jpg",
    },
    {
      id: 3,
      name: "Traof Lưu",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/8/7/0/b87093d7201c164981d6132ca0673745.jpg",
    },
  ];

  return (
    <div>
      <h2>Có thể bạn sẽ thích đấy </h2>
      <AlbumList albumLis={albumList} />
    </div>
  );
}
export default AlbumFeature;
