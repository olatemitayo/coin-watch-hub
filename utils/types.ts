export interface TrendingPokedex {
    data: TrendingPokedexData;
}

export interface TrendingPokedexData {
    coins:      TrendingCoin[];
    nfts:       TrendingNft[];
    categories: any[];
}

export interface TrendingCoin {
    item: TrendingItem;
}

export interface TrendingItem {
    id:              string;
    coin_id:         number;
    name:            string;
    symbol:          string;
    market_cap_rank: number;
    thumb:           string;
    small:           string;
    large:           string;
    slug:            string;
    price_btc:       number;
    score:           number;
    data:            TrendingItemData;
}

export interface TrendingItemData {
    price:                       string;
    price_btc:                   string;
    price_change_percentage_24h: { [key: string]: number };
    market_cap:                  string;
    market_cap_btc:              string;
    total_volume:                string;
    total_volume_btc:            string;
    sparkline:                   string;
    content:                     TrendingContent | null;
}

export interface TrendingContent {
    title:       string;
    description: string;
}

export interface TrendingNft {
    id:                                string;
    name:                              string;
    symbol:                            string;
    thumb:                             string;
    nft_contract_id:                   number;
    native_currency_symbol:            string;
    floor_price_in_native_currency:    number;
    floor_price_24h_percentage_change: number;
    data:                              TrendingNftData;
}

export interface TrendingNftData {
    floor_price:                              string;
    floor_price_in_usd_24h_percentage_change: string;
    h24_volume:                               string;
    h24_average_sale_price:                   string;
    sparkline:                                string;
    content:                                  TrendingContent | null;
}
