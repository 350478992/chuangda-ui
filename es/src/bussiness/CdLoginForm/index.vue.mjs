import { defineComponent as b, ref as i, computed as q, resolveComponent as d, openBlock as p, createElementBlock as C, createElementVNode as l, toDisplayString as V, renderSlot as _, createVNode as t, withKeys as E, withCtx as n, createBlock as D, createCommentVNode as y, createTextVNode as $ } from "vue";
import "./style/index.css";
const K = { class: "cd-login-form" }, M = { class: "cd-login-form-cont" }, z = { class: "cd-login-form-cont-top" }, L = ["src"], P = { class: "ttl" }, R = { class: "cd-login-form-cont-main" }, j = { class: "cd-verify-code" }, A = ["src"], G = { class: "cd-password-remenber" }, H = {
  key: 0,
  href: "javascript:void(0);"
}, J = { class: "tip" }, O = /* @__PURE__ */ l("div", { class: "cd-login-form-tip" }, "推荐使用chrome浏览器和1920*1080分辨率", -1), Q = b({ name: "CdLoginForm" }), Z = /* @__PURE__ */ b({
  ...Q,
  props: {
    logo: String,
    systemTitle: String,
    isNeedValidateCode: Boolean,
    showForgetPwdBtn: Boolean
  },
  emits: ["on-login-submit"],
  setup(k, { expose: N, emit: T }) {
    const m = k, e = i({
      username: "1",
      password: "",
      validateCode: "",
      remenber: "",
      randomNum: ""
    }), B = {
      username: { required: !0, message: "请输入账号" },
      password: { required: !0, message: "请输入密码" },
      validateCode: { required: !0, message: "请输入验证码" }
    }, F = q(() => {
      const o = (/* @__PURE__ */ new Date()).getTime();
      return e.value.randomNum = `${o}${Math.random() * 1e5}`, `${window.$baseRequestUrl}/servlet/validateCodeServlet?${o}&randomNum=${e.value.randomNum}`;
    }), U = () => {
      e.value.randomNum = `${(/* @__PURE__ */ new Date()).getTime()}${Math.random() * 1e5}`;
    }, v = i(), g = i(!1), f = () => {
      u(!0), v.value.validate((o) => {
        o ? T("on-login-submit", e.value) : u(!1);
      });
    }, u = (o) => {
      g.value = o;
    }, h = i("");
    return N({
      onLoadingUpdate: u,
      onErrorTipUpdate: (o) => {
        h.value = o;
      }
    }), (o, s) => {
      const w = d("Icon"), c = d("Input"), r = d("FormItem"), I = d("Checkbox"), S = d("Button"), x = d("Form");
      return p(), C("div", K, [
        l("div", M, [
          l("div", z, [
            l("img", {
              class: "logo",
              src: m.logo
            }, null, 8, L),
            l("p", P, V(m.systemTitle), 1),
            _(o.$slots, "subTtl")
          ]),
          l("div", R, [
            _(o.$slots, "contMain", { form: e.value }, () => [
              t(x, {
                ref_key: "loginForm",
                ref: v,
                model: e.value,
                rules: B,
                onKeydown: E(f, ["enter", "native"])
              }, {
                default: n(() => [
                  t(r, { prop: "username" }, {
                    default: n(() => [
                      t(c, {
                        modelValue: e.value.username,
                        "onUpdate:modelValue": s[0] || (s[0] = (a) => e.value.username = a),
                        placeholder: "请输入用户名"
                      }, {
                        prepend: n(() => [
                          t(w, {
                            size: 16,
                            type: "ios-person"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  t(r, { prop: "password" }, {
                    default: n(() => [
                      t(c, {
                        type: "password",
                        modelValue: e.value.password,
                        "onUpdate:modelValue": s[1] || (s[1] = (a) => e.value.password = a),
                        placeholder: "请输入密码"
                      }, {
                        prepend: n(() => [
                          t(w, {
                            size: 14,
                            type: "md-lock"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  m.isNeedValidateCode ? (p(), D(r, {
                    key: 0,
                    prop: "validateCode"
                  }, {
                    default: n(() => [
                      l("div", j, [
                        t(c, {
                          modelValue: e.value.validateCode,
                          "onUpdate:modelValue": s[2] || (s[2] = (a) => e.value.validateCode = a),
                          placeholder: "请输入验证码"
                        }, null, 8, ["modelValue"]),
                        l("img", {
                          class: "passcode",
                          src: F.value,
                          onClick: U
                        }, null, 8, A)
                      ])
                    ]),
                    _: 1
                  })) : y("", !0),
                  t(r, null, {
                    default: n(() => [
                      l("div", G, [
                        t(I, {
                          modelValue: e.value.remenber,
                          "onUpdate:modelValue": s[3] || (s[3] = (a) => e.value.remenber = a)
                        }, {
                          default: n(() => [
                            $("记住登录名")
                          ]),
                          _: 1
                        }, 8, ["modelValue"]),
                        m.showForgetPwdBtn ? (p(), C("a", H, " 忘记密码？ ")) : y("", !0)
                      ])
                    ]),
                    _: 1
                  }),
                  t(r, null, {
                    default: n(() => [
                      t(S, {
                        type: "primary",
                        long: "",
                        loading: g.value,
                        onClick: f
                      }, {
                        default: n(() => [
                          $(" 登录 ")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model", "onKeydown"])
            ]),
            l("p", J, V(h.value), 1)
          ])
        ]),
        O,
        _(o.$slots, "extraCont")
      ]);
    };
  }
});
export {
  Z as default
};
