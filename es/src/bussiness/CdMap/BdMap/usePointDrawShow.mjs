import { ref as v } from "vue";
import E from "../../../assets/images/icon_elevator.png.mjs";
function B(u, i, e, g) {
  const d = () => {
    i.value && i.value.clearOverlays();
  }, r = (t) => {
    e.cityName = t.label;
  }, a = v({}), S = () => {
    const t = `${e.cityName}${e.address}`;
    new BMap.Geocoder().getPoint(
      t,
      (s) => {
        s ? (a.value = s, i.value.centerAndZoom(a.value, u.zoom), f(), c()) : (i.value.centerAndZoom(e.cityName, u.zoom), window.$Message.warning("您选择的地址没有解析到结果!"));
      },
      e.cityName
    );
  }, p = () => {
    e.editingState = !e.editingState, f(), c();
  }, n = v(), o = v(), f = () => {
    const t = (l) => {
      a.value = l.point, i.value.removeOverlay(n.value), d(), c();
    };
    o.value && (o.value.removeEventListener("dragging", t), i.value.removeOverlay(o.value)), o.value = new BMap.Marker(a.value, {
      enableDragging: e.editingState,
      enableMassClear: !1
    }), i.value.addOverlay(o.value), o.value.addEventListener("dragging", t);
  }, c = () => {
    const t = (l) => {
      d(), e.circleRadius = l.target.xa;
    };
    n.value && (n.value.removeEventListener("lineupdate", t), i.value.removeOverlay(n.value)), n.value = new BMap.Circle(a.value, e.circleRadius, {
      strokeWeight: 3,
      strokeOpacity: 1,
      enableMassClear: !1,
      strokeStyle: e.editingState ? "dashed" : "solid",
      strokeColor: e.editingState ? "#ff9900" : "#57a3f3",
      fillColor: e.editingState ? "#ff9900" : "#fff",
      fillOpacity: e.editingState ? 0.3 : 0.5
    }), i.value.addOverlay(n.value), n.value[e.editingState ? "enableEditing" : "disableEditing"](), n.value.addEventListener("lineupdate", t);
  };
  return {
    onCityChange: r,
    onCitySearch: S,
    onUpdateEquipDraw: p,
    onEquipDrawSearch: async () => {
      if (e.editingState)
        return window.$Message.warning("请先关闭绘制设备");
      if (e.equipList = await u.getDrawAreaEquips(a, e.circleRadius), e.equipList)
        for (let t of e.equipList) {
          const l = new BMap.Icon(
            E,
            // 图标地址
            new BMap.Size(32, 32),
            // 图标可视区域大小
            {
              imageSize: { width: 20, height: 25 }
              // 图片大小
            }
          ), s = new BMap.Point(t.gislong, t.gislat), m = new BMap.Marker(s, { icon: l });
          i.value.addOverlay(m);
        }
    },
    onEquipAdd: () => {
      g && g(e.equipList);
    }
  };
}
export {
  B as default
};
