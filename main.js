import {div_1_sizes, div_2_sizes, PREBID_TIMEOUT} from "./src/constant.js";
import {adUnitsF} from "./src/adUnits.js";



    googletag.cmd.push(function() {
        googletag.pubads().disableInitialLoad();
    });


    pbjs.que.push(function() {
        pbjs.addAdUnits(adUnitsF(div_1_sizes,div_2_sizes));
        pbjs.requestBids({
            bidsBackHandler: renderWinningBids,
            timeout: PREBID_TIMEOUT
        });
    });


    // function renderWinningBids() {
    //   var winningBids = pbjs.getHighestCpmBids();
    //   winningBids.forEach(function(bid) {
    //     var adUnitCode = bid.adUnitCode;
    //     pbjs.renderAd(document, adUnitCode);
    //   });
    // }


    function renderWinningBids() {
        var winningBids = pbjs.getHighestCpmBids();
        winningBids.forEach(function(bid) {
            var adUnitCode = bid.adUnitCode;

            var iframe = document.createElement('iframe');
            iframe.width = bid.width + 'px';
            iframe.height = bid.height + 'px';
            iframe.style.overflow = 'hidden';

            iframe.srcdoc = '<html><head><title>Ad</title></head><body>' + bid.ad + '</body></html>';

            var adContainer = document.getElementById(adUnitCode);
            adContainer.appendChild(iframe);
        });
    }

