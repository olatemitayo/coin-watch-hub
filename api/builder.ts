import { createBuilder } from "@ibnlanre/portal";
import { API } from "./axios-config";
import { TrendingPokedex, TrendingPokedexData } from "@/utils/types";

export const builder = createBuilder({
    asset: {
        trending: () => API.get<TrendingPokedexData>('/search/trending?x_cg_demo_api_key=CG-y9zWnypAyHUvrHhBEhuyGrwP')
    }
})