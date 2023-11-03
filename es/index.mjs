import * as o from "./src/index.mjs";
import { CdIcon as p } from "./src/basic/CdIcon/index.mjs";
import { CdButton as f } from "./src/basic/CdButton/index.mjs";
import { CdSelect as a } from "./src/basic/CdSelect/index.mjs";
import { CdCheckboxGroup as i } from "./src/basic/CdCheckboxGroup/index.mjs";
import { CdRadioGroup as c } from "./src/basic/CdRadioGroup/index.mjs";
import { CdInput as u } from "./src/basic/CdInput/index.mjs";
import { CdCascader as F } from "./src/basic/CdCascader/index.mjs";
import { CdDatePicker as S } from "./src/basic/CdDatePicker/index.mjs";
import { CdDatePickerRange as L } from "./src/basic/CdDatePickerRange/index.mjs";
import { CdMoreButton as A } from "./src/basic/CdMoreButton/index.mjs";
import { CdModal as I } from "./src/basic/CdModal/index.mjs";
import { CdTabs as U } from "./src/basic/CdTabs/index.mjs";
import { CdFormField as B } from "./src/bussiness/CdFormField/index.mjs";
import { CdFormItemPanel as R } from "./src/bussiness/CdFormItemPanel/index.mjs";
import { CdPageList as w } from "./src/bussiness/CdPageList/PageList/index.mjs";
import { CdPageListSimple as V } from "./src/bussiness/CdPageList/PageListSimple/index.mjs";
import { CdUnitList as j } from "./src/bussiness/CdUnitSelectModal/index.mjs";
import { CdMap as v } from "./src/bussiness/CdMap/index.mjs";
import { CdAttachmentUpload as z } from "./src/bussiness/CdAttachments/AttachmentUpload/index.mjs";
import { CdAttachment as J } from "./src/bussiness/CdAttachments/Attachment/index.mjs";
import { CdAttachmentGroup as N } from "./src/bussiness/CdAttachments/AttachmentGroup/index.mjs";
import { CdLoginForm as Q } from "./src/bussiness/CdLoginForm/index.mjs";
import { CdHeader as X } from "./src/layout/CdHeader/index.mjs";
import { CdParentView as Z } from "./src/layout/CdParentView/index.mjs";
import { CdFixedSider as oo } from "./src/layout/CdSider/fixedSider/index.mjs";
import { CdFloatSider as eo } from "./src/layout/CdSider/floatSider/index.mjs";
import { CdContentTags as mo } from "./src/layout/CdContentTags/index.mjs";
import { CdUserSetting as xo } from "./src/layout/CdUserSetting/index.mjs";
const t = {
  install: (r) => {
    for (const e in o)
      r.use(o[e]);
  }
};
export {
  J as CdAttachment,
  N as CdAttachmentGroup,
  z as CdAttachmentUpload,
  f as CdButton,
  F as CdCascader,
  i as CdCheckboxGroup,
  mo as CdContentTags,
  S as CdDatePicker,
  L as CdDatePickerRange,
  oo as CdFixedSider,
  eo as CdFloatSider,
  B as CdFormField,
  R as CdFormItemPanel,
  X as CdHeader,
  p as CdIcon,
  u as CdInput,
  Q as CdLoginForm,
  v as CdMap,
  I as CdModal,
  A as CdMoreButton,
  w as CdPageList,
  V as CdPageListSimple,
  Z as CdParentView,
  c as CdRadioGroup,
  a as CdSelect,
  U as CdTabs,
  j as CdUnitList,
  xo as CdUserSetting,
  t as default
};
