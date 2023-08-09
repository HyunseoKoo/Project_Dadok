import { useQuery } from "@tanstack/react-query"
import searchBookApi from "../api/KakaoApi"

export const useGetSearchBooks = (props: any) => {
    const { isLoading, isError, data } = useQuery({
        queryKey: ['searchedBookList'],
        queryFn: () => searchBookApi(props.title),
    });
    return {isLoading, isError, data};
}