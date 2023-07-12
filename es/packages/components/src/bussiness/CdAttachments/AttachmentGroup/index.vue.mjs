import { defineComponent as C, computed as p, ref as O, onBeforeMount as B, reactive as c, provide as T, resolveComponent as f, openBlock as d, createElementBlock as U, createVNode as y, withCtx as _, unref as x, createBlock as h, createCommentVNode as w } from "vue";
import { getGroupAttList as P } from "@/api/system";
import { CdButton as S } from "../../../basic/CdButton/index.mjs";
import $ from "../Attachment/index.vue.mjs";
import A from "../AttachmentUpload/index.vue.mjs";
const G = /* @__PURE__ */ C({
  __name: "index",
  props: {
    modelValue: { type: Boolean },
    lookOnly: { type: Boolean },
    groupAtttype: {},
    groupApiType: {},
    attrefsysid: {},
    url: {},
    uploadShow: { type: Boolean, default: !1 },
    delShow: { type: Boolean, default: !0 },
    itemcode: {},
    isOss: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(v, { emit: g }) {
    const t = v, n = p({
      get: () => t.modelValue,
      set: (a) => {
        g("update:modelValue", a);
      }
    }), V = p(() => [
      {
        title: "序号",
        type: "index",
        align: "center",
        width: 80
      },
      {
        title: "操作",
        align: "center",
        width: 160,
        render: (a, { row: o }) => {
          const i = [
            a(
              S,
              {
                size: "small",
                style: { marginRight: "10px" },
                onclick: () => b(o)
              },
              "上传"
            ),
            a(
              S,
              {
                size: "small",
                onclick: () => k(o)
              },
              `查看${o.attSum}`
            )
          ];
          return t.lookOnly && i.splice(0, 1), a("div", i);
        }
      },
      {
        title: "材料名称",
        key: "attname",
        align: "center"
      }
    ]);
    let u = O([]);
    const m = () => {
      P(
        {
          id: t.attrefsysid,
          attGroupType: t.groupAtttype
        },
        t.groupApiType
      ).then((a) => {
        const { isSuccess: o, errorMsg: i, errmsg: r, data: s } = a.data || {};
        o ? u.value = s : window.$Message.error(i || r);
      });
    };
    B(() => {
      m();
    });
    const l = c({
      visible: !1
    }), b = (a) => {
      l.visible = !0, l.itemcode = t.itemcode, l.isOss = t.isOss, l.attrefsysid = t.attrefsysid, l.atttype = a.atttype, l.fileTitleShow = !1;
    }, e = c({
      visible: !1
    }), k = (a) => {
      e.visible = !0, e.atttype = a.atttype, e.showSearchPanel = !1, e.url = t.url, e.attrefsysid = t.attrefsysid, e.uploadShow = t.lookOnly ? !1 : t.uploadShow, e.delShow = t.lookOnly ? !1 : t.delShow, e.cusColumns = [
        {
          comments: "材料名称",
          name: "attname",
          align: "center"
        },
        {
          comments: "上传时间",
          name: "createDate",
          align: "center"
        }
      ];
    };
    return T("onUploadSuccessHandle", (a) => {
      m();
    }), (a, o) => {
      const i = f("Table"), r = f("CdModal");
      return d(), U("div", null, [
        y(r, {
          modelValue: n.value,
          "onUpdate:modelValue": o[0] || (o[0] = (s) => n.value = s),
          title: "附件分组列表",
          "footer-hide": !0,
          onOnCancel: o[1] || (o[1] = (s) => n.value = !1)
        }, {
          default: _(() => [
            y(i, {
              data: x(u),
              columns: V.value,
              border: ""
            }, null, 8, ["data", "columns"])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        l.visible ? (d(), h(A, {
          key: 0,
          modelValue: l.visible,
          "onUpdate:modelValue": o[2] || (o[2] = (s) => l.visible = s),
          itemcode: l.itemcode,
          attrefsysid: l.attrefsysid,
          atttype: l.atttype,
          fileTitleShow: l.fileTitleShow,
          isOss: l.isOss
        }, null, 8, ["modelValue", "itemcode", "attrefsysid", "atttype", "fileTitleShow", "isOss"])) : w("", !0),
        e.visible ? (d(), h($, {
          key: 1,
          modelValue: e.visible,
          "onUpdate:modelValue": o[3] || (o[3] = (s) => e.visible = s),
          url: e.url,
          attrefsysid: e.attrefsysid,
          atttype: e.atttype,
          showSearchPanel: e.showSearchPanel,
          uploadShow: e.uploadShow,
          delShow: e.delShow,
          cusColumns: e.cusColumns
        }, null, 8, ["modelValue", "url", "attrefsysid", "atttype", "showSearchPanel", "uploadShow", "delShow", "cusColumns"])) : w("", !0)
      ]);
    };
  }
});
export {
  G as default
};
