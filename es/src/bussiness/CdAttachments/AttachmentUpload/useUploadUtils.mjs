import { getAttachmentConfigs as S, uploadAttachment as w } from "@/api/system";
import { getSidToken as _ } from "@/util/bussTool";
function C() {
  const l = {
    qiye: "/a/stone/attachment/mobile-upload/qrcode-image",
    // 企业平台接口地址
    mis: "/api/equipment-documents/mobile-upload/qrcode-image"
    // mis接口地址
  }, m = (t, n = "mis") => {
    const { attitle: e, attClass: a, attCategory: s, attrefsysid: c, atttype: o } = t, r = e ? encodeURI(e) : "", i = a ? encodeURI(a) : "", u = s ? encodeURI(s) : "", d = c ? encodeURI(c) : "", $ = o ? encodeURI(o) : "", h = _(), f = l[n];
    return `${window.$baseRequestUrl}${f}?attitle=${r}&attClass=${i}&attCategory=${u}&attrefsysid=${d}&atttype=${$}&__sid=${h}`;
  }, p = (t) => new Promise((n, e) => {
    try {
      import("ali-oss").then((a) => {
        const s = a.default;
        S(t).then((c) => {
          const { accessKeyId: o, accessKeySecret: r, bucket: i, endpoint: u } = c.data, d = new s({
            accessKeyId: o,
            accessKeySecret: r,
            bucket: i,
            endpoint: u
          });
          n({ ossInstance: d, config: c.data });
        });
      });
    } catch (a) {
      e(a), window.$Message.warning(a);
    }
  }), g = () => {
    const t = /* @__PURE__ */ new Date(), n = t.getFullYear(), e = t.getMonth() + 1, a = t.getDate(), s = t.getHours(), c = t.getMinutes(), o = t.getSeconds();
    return "" + n + e + a + s + c + o;
  }, y = (t) => {
    let n = t.lastIndexOf("."), e = "";
    return n !== -1 && (e = t.substring(n)), e;
  };
  return {
    initOSS: p,
    uploadByOSS: (t, n, e) => new Promise((a, s) => {
      let c = "";
      n.itemvalue && (c += `${n.itemvalue}/`), c += `${g()}${Math.floor(Math.random() * 1e4)}${y(e.file.name)}`;
      try {
        t.put(c, e.file).then((o) => {
          const r = o.url || `'http://${o.bucket}.${n.endpoint}/${o.name}`;
          Object.assign(e, {
            datasource: n.datasource,
            attfileroute: r,
            attname: e.file.name
          }), a(e);
        });
      } catch (o) {
        s(o);
      }
    }),
    uploadRequest: (t, n) => new Promise((e, a) => {
      w(t, n).then((s) => {
        e(s);
      }).catch((s) => {
        a(s);
      });
    }),
    getQrcodeImgSrc: m
  };
}
export {
  C as default
};
