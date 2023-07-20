import * as o from "./src/index.mjs";
import { CdIcon as m } from "./src/basic/CdIcon/index.mjs";
import { CdButton as f } from "./src/basic/CdButton/index.mjs";
import { CdSelect as a } from "./src/basic/CdSelect/index.mjs";
import { CdCheckboxGroup as i } from "./src/basic/CdCheckboxGroup/index.mjs";
import { CdRadioGroup as s } from "./src/basic/CdRadioGroup/index.mjs";
import { CdInput as u } from "./src/basic/CdInput/index.mjs";
import { CdCascader as P } from "./src/basic/CdCascader/index.mjs";
import { CdDatePicker as h } from "./src/basic/CdDatePicker/index.mjs";
import { CdDatePickerRange as k } from "./src/basic/CdDatePickerRange/index.mjs";
import { CdMoreButton as F } from "./src/basic/CdMoreButton/index.mjs";
import { CdModal as M } from "./src/basic/CdModal/index.mjs";
import { CdPageList as B } from "./src/bussiness/CdPageList/PageList/index.mjs";
import { CdPageListSimple as I } from "./src/bussiness/CdPageList/PageListSimple/index.mjs";
import { CdUnitList as b } from "./src/bussiness/CdUnitList/index.mjs";
import { CdMap as H } from "./src/bussiness/CdMap/index.mjs";
import { CdAttachmentUpload as V } from "./src/bussiness/CdAttachments/AttachmentUpload/index.mjs";
import { CdAttachment as j } from "./src/bussiness/CdAttachments/Attachment/index.mjs";
import { CdAttachmentGroup as v } from "./src/bussiness/CdAttachments/AttachmentGroup/index.mjs";
import { CdLoginForm as z } from "./src/bussiness/CdLoginForm/index.mjs";
import { CdHeader as J } from "./src/layout/CdHeader/index.mjs";
import { CdParentView as N } from "./src/layout/CdParentView/index.mjs";
import { CdFixedSider as Q } from "./src/layout/CdSider/fixedSider/index.mjs";
import { CdFloatSider as X } from "./src/layout/CdSider/floatSider/index.mjs";
import { CdContentTags as Z } from "./src/layout/CdContentTags/index.mjs";
import { CdUserSetting as oo } from "./src/layout/CdUserSetting/index.mjs";
const e = {
  install: (r) => {
    for (const t in o)
      r.use(o[t]);
  }
};
export {
  j as CdAttachment,
  v as CdAttachmentGroup,
  V as CdAttachmentUpload,
  f as CdButton,
  P as CdCascader,
  i as CdCheckboxGroup,
  Z as CdContentTags,
  h as CdDatePicker,
  k as CdDatePickerRange,
  Q as CdFixedSider,
  X as CdFloatSider,
  J as CdHeader,
  m as CdIcon,
  u as CdInput,
  z as CdLoginForm,
  H as CdMap,
  M as CdModal,
  F as CdMoreButton,
  B as CdPageList,
  I as CdPageListSimple,
  N as CdParentView,
  s as CdRadioGroup,
  a as CdSelect,
  b as CdUnitList,
  oo as CdUserSetting,
  e as default
};
