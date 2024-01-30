import { createBuilder } from "@ibnlanre/portal";
import { API } from "./axios-config";
import { ChartDetails, TrendingPokedex, TrendingPokedexData, individualCoinList } from "@/utils/types";

export const builder = createBuilder({
    asset: {
        trending: () => API.get<TrendingPokedexData>('/search/trending'),
         details: (id: string) => API.get<individualCoinList>(`/coins/${id}`),
         chart: (id: string) => API.get<ChartDetails>(`/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`)
    }
})