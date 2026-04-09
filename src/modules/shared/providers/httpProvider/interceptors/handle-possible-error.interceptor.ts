import { AxiosResponse } from "axios";

export const handlePossibleError = (response: AxiosResponse, error: any) => {
	const status = response?.status;

	if (status >= 400) {
		console.error("Error en la respuesta HTTP:", response);
	}

	return response;
};
