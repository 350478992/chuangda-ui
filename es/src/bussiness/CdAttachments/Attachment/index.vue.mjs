import { defineComponent as _, useAttrs as F, computed as L, reactive as D, ref as A, provide as U, resolveComponent as c, openBlock as u, createBlock as m, withCtx as s, createVNode as o, unref as v, createElementVNode as T, createTextVNode as V, createCommentVNode as C, mergeProps as R } from "vue";
import { api_attachmentBatchDelete as O } from "@/api/system";
import P from "../../../basic/CdModal/index.vue.mjs";
import J from "../../CdPageList/PageListSimple/index.vue.mjs";
import h from "../../../basic/CdButton/index.vue.mjs";
import M from "../../../basic/CdInput/index.vue.mjs";
import N from "../../../basic/CdDatePickerRange/index.vue.mjs";
import y from "../../../basic/CdSelect/index.vue.mjs";
import q from "../AttachmentUpload/index.vue.mjs";
import H from "./useGetColumns.mjs";
const E = { style: { display: "flex" } }, G = _({ name: "CdAttachment" }), te = /* @__PURE__ */ _({
  ...G,
  props: {
    url: { default: "/api/eqm/attachment/listAttachmentInfo" },
    showCheckBox: { type: Boolean, default: !0 },
    showSearchPanel: { type: Boolean, default: !0 },
    idKey: {},
    cusColumns: { default: () => [] },
    uploadShow: { type: Boolean, default: !0 },
    delShow: { type: Boolean, default: !0 },
    imgPreviewType: { default: "newTag" },
    modelValue: { type: Boolean },
    fileTitleShow: { type: Boolean, default: !0 },
    attCategoryDisabled: { type: Boolean },
    attClassDisabled: { type: Boolean },
    attitleDisabled: { type: Boolean },
    attrefsysid: {},
    atttype: {},
    attCategory: {},
    attClass: {},
    attitle: {}
  },
  emits: [
    "update:modelValue",
    "on-del-success",
    "on-upload-success"
  ],
  setup(b, { emit: p }) {
    const t = b, B = F(), w = L({
      get: () => t.modelValue,
      set: (n) => {
        p("update:modelValue", n);
      }
    }), a = D({
      attrefsysid: t.attrefsysid || "",
      atttype: t.atttype || "",
      attCategory: t.attCategory || "",
      attClass: t.attClass || "",
      attitle: t.attitle || "",
      attnameLike: "",
      createDateBefore: "",
      createDateAfter: ""
    }), k = () => {
      a.attCategory = "", a.attClass = "", a.attitle = "";
    }, S = H(t), g = (n) => {
      n === 1 && (a.attClass = ""), a.attitle = "";
    }, i = A(), $ = () => {
      const { selectedRows: n } = i.value.tableOptions;
      if (!n.length)
        return window.$Message.warning("请选择数据");
      window.$Modal.confirm({
        title: "操作提示",
        content: `本次选择了${n.length}数据, 确认是否要删除`,
        loading: !0,
        onOk: () => {
          const e = n.map((r) => r.attsysid);
          O(e).then((r) => {
            r || (p("on-del-success", n), window.$Message.success("删除成功"), i.value.query()), window.$Modal.remove();
          });
        }
      });
    };
    U("onUploadSuccessHandle", (n) => {
      i.value.query(), p("on-upload-success", n);
    });
    const d = D({
      visible: !1
    });
    return (n, e) => {
      const r = c("Form-item"), f = c("Col"), x = c("Row");
      return u(), m(P, {
        modelValue: w.value,
        "onUpdate:modelValue": e[10] || (e[10] = (l) => w.value = l),
        width: "1000",
        title: "附件管理",
        "footer-hide": !0
      }, {
        default: s(() => [
          o(J, {
            ref_key: "pageListRef",
            ref: i,
            url: t.url,
            showCheckBox: t.showCheckBox,
            showSearch: t.showSearchPanel,
            isSearchOnActive: !1,
            searchForm: a,
            isLocalColumns: !0,
            localColumns: v(S),
            onOnReset: k
          }, {
            search: s(() => [
              o(x, null, {
                default: s(() => [
                  o(f, { span: 12 }, {
                    default: s(() => [
                      o(r, { label: "附件标题" }, {
                        default: s(() => [
                          T("div", E, [
                            o(y, {
                              class: "flex1",
                              modelValue: a.attCategory,
                              "onUpdate:modelValue": e[0] || (e[0] = (l) => a.attCategory = l),
                              type: "SCFJFL2.0",
                              "p-val": "SCFJFL2.0",
                              onOnChange: e[1] || (e[1] = (l) => g(1))
                            }, null, 8, ["modelValue"]),
                            o(y, {
                              class: "flex1",
                              modelValue: a.attClass,
                              "onUpdate:modelValue": e[2] || (e[2] = (l) => a.attClass = l),
                              type: "SCFJFL2.0",
                              "p-val": a.attCategory,
                              onOnChange: e[3] || (e[3] = (l) => g(2))
                            }, null, 8, ["modelValue", "p-val"]),
                            o(y, {
                              class: "flex1",
                              modelValue: a.attitle,
                              "onUpdate:modelValue": e[4] || (e[4] = (l) => a.attitle = l),
                              type: "SCFJFL2.0",
                              "p-val": a.attClass
                            }, null, 8, ["modelValue", "p-val"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  o(f, { span: 12 }, {
                    default: s(() => [
                      o(r, {
                        label: "文件名",
                        prop: "attnameLike"
                      }, {
                        default: s(() => [
                          o(M, {
                            modelValue: a.attnameLike,
                            "onUpdate:modelValue": e[5] || (e[5] = (l) => a.attnameLike = l),
                            placeholder: "请输入文件名"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  o(f, { span: 12 }, {
                    default: s(() => [
                      o(r, { label: "上传时间" }, {
                        default: s(() => [
                          o(N, {
                            keys: ["createDateBefore", "createDateAfter"],
                            startDate: a.createDateBefore,
                            "onUpdate:startDate": e[6] || (e[6] = (l) => a.createDateBefore = l),
                            endDate: a.createDateAfter,
                            "onUpdate:endDate": e[7] || (e[7] = (l) => a.createDateAfter = l)
                          }, null, 8, ["startDate", "endDate"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            function: s(() => [
              t.uploadShow ? (u(), m(h, {
                key: 0,
                type: "text",
                icon: "upload",
                "icon-render": "svg",
                onClick: e[8] || (e[8] = (l) => d.visible = !0)
              }, {
                default: s(() => [
                  V(" 上传 ")
                ]),
                _: 1
              })) : C("", !0),
              t.delShow ? (u(), m(h, {
                key: 1,
                type: "text",
                icon: "del",
                "icon-render": "svg",
                onClick: $
              }, {
                default: s(() => [
                  V(" 删除 ")
                ]),
                _: 1
              })) : C("", !0)
            ]),
            _: 1
          }, 8, ["url", "showCheckBox", "showSearch", "searchForm", "localColumns"]),
          d.visible ? (u(), m(q, R({
            key: 0,
            modelValue: d.visible,
            "onUpdate:modelValue": e[9] || (e[9] = (l) => d.visible = l),
            fileTitleShow: t.fileTitleShow,
            attrefsysid: t.attrefsysid,
            atttype: t.atttype,
            attCategory: t.attCategory,
            attClass: t.attClass,
            attitle: t.attitle,
            attCategoryDisabled: t.attCategoryDisabled,
            attClassDisabled: t.attClassDisabled,
            attitleDisabled: t.attitleDisabled
          }, v(B)), null, 16, ["modelValue", "fileTitleShow", "attrefsysid", "atttype", "attCategory", "attClass", "attitle", "attCategoryDisabled", "attClassDisabled", "attitleDisabled"])) : C("", !0)
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
export {
  te as default
};
