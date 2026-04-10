import { useQuery } from "@tanstack/react-query";
import { getListCategories } from "../services/public.service";

export const useGetListCategories = () => {
  const { data: categoriesList, isFetching: isFetchingCategories } = useQuery({
    queryKey: ["list-categories"],
    queryFn: async () => {
      const response = await getListCategories();
      return response.data;
    },
    initialData: [],
  });

  return { categoriesList, isFetchingCategories };
};
