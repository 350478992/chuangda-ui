import { defineComponent as I, reactive as v, computed as x, inject as O, resolveComponent as d, openBlock as u, createElementBlock as f, createVNode as n, withCtx as p, createElementVNode as a, toDisplayString as g, Fragment as k, renderList as j, createTextVNode as w } from "vue";
import H from "@/config";
import T from "./useUploadUtils.mjs";
const q = { class: "cd-upload-wrap" }, L = { class: "cd-upload-wrap-cont" }, N = { class: "cd-upload-wrap-btns" }, R = /* @__PURE__ */ I({
  __name: "UploadBtn",
  props: {
    formObj: { default: () => ({}) },
    uploadUrl: { default: "/api/equipment-documents/attachments" },
    accept: { default: "" },
    format: { default: () => [] },
    itemcode: { default: "" },
    multiple: { type: Boolean, default: !1 },
    maxSize: { default: "auto" },
    seletLastTitle: { type: Boolean, default: !1 },
    isOss: { type: Boolean, default: !1 },
    beforeUploadHandle: { type: Function, default: () => !0 }
  },
  emits: ["on-cancel"],
  setup(_, { emit: m }) {
    const l = _, e = v({
      files: [],
      successFiles: [],
      failFiels: [],
      loading: !1,
      ossInstance: null,
      ossConfig: null
    }), h = x(() => e.files.length > 0 ? l.multiple ? `已选择${e.files.length}个文件，继续添加或点击上传` : `已选择${e.files.length}个文件，请点击上传` : "点击选择文件"), y = (s) => {
      const t = s.name.split(".")[1];
      return l.format.length > 0 && !l.format.includes(t) ? (window.$Message.warning(`请选择后缀为${l.format.join("，")}的文件`), !1) : l.maxSize !== "auto" && s.size > l.maxSize ? (window.$Message.warning(
        `选择的文件大小不能超过${+l.maxSize / 1e4}M`
      ), !1) : (l.multiple ? e.files.push(s) : e.files = [s], !1);
    }, F = async () => {
      if (l.beforeUploadHandle()) {
        if (e.loading = !0, !e.files.length)
          return e.loading = !1, window.$Message.warning("请选择文件");
        if (l.seletLastTitle && !l.formObj.attitle)
          return e.loading = !1, window.$Message.warning("附件标题需选到最后一级");
        e.successFiles = [], e.failFiels = [];
        for (let s of e.files)
          C({ ...l.formObj, file: s });
      }
    }, { initOSS: U, uploadByOSS: S, uploadRequest: $ } = T(), B = O(
      "onUploadSuccessHandle"
    ), C = async (s) => {
      let t = s;
      if (H.FzIsOss === "oss" || l.isOss) {
        if (e.ossInstance === null) {
          const o = await U({ itemcode: l.itemcode });
          e.ossInstance = o.ossInstance, e.ossConfig = o.config;
        }
        t = await S(
          e.ossInstance,
          e.ossConfig,
          s
        );
      }
      try {
        const o = await $(t, l.uploadUrl), { isSuccess: i, errorMsg: c, errmsg: r } = o.data || {};
        i === !1 || i === "false" ? (window.$Message.error(`上传失败:${c || r}`), e.failFiels.push(s)) : (e.successFiles.push(s), e.failFiels.length + e.successFiles.length === e.files.length && (window.$Message.success("上传成功"), B(e.successFiles), m("on-cancel")));
      } catch (o) {
        window.$Message.error(`上传失败:${o}`);
      }
      e.loading = !1;
    }, M = (s) => {
      e.files.splice(s, 1);
    }, b = () => {
      m("on-cancel");
    };
    return (s, t) => {
      const o = d("Icon"), i = d("Upload"), c = d("Button");
      return u(), f("div", q, [
        n(i, {
          type: "drag",
          multiple: s.multiple,
          accept: s.accept,
          "before-upload": y,
          action: ""
        }, {
          default: p(() => [
            a("div", null, [
              n(o, {
                type: "ios-cloud-upload",
                size: "80",
                style: { color: "#3399ff" }
              }),
              a("p", null, g(h.value), 1)
            ])
          ]),
          _: 1
        }, 8, ["multiple", "accept"]),
        a("div", L, [
          (u(!0), f(k, null, j(e.files, (r, z) => (u(), f("p", {
            class: "cd-upload-wrap-cont-item",
            key: z
          }, [
            a("span", null, g(r.name), 1),
            n(o, {
              class: "close",
              type: "ios-close",
              size: "24",
              onClick: M
            })
          ]))), 128))
        ]),
        a("div", N, [
          n(c, {
            class: "btn-l",
            type: "primary",
            loading: e.loading,
            onClick: F
          }, {
            default: p(() => [
              w("上传")
            ]),
            _: 1
          }, 8, ["loading"]),
          n(c, {
            class: "btn-r",
            onClick: b
          }, {
            default: p(() => [
              w("取消")
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
export {
  R as default
};
