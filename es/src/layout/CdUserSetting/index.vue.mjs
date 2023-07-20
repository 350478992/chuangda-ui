import { defineComponent as w, inject as e, resolveComponent as n, openBlock as a, createElementBlock as m, createVNode as c, withCtx as t, Fragment as U, renderList as x, unref as f, createBlock as y, createTextVNode as _, toDisplayString as h, createElementVNode as g } from "vue";
import P from "../../assets/images/user-img.png.mjs";
import "./style/index.css";
import F from "@/config";
import { useRouter as G } from "vue-router";
import M from "./useUserOperas.mjs";
const V = { class: "cd-user-opera" }, b = { href: "javascript:void(0)" }, j = /* @__PURE__ */ g("img", {
  class: "avatar",
  src: P
}, null, -1), E = w({ name: "CdUserSetting" }), J = /* @__PURE__ */ w({
  ...E,
  setup(H) {
    G();
    const D = e("store_userInfo");
    e(
      "loginoutHandle"
    );
    const O = {
      baseInfo: () => {
        console.log("基本信息");
      },
      pwdModify: () => {
      },
      themeSwitch: () => {
      },
      version: () => {
      },
      reFreshCache: () => {
      },
      menuStyleSwitch: () => {
      },
      roleChange: () => {
      },
      downLoadPdf: () => {
        const o = Date.parse(/* @__PURE__ */ new Date()) / 1e3;
        window.open(
          `${F.eformBaseUrl}/plugin/BatchPrintSetup.rar?t=${o}`
        );
      },
      downUseGuidePdf: () => {
      },
      useGuidePdfHandel: () => {
      },
      contact: () => {
      },
      logout: () => {
        console.log("退出登录");
      }
    }, { operasAdd: C, operasDel: I, operasUpdate: v, operasGet: N } = M(O), p = e("userOperas") || [];
    p.length && C(p);
    const d = e("hideOperasName") || [];
    d.length && I(d);
    const i = e("updateOperas") || [];
    i.length && v(i);
    const l = N(), S = (o) => {
      const r = l.find(
        (s) => s.name === o
      );
      r.func && r.func();
    };
    return (o, r) => {
      const s = n("Icon"), $ = n("DropdownItem"), k = n("DropdownMenu"), B = n("Dropdown");
      return a(), m("div", V, [
        c(B, {
          class: "cd-user-opera-dropdown",
          transfer: "",
          onOnClick: S
        }, {
          list: t(() => [
            c(k, null, {
              default: t(() => [
                (a(!0), m(U, null, x(f(l), (u) => (a(), y($, {
                  name: u.name
                }, {
                  default: t(() => [
                    _(h(u.label), 1)
                  ]),
                  _: 2
                }, 1032, ["name"]))), 256))
              ]),
              _: 1
            })
          ]),
          default: t(() => [
            g("a", b, [
              j,
              _(" " + h(f(D).userName) + " ", 1),
              c(s, { type: "ios-arrow-down" })
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  J as default
};
