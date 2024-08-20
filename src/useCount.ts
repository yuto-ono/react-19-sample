import useSWR from "swr"
import { getTotalCount } from "./fetcherMock"

export const useTotalCount = () => {
  const { data, error, isLoading } = useSWR("totalCount", getTotalCount)
  return { count: data?.count, error, isLoading }
}
