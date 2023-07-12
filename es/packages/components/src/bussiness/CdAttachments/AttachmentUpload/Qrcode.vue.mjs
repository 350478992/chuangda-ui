import { defineComponent as c, ref as s, openBlock as n, createElementBlock as a, createElementVNode as l } from "vue";
import m from "./useUploadUtils.mjs";
const d = { class: "cd-qrcode-wrap" }, p = ["src"], g = /* @__PURE__ */ c({
  __name: "Qrcode",
  props: {
    url: {},
    formData: {}
  },
  setup(e) {
    const o = e, { getQrcodeImgSrc: r } = m(), t = s(r(o.formData));
    return (_, i) => (n(), a("div", d, [
      l("img", {
        src: t.value,
        alt: "二维码"
      }, null, 8, p)
    ]));
  }
});
export {
  g as default
};
