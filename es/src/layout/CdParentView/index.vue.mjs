import { defineComponent as e, resolveComponent as t, openBlock as n, createBlock as r } from "vue";
const _ = e({ name: "CdParentView" }), m = /* @__PURE__ */ e({
  ..._,
  setup(c) {
    return (p, a) => {
      const o = t("router-view");
      return n(), r(o);
    };
  }
});
export {
  m as default
};
