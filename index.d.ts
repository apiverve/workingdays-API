declare module '@apiverve/workingdays' {
  export interface workingdaysOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface workingdaysResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class workingdaysWrapper {
    constructor(options: workingdaysOptions);

    execute(callback: (error: any, data: workingdaysResponse | null) => void): Promise<workingdaysResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: workingdaysResponse | null) => void): Promise<workingdaysResponse>;
    execute(query?: Record<string, any>): Promise<workingdaysResponse>;
  }
}
