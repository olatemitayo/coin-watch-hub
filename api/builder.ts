import { createBuilder } from "@ibnlanre/portal";
import { API } from "./axios-config";
import { TrendingPokedex, TrendingPokedexData } from "@/utils/types";

export const builder = createBuilder({
    asset: {
        trending: () => API.get<TrendingPokedexData>('/search/trending'),
        coin_list: () => API.get(`/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en`),
        details: (id: string) => API.get(`/coins/${id}`)
    }
})