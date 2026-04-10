import { BaseResponse } from "@/modules/shared/interfaces/global.interface";
import httpClient from "@/modules/shared/providers/httpProvider/http.service";
import { Category } from "../interfaces/categories.service";

export const getListCategories = (): Promise<BaseResponse<Category[]>> => {
  return httpClient("/categories", {
    method: "get",
  });
};
