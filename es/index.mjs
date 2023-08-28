import * as o from "./src/index.mjs";
import { CdIcon as m } from "./src/basic/CdIcon/index.mjs";
import { CdButton as f } from "./src/basic/CdButton/index.mjs";
import { CdSelect as a } from "./src/basic/CdSelect/index.mjs";
import { CdCheckboxGroup as n } from "./src/basic/CdCheckboxGroup/index.mjs";
import { CdRadioGroup as s } from "./src/basic/CdRadioGroup/index.mjs";
import { CdInput as u } from "./src/basic/CdInput/index.mjs";
import { CdCascader as F } from "./src/basic/CdCascader/index.mjs";
import { CdDatePicker as S } from "./src/basic/CdDatePicker/index.mjs";
import { CdDatePickerRange as L } from "./src/basic/CdDatePickerRange/index.mjs";
import { CdMoreButton as A } from "./src/basic/CdMoreButton/index.mjs";
import { CdModal as M } from "./src/basic/CdModal/index.mjs";
import { CdFormField as B } from "./src/bussiness/CdFormField/index.mjs";
import { CdPageList as I } from "./src/bussiness/CdPageList/PageList/index.mjs";
import { CdPageListSimple as b } from "./src/bussiness/CdPageList/PageListSimple/index.mjs";
import { CdUnitList as H } from "./src/bussiness/CdUnitList/index.mjs";
import { CdMap as V } from "./src/bussiness/CdMap/index.mjs";
import { CdAttachmentUpload as j } from "./src/bussiness/CdAttachments/AttachmentUpload/index.mjs";
import { CdAttachment as v } from "./src/bussiness/CdAttachments/Attachment/index.mjs";
import { CdAttachmentGroup as z } from "./src/bussiness/CdAttachments/AttachmentGroup/index.mjs";
import { CdLoginForm as J } from "./src/bussiness/CdLoginForm/index.mjs";
import { CdHeader as N } from "./src/layout/CdHeader/index.mjs";
import { CdParentView as Q } from "./src/layout/CdParentView/index.mjs";
import { CdFixedSider as X } from "./src/layout/CdSider/fixedSider/index.mjs";
import { CdFloatSider as Z } from "./src/layout/CdSider/floatSider/index.mjs";
import { CdContentTags as oo } from "./src/layout/CdContentTags/index.mjs";
import { CdUserSetting as to } from "./src/layout/CdUserSetting/index.mjs";
const e = {
  install: (r) => {
    for (const t in o)
      r.use(o[t]);
  }
};
export {
  v as CdAttachment,
  z as CdAttachmentGroup,
  j as CdAttachmentUpload,
  f as CdButton,
  F as CdCascader,
  n as CdCheckboxGroup,
  oo as CdContentTags,
  S as CdDatePicker,
  L as CdDatePickerRange,
  X as CdFixedSider,
  Z as CdFloatSider,
  B as CdFormField,
  N as CdHeader,
  m as CdIcon,
  u as CdInput,
  J as CdLoginForm,
  V as CdMap,
  M as CdModal,
  A as CdMoreButton,
  I as CdPageList,
  b as CdPageListSimple,
  Q as CdParentView,
  s as CdRadioGroup,
  a as CdSelect,
  H as CdUnitList,
  to as CdUserSetting,
  e as default
};
