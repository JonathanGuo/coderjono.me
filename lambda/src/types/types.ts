export interface IHeaders {
    [key: string] : string;
}

export interface IResponse {
    statusCode: number;
    body: string;
    headers: IHeaders;
}
