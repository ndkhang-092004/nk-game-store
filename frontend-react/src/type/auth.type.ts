export interface ApiResponse<T> {
  statusCode: number;
  error: string | null;
  message:
    | string
    | {
        statusCode: number;
        error: string;
        message: string;
        data: null;
      };
  data: T | null;
}
