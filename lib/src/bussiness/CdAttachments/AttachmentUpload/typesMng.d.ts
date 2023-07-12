import { ICommon, IForm, IUpload } from '../../../bussiness/CdAttachments/common/typesMng';
/**
 * index组件，接收的属性，继承ICommon类型声明
 */
export interface IProps_index extends ICommon {
}
/**
 * index组件，表单属性，继承IForm类型声明
 */
export interface IFromData_index extends IForm {
}
/**
 * uploadBtn组件，接收的属性，继承IUpload类型声明
 * @param {String} formObj.attCategory 一级标题
 * @param {String} formObj.attClass 二级标题
 * @param {String} formObj.attitle 三级级标题
 */
export interface IProps_uploadBtn extends IUpload {
    formObj: {
        attCategory?: string;
        attClass?: string;
        attitle?: string;
    };
}
/**
 * uploadBtn组件，上传功能相关属性类型
 * @param {Array} files 附件数据
 * @param {Array} successFiles 上传成功的附件
 * @param {Array} failFiels 上传失败的附件
 * @param {Object} ossInstance OSS实例
 * @param {Object} ossConfig OSS配置信息
 * @param {Boolean} loading 加载提示
 */
export interface IUploadObj_uploadBtn {
    files: any[];
    successFiles: any[];
    failFiels: any[];
    ossInstance: any;
    ossConfig: any;
    loading: boolean;
}
/**
 * Qrcode组件，二维码是上传属性
 * @param {String} url 上传地址
 * @param {Object} formData 标题、附件类型、附件id等数据
 */
export interface IProps_qrcode {
    url: string;
    formData: IForm;
}
/**
 * 手机上传地址二维码生成参数类型声明，继承IForm声明类型
 */
export interface IQrcodePrams extends IForm {
}
/**
  * 创建oss实例参数类型声明
  * @param {String} params.itemcode 未知属性
  */
export interface IInitOSSParams {
    itemcode?: string;
}
/**
  * 附件上传请求参数类型声明，继承IForm类型声明
  * @param {String} attfileroute 附件路径（oss上传）
  * @param {String} attname 附件名称（oss上传）
  * @param {String} datasource 数据源（oss上传）
  */
export interface IUploadRequest extends IForm {
    attfileroute?: string;
    attname?: string;
    datasource?: string;
}
