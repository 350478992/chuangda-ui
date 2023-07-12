import { ICommon } from '../../../bussiness/CdAttachments/common/typesMng';
/**
 * 附件列表接收属性类型声明，继承ICommon类型声明
 * @param {String} url 附件列表接口
 * @param {String} showCheckBox 多选设置
 * @param {String} showSearchPanel 查询面板设置
 * @param {String} idKey 唯一键名
 * @param {String} cusColumns 自定义表头
 * @param {String} uploadShow 上传按钮配置
 * @param {String} delShow 删除按钮配置
 * @param {String} imgPreviewType 图片预览模式
 */
export interface IProps extends ICommon {
    url: string;
    showCheckBox: boolean;
    showSearchPanel: boolean;
    idKey?: string;
    cusColumns: any[];
    uploadShow: boolean;
    delShow: boolean;
    imgPreviewType: string;
}
