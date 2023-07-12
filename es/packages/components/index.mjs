import * as o from "./src/index.mjs";
import { CdIcon as m } from "./src/basic/CdIcon/index.mjs";
import { CdButton as f } from "./src/basic/CdButton/index.mjs";
import { CdSelect as a } from "./src/basic/CdSelect/index.mjs";
import { CdCheckboxGroup as i } from "./src/basic/CdCheckboxGroup/index.mjs";
import { CdRadioGroup as s } from "./src/basic/CdRadioGroup/index.mjs";
import { CdModal as l } from "./src/basic/CdModal/index.mjs";
import { CdInput as P } from "./src/basic/CdInput/index.mjs";
import { CdCascader as k } from "./src/basic/CdCascader/index.mjs";
import { CdDatePicker as G } from "./src/basic/CdDatePicker/index.mjs";
import { CdDatePickerRange as M } from "./src/basic/CdDatePickerRange/index.mjs";
import { CdDateRange as A } from "./src/basic/CdDateRange/index.mjs";
import { CdMoreButton as I } from "./src/basic/CdMoreButton/index.mjs";
import { CdPageList as b } from "./src/bussiness/CdPageList/PageList/index.mjs";
import { CdPageListSimple as $ } from "./src/bussiness/CdPageList/PageListSimple/index.mjs";
import { CdUnitList as q } from "./src/bussiness/CdUnitList/index.mjs";
import { CdMap as w } from "./src/bussiness/CdMap/index.mjs";
import { CdAttachment as z } from "./src/bussiness/CdAttachments/Attachment/index.mjs";
import { CdAttachmentGroup as F } from "./src/bussiness/CdAttachments/AttachmentGroup/index.mjs";
const e = {
  install: (r) => {
    for (const t in o)
      r.use(o[t]);
  }
};
export {
  z as CdAttachment,
  F as CdAttachmentGroup,
  f as CdButton,
  k as CdCascader,
  i as CdCheckboxGroup,
  G as CdDatePicker,
  M as CdDatePickerRange,
  A as CdDateRange,
  m as CdIcon,
  P as CdInput,
  w as CdMap,
  l as CdModal,
  I as CdMoreButton,
  b as CdPageList,
  $ as CdPageListSimple,
  s as CdRadioGroup,
  a as CdSelect,
  q as CdUnitList,
  e as default
};
