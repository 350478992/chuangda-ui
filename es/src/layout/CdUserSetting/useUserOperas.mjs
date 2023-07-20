function m(c) {
  let e = [
    { name: "baseInfo", label: "基础信息", func: () => {
    } },
    { name: "pwdModify", label: "修改密码", func: () => {
    } },
    { name: "themeSwitch", label: "切换主题风格", func: () => {
    } },
    { name: "version", label: "版本信息", func: () => {
    } },
    { name: "reFreshCache", label: "清空缓存", func: () => {
    } },
    { name: "menuStyleSwitch", label: "切换菜单风格", func: () => {
    } },
    { name: "roleChange", label: "电梯检测", func: () => {
    } },
    { name: "downLoadPdf", label: "下载打印软件", func: () => {
    } },
    { name: "downUseGuidePdf", label: "使用手册", func: () => {
    } },
    { name: "useGuidePdfHandel", label: "资源（手册）下载", func: () => {
    } },
    { name: "contact", label: "客服中心", func: () => {
    } },
    { name: "logout", label: "退出登录", func: () => {
    } }
  ];
  for (const n of e)
    c[n.name] && (n.func = c[n.name]);
  return console.log(e), {
    operasAdd: (n) => (e.splice(e.length - 1, 0, ...n), e),
    operasDel: (n) => (e = e.filter((a) => !n.includes(a.name)), e),
    operasGet: () => e,
    operasUpdate: (n) => {
      for (let a = 0; a < e.length; a++) {
        const l = e[a];
        for (let o = 0; o < n.length; o++) {
          const t = n[o];
          l.name === t.name && (l.name = t.name, l.label = t.label, l.func = t.func || (() => {
          }));
        }
      }
    }
  };
}
export {
  m as default
};
