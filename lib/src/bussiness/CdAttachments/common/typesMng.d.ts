/**
 * 附件表单属性
 * @param {String} attrefsysid 附件id
 * @param {String} atttype 附件类型
 * @param {String} attCategory 一级标题
 * @param {String} attClass 二级标题
 * @param {String} attitle 三级标题
 */
export interface IForm {
    attrefsysid: string;
    atttype?: string;
    attCategory?: string;
    attClass?: string;
    attitle?: string;
}
/**
 * 附件公共属性
 * @param {String} modelValue 窗口显隐标识
 * @param {String} fileTitleShow 上传窗口，附件标题显隐标识
 * @param {String} attCategoryDisabled 设置一级标题禁用
 * @param {String} attClassDisabled 设置二级标题禁用
 * @param {String} attitleDisabled 设置三级标题禁用
 */
export interface ICommon extends IForm {
    modelValue: boolean;
    fileTitleShow: boolean;
    attCategoryDisabled?: boolean;
    attClassDisabled?: boolean;
    attitleDisabled?: boolean;
}
/**
 * 附件上传配置属性
 * @param {String} uploadUrl 上传接口
 * @param {String} accept 可选文件类型 'image/png, image/jpeg' 或者 '.jpg, .pdf, .doc'
 * @param {Array} format 支持上传的文件类型 ['png', 'jpg']
 * @param {String} itemcode 未知属性
 * @param {Boolean} multiple 设置可批量上传
 * @param {String} maxSize 设置上传的最大阈值
 * @param {Boolean} seletLastTitle 设置附件标题是否必须选择到最后一级
 * @param {Boolean} isOss 独立是否使用oss上传选项，优先级小于全局配置项
 * @param {Function} beforeUploadHandle 上传前回调处理
 */
export interface IUpload {
    uploadUrl?: string;
    accept?: string;
    format?: string[];
    itemcode?: string;
    multiple?: boolean;
    maxSize?: string | number;
    seletLastTitle?: boolean;
    isOss?: boolean;
    beforeUploadHandle?: () => boolean;
}
