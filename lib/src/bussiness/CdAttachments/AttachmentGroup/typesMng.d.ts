/**
 * 分组附件接收属性类型声明
 * @param {Boolean} visible 设置窗口显隐标识
 * @param {Boolean} lookOnly 设置是否只是查看，屏蔽上传、删除按钮
 * @param {String} groupAtttype 分组附件类型
 * @param {String} groupApiType 分组列表类型
 * @param {String} url 子附件列表接口
 * @param {String} attrefsysid 附件id
 * @param {String} itemcode 未知参数
 * @param {String} uploadShow 设置上传按钮显隐标识
 * @param {Boolean} delShow 设置删除按钮显隐标识
 * @param {Boolean} isOss 设置是否oss上传
 */
export interface IProps {
    modelValue: boolean;
    lookOnly: boolean;
    groupAtttype: string;
    groupApiType: string;
    attrefsysid: string;
    url?: string;
    uploadShow?: boolean;
    delShow?: boolean;
    itemcode?: string;
    isOss?: boolean;
}
/**
 * 附件上传参数类型声明
 * @param {Boolean} visible 设置窗口显隐标识
 * @param {String} itemcode 未知参数
 * @param {String} attrefsysid 附件id
 * @param {String} atttype 附件类型
 * @param {Boolean} fileTitleShow 设置上传附件窗口中，标题显隐标识
 * @param {Boolean} isOss 设置是否oss上传
 */
export interface IAttachmentUpload {
    visible: boolean;
    itemcode?: string;
    attrefsysid?: string;
    atttype?: string;
    fileTitleShow?: boolean;
    isOss?: boolean;
}
/**
 * 附件查看参数类型声明
 * @param {Boolean} visible 设置窗口显隐标识
 * @param {String} url 附件列表接口
 * @param {String} attrefsysid 附件id
 * @param {String} atttype 附件类型
 * @param {Boolean} showSearchPanel 设置查询栏显隐标识
 * @param {Array} cusColumns 自定义表头
 * @param {Boolean} uploadShow 设置上传按钮显隐标识
 * @param {Boolean} delShow 设置删除按钮显隐标识
 */
export interface IAttachment {
    visible: boolean;
    url?: string;
    attrefsysid?: string;
    atttype?: boolean;
    showSearchPanel?: boolean;
    cusColumns?: any[];
    uploadShow?: boolean;
    delShow?: boolean;
}
