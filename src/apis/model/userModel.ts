//定义请求参数
export type ListParams = {
    id: number; //用户id
  }
  
  export type RowItem = {
    id: number; //文件id
    fileName: string; //文件名
  }
  
  //定义接口返回数据
  export type ListModel = {
    code: number;
    data: RowItem[];
  }
  