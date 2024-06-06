export const adUnitsF =(div_1_sizes, div_2_sizes)=> [
    {
        code: '/19968336/header-bid-tag-0',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [{
            bidder: 'adtelligent',
            params: {
                aid: 350975
            }
        }]
    },
    {
        code: '/19968336/header-bid-tag-1',
        mediaTypes: {
            banner: {
                sizes: div_2_sizes
            }
        },
        bids: [{
            bidder: 'adtelligent',
            params: {
                aid: 350975
            }
        }]
    }
];