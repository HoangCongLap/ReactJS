import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};
function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Những Bản Hit Ngủ Quên",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/d/1/f/2d1f2cef5356c08aa99771f6a670ae93.jpg",
    },
    {
      id: 2,
      name: "Acouustic V-Pop",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/6/f/0/86f0488943e5bf52152f467aeae19efd.jpg",
    },
    {
      id: 3,
      name: "Nhạc Trẻ Huyền Thoại Một Thời",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/e/d/6/aed663ec527cb1533b94b659a1990373.jpg",
    },
  ];

  return (
    <div>
      <h2>Có thể bạn sẽ thích đấy </h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}
export default AlbumFeature;
