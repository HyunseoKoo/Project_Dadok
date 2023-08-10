import { useQuery } from "@tanstack/react-query"
import searchBookApi from "../api/KakaoApi"

interface Documents {
    authors: string[],
    contents: string,
    datetime: string,
    isbn: string,
    price: number,
    publisher: string,
    sale_price: number,
    status: string,
    thumbnail: string,
    title: string
}

interface Meta {
    is_end: boolean,
    pageable_count: number,
    total_count: number
}

// {documents: Array(5), meta: {…}}
let resType: {documents: Documents[], meta: Meta}

export const useGetSearchBooks = (props: string) => {
    const { isLoading, isError, data } = useQuery<boolean, boolean, typeof resType>({
        queryKey: ['searchedBookList', props],
        queryFn: () => searchBookApi(props),
    });
    return {isLoading, isError, data};
}

/**
 const getData = useQuery<queyFn에서 반환된 타입, queryFn에서 예상되는 오류 타입, 최종적으로 보유하게 될 데이터 타입, queryKey의 타입>
 */