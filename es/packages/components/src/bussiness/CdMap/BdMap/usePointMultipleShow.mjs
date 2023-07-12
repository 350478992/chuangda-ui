import c from "../../../assets/images/icon_elevator.png.mjs";
function f(n, e) {
  return e.value && e.value.clearOverlays(), () => {
    if (n.multipointMarkerList.length === 0)
      return;
    const r = n.multipointMarkerList[0];
    e.value.centerAndZoom(new BMap.Point(r.lng, r.lat), n.zoom);
    const l = new BMap.Icon(
      c,
      // 图标地址
      new BMap.Size(32, 32),
      // 图标可视区域大小
      {
        imageSize: { width: 20, height: 25 }
        // 图片大小
      }
    );
    let o = [];
    n.multipointMarkerList.forEach((t, i) => {
      const a = new BMap.Point(t.lng, t.lat);
      if (o.push("marker" + i), o[i] = new BMap.Marker(a, t.cusIcon ? { icon: l } : {}), e.value.addOverlay(o[i]), n.multipointMarkerInfoShow) {
        const u = new BMap.InfoWindow(`地址:${t.address}`, {
          width: 200,
          height: 100,
          title: t.useorgname
        });
        o[i].addEventListener("click", function() {
          e.value.openInfoWindow(u, a);
        });
      }
    });
  };
}
export {
  f as default
};
