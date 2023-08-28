import { defineComponent as h, inject as o, resolveComponent as n, openBlock as a, createElementBlock as m, createVNode as c, withCtx as t, Fragment as x, renderList as y, unref as f, createBlock as P, createTextVNode as _, toDisplayString as w, createElementVNode as g } from "vue";
import F from "../../assets/images/user-img.png.mjs";
import "./style/index.css";
import G from "@/config";
import { useRouter as H } from "vue-router";
import V from "./useUserOperas.mjs";
const b = { class: "cd-user-opera" }, j = { href: "javascript:void(0)" }, E = /* @__PURE__ */ g("img", {
  class: "avatar",
  src: F
}, null, -1), L = h({ name: "CdUserSetting" }), Q = /* @__PURE__ */ h({
  ...L,
  setup(A) {
    const O = H(), D = o("storeUserInfo"), $ = o("loginoutHandle"), C = {
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
        const e = Date.parse(/* @__PURE__ */ new Date()) / 1e3;
        window.open(
          `${G.eformBaseUrl}/plugin/BatchPrintSetup.rar?t=${e}`
        );
      },
      downUseGuidePdf: () => {
      },
      useGuidePdfHandel: () => {
      },
      contact: () => {
      },
      logout: () => {
        window.$Modal.confirm({
          title: "温馨提示",
          content: "你确定要退出登录吗？",
          onOk: () => {
            $().then((e) => {
              console.log(e), e.isSuccess ? (window.$Message.success("已经退出系统"), O.push({
                name: "login"
              })) : window.$Message.error(e.errorMsg);
            });
          }
        });
      }
    }, { operasAdd: I, operasDel: M, operasUpdate: S, operasGet: k } = V(C), d = o("userOperas") || [];
    d.length && I(d);
    const i = o("hideOperasName") || [];
    i.length && M(i);
    const p = o("updateOperas") || [];
    p.length && S(p);
    const l = k(), v = (e) => {
      const r = l.find(
        (s) => s.name === e
      );
      r.func && r.func();
    };
    return (e, r) => {
      const s = n("Icon"), N = n("DropdownItem"), U = n("DropdownMenu"), B = n("Dropdown");
      return a(), m("div", b, [
        c(B, {
          class: "cd-user-opera-dropdown",
          transfer: "",
          onOnClick: v
        }, {
          list: t(() => [
            c(U, null, {
              default: t(() => [
                (a(!0), m(x, null, y(f(l), (u) => (a(), P(N, {
                  name: u.name
                }, {
                  default: t(() => [
                    _(w(u.label), 1)
                  ]),
                  _: 2
                }, 1032, ["name"]))), 256))
              ]),
              _: 1
            })
          ]),
          default: t(() => [
            g("a", j, [
              E,
              _(" " + w(f(D).userName) + " ", 1),
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
  Q as default
};
