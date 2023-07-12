import { IQrcodePrams, IInitOSSParams, IUploadRequest } from '../../../bussiness/CdAttachments/AttachmentUpload/typesMng';
export default function useUploadUtils(): {
    initOSS: (params: IInitOSSParams) => Promise<unknown>;
    uploadByOSS: (ossInstance: any, config: any, formObj: any) => Promise<unknown>;
    uploadRequest: (params: IUploadRequest, apiUrl: string) => Promise<unknown>;
    getQrcodeImgSrc: (params: IQrcodePrams, urlType?: string) => string;
};
