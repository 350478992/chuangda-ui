import * as o from "./src/index.mjs";
import { CdIcon as p } from "./src/basic/CdIcon/index.mjs";
import { CdButton as f } from "./src/basic/CdButton/index.mjs";
import { CdSelect as a } from "./src/basic/CdSelect/index.mjs";
import { CdCheckboxGroup as i } from "./src/basic/CdCheckboxGroup/index.mjs";
import { CdRadioGroup as s } from "./src/basic/CdRadioGroup/index.mjs";
import { CdInput as u } from "./src/basic/CdInput/index.mjs";
import { CdCascader as F } from "./src/basic/CdCascader/index.mjs";
import { CdDatePicker as S } from "./src/basic/CdDatePicker/index.mjs";
import { CdDatePickerRange as L } from "./src/basic/CdDatePickerRange/index.mjs";
import { CdMoreButton as A } from "./src/basic/CdMoreButton/index.mjs";
import { CdModal as I } from "./src/basic/CdModal/index.mjs";
import { CdFormField as U } from "./src/bussiness/CdFormField/index.mjs";
import { CdFormItemPanel as D } from "./src/bussiness/CdFormItemPanel/index.mjs";
import { CdPageList as b } from "./src/bussiness/CdPageList/PageList/index.mjs";
import { CdPageListSimple as H } from "./src/bussiness/CdPageList/PageListSimple/index.mjs";
import { CdUnitList as V } from "./src/bussiness/CdUnitList/index.mjs";
import { CdMap as j } from "./src/bussiness/CdMap/index.mjs";
import { CdAttachmentUpload as v } from "./src/bussiness/CdAttachments/AttachmentUpload/index.mjs";
import { CdAttachment as z } from "./src/bussiness/CdAttachments/Attachment/index.mjs";
import { CdAttachmentGroup as J } from "./src/bussiness/CdAttachments/AttachmentGroup/index.mjs";
import { CdLoginForm as N } from "./src/bussiness/CdLoginForm/index.mjs";
import { CdHeader as Q } from "./src/layout/CdHeader/index.mjs";
import { CdParentView as X } from "./src/layout/CdParentView/index.mjs";
import { CdFixedSider as Z } from "./src/layout/CdSider/fixedSider/index.mjs";
import { CdFloatSider as oo } from "./src/layout/CdSider/floatSider/index.mjs";
import { CdContentTags as eo } from "./src/layout/CdContentTags/index.mjs";
import { CdUserSetting as mo } from "./src/layout/CdUserSetting/index.mjs";
const t = {
  install: (r) => {
    for (const e in o)
      r.use(o[e]);
  }
};
export {
  z as CdAttachment,
  J as CdAttachmentGroup,
  v as CdAttachmentUpload,
  f as CdButton,
  F as CdCascader,
  i as CdCheckboxGroup,
  eo as CdContentTags,
  S as CdDatePicker,
  L as CdDatePickerRange,
  Z as CdFixedSider,
  oo as CdFloatSider,
  U as CdFormField,
  D as CdFormItemPanel,
  Q as CdHeader,
  p as CdIcon,
  u as CdInput,
  N as CdLoginForm,
  j as CdMap,
  I as CdModal,
  A as CdMoreButton,
  b as CdPageList,
  H as CdPageListSimple,
  X as CdParentView,
  s as CdRadioGroup,
  a as CdSelect,
  V as CdUnitList,
  mo as CdUserSetting,
  t as default
};
