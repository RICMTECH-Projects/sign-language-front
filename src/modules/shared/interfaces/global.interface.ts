export interface BaseResponse<T = null> {
	status: string;
	message: string;
	data: T;
}
