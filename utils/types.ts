// Trending types 
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


// Explore types 
export interface ExplorePokedex {
    id:                               string;
    symbol:                           string;
    name:                             string;
    image:                            string;
    current_price:                    number;
    market_cap:                       number;
    market_cap_rank:                  number;
    fully_diluted_valuation:          number | null;
    total_volume:                     number;
    high_24h:                         number;
    low_24h:                          number;
    price_change_24h:                 number;
    price_change_percentage_24h:      number;
    market_cap_change_24h:            number;
    market_cap_change_percentage_24h: number;
    circulating_supply:               number;
    total_supply:                     number | null;
    max_supply:                       number | null;
    ath:                              number;
    ath_change_percentage:            number;
    ath_date:                         Date;
    atl:                              number;
    atl_change_percentage:            number;
    atl_date:                         Date;
    roi:                              ExploreRoi | null;
    last_updated:                     Date;
}

export interface ExploreRoi {
    times:      number;
    currency:   ExploreCurrency;
    percentage: number;
}

export enum ExploreCurrency {
    Btc = "btc",
    Eth = "eth",
    Usd = "usd",
}
