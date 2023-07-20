import { defineComponent as v, computed as p, ref as O, onBeforeMount as B, reactive as c, provide as T, resolveComponent as f, openBlock as d, createElementBlock as _, createVNode as y, withCtx as U, unref as A, createBlock as h, createCommentVNode as w } from "vue";
import { getGroupAttList as P } from "@/api/system";
import { CdButton as S } from "../../../basic/CdButton/index.mjs";
import $ from "../Attachment/index.vue.mjs";
import x from "../AttachmentUpload/index.vue.mjs";
const M = v({ name: "CdAttachmentGroup" }), N = /* @__PURE__ */ v({
  ...M,
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
  setup(g, { emit: V }) {
    const t = g, i = p({
      get: () => t.modelValue,
      set: (a) => {
        V("update:modelValue", a);
      }
    }), b = p(() => [
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
          const n = [
            a(
              S,
              {
                size: "small",
                style: { marginRight: "10px" },
                onclick: () => k(o)
              },
              "上传"
            ),
            a(
              S,
              {
                size: "small",
                onclick: () => C(o)
              },
              `查看${o.attSum}`
            )
          ];
          return t.lookOnly && n.splice(0, 1), a("div", n);
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
        const { isSuccess: o, errorMsg: n, errmsg: r, data: s } = a.data || {};
        o ? u.value = s : window.$Message.error(n || r);
      });
    };
    B(() => {
      m();
    });
    const l = c({
      visible: !1
    }), k = (a) => {
      l.visible = !0, l.itemcode = t.itemcode, l.isOss = t.isOss, l.attrefsysid = t.attrefsysid, l.atttype = a.atttype, l.fileTitleShow = !1;
    }, e = c({
      visible: !1
    }), C = (a) => {
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
      const n = f("Table"), r = f("CdModal");
      return d(), _("div", null, [
        y(r, {
          modelValue: i.value,
          "onUpdate:modelValue": o[0] || (o[0] = (s) => i.value = s),
          title: "附件分组列表",
          "footer-hide": !0,
          onOnCancel: o[1] || (o[1] = (s) => i.value = !1)
        }, {
          default: U(() => [
            y(n, {
              data: A(u),
              columns: b.value,
              border: ""
            }, null, 8, ["data", "columns"])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        l.visible ? (d(), h(x, {
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
  N as default
};
