// LIST ALL NFT IN WAX ID
fetch("https://wax.api.aa.atomichub.io/atomicmarket/v1/assets", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"96\", \"Opera\";v=\"82\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://wax.atomichub.io/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"limit\":\"100\",\"order\":\"desc\",\"owner\":\"gj1xc.wam\",\"sort\":\"transferred\",\"page\":\"1\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});





$(document).ready(function() {
    
    window.onload = function (){
        
        window['waxserver'] = {}; window['waxserver']['endpoint'] = [
			//	{
			//		'headers' : {
			//			'x-requested-with' 		: 'XMLHttpRequest', 
			//			'x-cors-grida-api-key' 	: '61dbebf9-36c6-45c6-909e-323209a8116d'
			//		}, 'url' : 'cors.bridged.cc/https://api.waxsweden.org'
			//	}, 
			//	{
			//		'headers' : {
			//			'x-requested-with' 		: 'XMLHttpRequest', 
			//			'x-cors-grida-api-key' 	: '61dbebf9-36c6-45c6-909e-323209a8116d'
			//		}, 'url' : 'cors.bridged.cc/https://api-wax.eosauthority.com'
			//	}, 
			//	{
			//		'headers' : {}, 
			//		'url' : 'wax.eosrio.io'
			//	}, 
			//	{
			//		'headers' : {}, 
			//		'url' : 'wax.blokcrafters.io'
			//	}, 
			//	{
			//		'headers' : {}, 
			//		'url' : 'waxapi.ledgerwise.io'
			//	}, 
			{
				'headers' : {}, 
				'url' : 'api.wax.greeneosio.com'
			}, {
				'headers' : {}, 
				'url' : 'wax.hivebp.io'
			}, {
				'headers' : {}, 
				'url' : 'wax.blokcrafters.io'
			}, {
				'headers' : {}, 
				'url' : 'wax.eosphere.io'
			}, {
				'headers' : {}, 
				'url' : 'hyperion.sentnl.io'
			}, {
				'headers' : {}, 
				'url' : 'wax.eosdublin.io'
			}
			//	{
			//		'headers' : {}, 
			//		'url' : 'wax.eosphere.io'
			//	}, 
			//	, {
			//		'headers' : {}, 
			//		'url' : 'api-wax.eosauthority.com'
			//	}, 
			//	, {
			//		'headers' : {}, 
			//		'url' : 'api.waxsweden.org'
			//	}
            //			//	'wax.cryptolions.io', 
            //			'cors.bridged.cc/https://wax.eosrio.io', 
            //			'wax.blokcrafters.io', 
            //			'waxapi.ledgerwise.io', 
            //			//	'cors.bridged.cc/https://apiwax.3dkrender.com', 
            //			//	'wax.cryptolions.io', 
			//			'api-wax.eosauthority.com', 
            //			'cors.bridged.cc/https://api-wax.eosauthority.com', 
            //			'api.wax.greeneosio.com', 
            //			'wax.eosphere.io', 
            //			'cors.bridged.cc/https://wax.eosrio.io', 
            //			'wax.blokcrafters.io', 
            //			'waxapi.ledgerwise.io', 
            //			//	'cors.bridged.cc/https://apiwax.3dkrender.com', 
            //			//	'wax.cryptolions.io', 
			//			'api-wax.eosauthority.com', 
            //			'cors.bridged.cc/https://api-wax.eosauthority.com', 
            //			'api.wax.greeneosio.com', 
            //			'wax.eosphere.io', 
            //			'cors.bridged.cc/https://wax.eosrio.io', 
            //			'wax.blokcrafters.io', 
            //			'waxapi.ledgerwise.io', 
            //			//	'cors.bridged.cc/https://apiwax.3dkrender.com', 
            //			//	'wax.cryptolions.io', 
			//			'api-wax.eosauthority.com', 
            //			'cors.bridged.cc/https://api-wax.eosauthority.com', 
            //			'api.wax.greeneosio.com', 
            //			'wax.eosphere.io', 
            //			'cors.bridged.cc/https://wax.eosrio.io', 
            //			'wax.blokcrafters.io', 
            //			'waxapi.ledgerwise.io', 
            //			//	'cors.bridged.cc/https://apiwax.3dkrender.com', 
            //			'cors.bridged.cc/https://api.waxsweden.org', 
            //			'cors.bridged.cc/https://api.waxsweden.org'
            //			//	'cors.bridged.cc/https://api.waxsweden.org', 
            //			//	'cors.bridged.cc/https://api.waxsweden.org'
            //			//  , 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online'
        ]; 
        
        document.querySelector('div.modal.fade#poolMineable').addEventListener('shown.bs.modal', function () {
            document.querySelector('div.modal.fade#poolMineable').querySelector('iframe').setAttribute(
                'src', `https://wax.stats.eosusa.news/d-solo/g-n07fbGz/alienworlds-planet-info-big?orgId=1&refresh=1m&from=now-5m&to=now&fullscreen&panelId=9`
                //  `https://wax.stats.eosusa.news/d/Mfo5qfbMz/alienworlds-planet-info-big?orgId=1&refresh=1m&from=now-5m&to=now&fullscreen&panelId=9`
                // https://wax.stats.eosusa.news/d-solo/g-n07fbGz/alienworlds-planet-info?orgId=1&refresh=60s&from=1628522900956&to=1628526500956&var-planet=All&theme=light&panelId=9
            ); 
        }); 
        document.querySelector('div.modal.fade#poolMineable').addEventListener('hide.bs.modal', function () {
            document.querySelector('div.modal.fade#poolMineable').querySelector('iframe').setAttribute(
                'src', ``
            ); 
        }); 
        
        (function thiscode(){
            fetch(
                '/',
                {method : 'POST'}
            ).then(
                result => result.json()
            ).then(result => {
                
                window['information-data'] = result; /*!    console.clear(); !*/
                
                //	function fetchProcessDone(){
                try{ clearInterval(window['fetchProcessSec']) }catch(e){}; 
                var i = 0; window['fetchProcessSec'] = setInterval(function () {
                    i+= Math.ceil(Math.random() * 12) + 1;
                    if (i < 100) {
                        document.querySelector('div[class*="progress-bar"][id*="time_pg"]').style.width = `${i}%`; 
                    }else{
                        document.querySelector('div[class*="progress-bar"][id*="time_pg"]').style.width = '100%'; 
                    }; 
                    if (i >= 180) {
                        document.querySelector('div[class*="progress-bar"][id*="time_pg"]').style.width = '0%'; 
                        clearInterval(window['fetchProcessSec']); thiscode(); 
                    }; 
                }, 200); 
                //	}; 
				//	requestAnimationFrame( fetchProcessDone ); 
                
                for (TRELE of document.querySelectorAll(`tr[id*=".wam"]`)){
                    if(
                        !Object.keys( window['information-data']['DATA'] ).includes( TRELE.getAttribute('id') ) && (
                            $('button[class="btn btn-primary pau"]')[0].innerText == 'PAUSE'
                        )
                    ){
						
						try{ window[`${ TRELE.getAttribute('id') }-aw-monitor`].remove() }catch(e){}; 
						try{ window[`${ TRELE.getAttribute('id') }-fw-monitor`].remove() }catch(e){}; 
						try{ window[`${ TRELE.getAttribute('id') }-fw-panel-monitor`].remove() }catch(e){}; 
						try{ window[`${ TRELE.getAttribute('id') }-ss-monitor`].remove() }catch(e){}; 
						try{ window[`${ TRELE.getAttribute('id') }-ss-panel-monitor`].remove() }catch(e){}; 
						try{ window[`${ TRELE.getAttribute('id') }-ft-monitor`].remove() }catch(e){};  
						try{ window[`${ TRELE.getAttribute('id') }-ft-panel-monitor`].remove() }catch(e){};  
                        try{ TRELE.remove() }catch(e){}; 
                    }; 
                }; 
                
                for (WAXID in window['information-data']['DATA']){
                    if(
                        !document.querySelector(`tr[id*="${WAXID}"]`)
                    ){
                        try{
                            document.querySelector('table').querySelector('thead').appendChild(
                                Object.assign(document.createElement('tr'), {
                                    id          : WAXID, 
                                    innerHTML   : window['information-data']['DOMS'].replace(
                                        '{ WAXID }', 
                                        `${ WAXID.replace('.wam', '.').slice(0, 2) }` + (function(x){ if (x.length % 2){ return '-' }else{ return '--' } })(WAXID.replace('.wam', '.')) + `${ WAXID.replace('.wam', '.').slice(-2) }`
                                    ).replace(
                                        '{ STAKE }', 
                                        window['information-data']['DATA'][WAXID]['cpu']['stake']['alls'].toString().split('.')[0]
                                    ).replace(
                                        '{ LAND }', 
                                        `${ window['information-data']['DATA'][WAXID]['land']['id'].replace(/(^)1099512/gi, '') } : ${ window['information-data']['DATA'][WAXID]['land']['commission'].toFixed(2) }`
                                    ).replace(
                                        '{ LAST TLM }', 
                                        window['information-data']['DATA'][WAXID]['last_mine']['mine']
                                    ).replace(
                                        '{ LAST CPU }', 
                                        window['information-data']['DATA'][WAXID]['cpu']['last_cpu_usage']
                                    ).replace(
                                        '{ LAST MINE DELAY }', 
                                        window['information-data']['DATA'][WAXID]['cooldown']
                                    ).replace(
                                        '{ LAST MINE STAMP }', 
                                        //  window['information-data']['DATA'][WAXID]['last_mine']['time'].replace('T', ' ')
                                        (new Date(
                                            `${ window['information-data']['DATA'][WAXID]['last_mine']['time'].replace('T', ' ') }+0000`
                                        ).toLocaleString(
                                            "en-US", {
                                                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, 
                                                year    : 'numeric', 
                                                month   : '2-digit', 
                                                day     : '2-digit', 
                                                hour    : '2-digit', 
                                                hour12  : false, 
                                                minute  : '2-digit', 
                                                second  : '2-digit'
                                            }
                                        ))
                                    ).replace(
                                        '{ WAX TOTAL }', 
                                        Number( window['information-data']['DATA'][WAXID]['balance']['WAX'] ).toFixed(4)
                                    ).replace(
                                        '{ TLM TOTAL }', 
                                        Number( window['information-data']['DATA'][WAXID]['balance']['TLM'] ).toFixed(4)
                                    ).replace(
                                        /{ CPU MAX }/g, 
                                        window['information-data']['DATA'][WAXID]['cpu']['max']
                                    ).replace(
                                        '{ CPU NOW }', 
                                        0
                                    ).replace(
                                        '{ MAXIMUM COOLDOWN }', 
                                        parseInt( window['information-data']['DATA'][WAXID]['maxdelay'] )
                                    ).replace(
                                        /{ CPU PER }/g, 
                                        `${ (100 - Number(window['information-data']['DATA'][WAXID]['cpu']['per'])) }`
                                    )
									//	.replace(
                                    //	    '-------------------------', 
                                    //	    window['information-data']['DATA'][WAXID]['text'][ window['information-data']['DATA'][WAXID]['text']['step'] ]['text']
                                    //	)
                                })
                            ); 
                            document.querySelector('table').querySelector('thead').appendChild(
                                Object.assign(document.createElement('tr'), {
                                    innerHTML   : `
<th
    colspan     = "9"
    style       = "display: none;"
	id 			= "${ WAXID }-aw-monitor"
>
    <iframe
    url         = "https://mining.idigger.online/affiliate?waxid=${ WAXID }"
    style       = "width : 100%; height : 580px;"
    scrolling   = "no"
    ></iframe>
</th>`
                                })
                            ); 
                            document.querySelector('table').querySelector('thead').appendChild(
                                Object.assign(document.createElement('tr'), {
                                    innerHTML   : `
<th
    colspan     = "7"
    style       = "display: none; "
	id 			= "${ WAXID }-fw-monitor"
>
    <iframe
    url         = "https://farmersworld.idigger.online/affiliate?waxid=${ WAXID }"
    style       = "width : 100%; height : 954px;"
    scrolling   = "no"
    ></iframe>
</th>
<th colspan="2" style="display: none; vertical-align: top; max-width: 486px;" id="${ WAXID }-fw-panel-monitor">
	<div class="input-group fw-deposit-fwf">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">AUTO DEPOSIT TO GAME WHEN HAVE NOT ENOUGH SUPPLY</div>
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-deposit-fwf-switch" value="0">
				</label>
			</div>
		</div>
		<div class="input-group-text fw-deposit-fwf-text" style="width: 248px;">DEPOSIT FWF 0000</div>
		<input type="range" class="form-control fw-deposit-fwf-input" placeholder="50" value="50" step="5" min="0" max="600" >
	</div>
	<div class="input-group fw-deposit-fwg">
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-deposit-fwg-switch" value="0">
				</label>
			</div>
		</div>
		<div class="input-group-text fw-deposit-fwg-text" style="width: 248px;">DEPOSIT FWG 0000</div>
		<input type="range" class="form-control fw-deposit-fwg-input" placeholder="50" value="50" step="5" min="0" max="600" >
	</div>
	<div class="input-group fw-swap-wax-fwf">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">AUTO SWAP WHEN HAVE NOT ENOUGH SUPPLY</div>
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-swap-wax-fwf-switch" value="0">
				</label>
			</div>
		</div>
		<div class="input-group-text" style="width: 248px;">WAX TO FWF 0000</div>
		<input type="range" class="form-control fw-swap-wax-fwf-input" placeholder="20" value="20" step="5" min="0" max="600" >
	</div>
	<div class="input-group fw-swap-wax-fwg">
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-swap-wax-fwg-switch" value="0">
				</label>
			</div>
		</div>
		<div class="input-group-text" style="width: 248px;">WAX TO FWG 0000</div>
		<input type="range" class="form-control fw-swap-wax-fwg-input" placeholder="20" value="20" step="5" min="0" max="600" >
	</div>
	<div class="input-group fw-withdraw-deposit">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">W 0.00 F 0.00 G 0.00 : WITH [0%] DEPO : W 0.00 F 0.00 G 0.00</div>
		<button type="submit" class="btn btn-primary fw-withdraw" style="width: 20%; "">WITHDRAW</button>
		<input type="number" class="form-control" placeholder="FWW" value="" step="5" min="5" max="100" aria-label="">
		<input type="number" class="form-control" placeholder="FWF" value="" step="5" min="5" max="100" aria-label="">
		<input type="number" class="form-control" placeholder="FWG" value="" step="5" min="5" max="100" aria-label="">
		<button type="submit" class="btn btn-primary fw-deposit" style="width: 20%; "">DEPOSIT</button>
	</div>
	<div class="input-group fw-swap-fww-wax">
		<div class="input-group-text" style="width: 248px;">MANUAL SELL FWW TO WAX</div>
		<input type="number" class="form-control" placeholder="0.0000" value="0.0000" step="5" min="0" max="100" >
		<input type="number" class="form-control" placeholder="0.0000" value="0.0000" step="5" min="0" max="100" disabled>
		<button type="submit" class="btn btn-primary fw-swap-fww-wax-set" style="width: 60px; ">SET</button>
	</div>
	<div class="input-group fw-swap-fwg-wax">
		<div class="input-group-text" style="width: 248px;">MANUAL SELL FWG TO WAX</div>
		<input type="number" class="form-control" placeholder="0.0000" value="0.0000" step="5" min="0" max="100" >
		<input type="number" class="form-control" placeholder="0.0000" value="0.0000" step="5" min="0" max="100" disabled>
		<button type="submit" class="btn btn-primary fw-swap-fww-wax-set" style="width: 60px; ">SET</button>
	</div>
	<div class="input-group fw-swap-fwf-wax">
		<div class="input-group-text" style="width: 248px;">MANUAL SELL FWF TO WAX</div>
		<input type="number" class="form-control" placeholder="0.0000" value="0.0000" step="5" min="0" max="100" >
		<input type="number" class="form-control" placeholder="0.0000" value="0.0000" step="5" min="0" max="100" disabled>
		<button type="submit" class="btn btn-primary fw-swap-fww-wax-set" style="width: 60px; ">SET</button>
	</div>
	<div class="input-group fw-auto-plant">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">
		<div class="form-check-inline form-switch" style="align-self: flex-start; margin-right: auto; ">
			<label class="form-check-label">
				<input
					type 			= "checkbox"
					class 			= "form-check-input fw-auto-plant-switch"
					value 			= "0"
				>
				<!--span style="padding-left: 5;"></span-->
			</label>
		</div>AUTO PLANTS CORN BARLEY</div>
		<div class="input-group-text" style="width: 96px;">CORN</div>
		<input type="number" class="form-control fw-auto-plant-corn-input" placeholder="CORN" value="0" step="1" min="0" max="8" aria-label="">
		<div class="input-group-text" style="width: 96px;">BARLEY</div>
		<input type="number" class="form-control fw-auto-plant-barley-input" placeholder="BARLEY" value="0" step="1" min="0" max="8" aria-label="">
		<button type="submit" class="btn btn-primary fw-auto-plant-set" style="width: 60px; ">SET</button>
	</div>
	<div class="input-group fw-buy-seed">
		<div class="input-group-text" style="width: inherit; ">BUY SEED</div>
		<div class="input-group-text" style="width: 96px;">CORN</div>
		<input type="number" class="form-control" placeholder="CORN" value="0" step="1" min="0" max="8" aria-label="">
		<div class="input-group-text" style="width: 96px;">BARLEY</div>
		<input type="number" class="form-control" placeholder="BARLEY" value="0" step="1" min="0" max="8" aria-label="">
		<button type="submit" class="btn btn-primary fw-buy-seed-buy" style="width: 60px; ">BUY</button>
	</div>
	<div class="input-group fw-breed">
		<div class="input-group-text" style="width: inherit; ">BREED</div>
		<div class="input-group-text" style="width: 96px;">MALE</div>
		<select class="form-select" id="fw-breed-male"><option value=""></option></select>
		<div class="input-group-text" style="width: 96px;">FEMALE</div>
		<select class="form-select" id="fw-breed-female"><option value=""></option></select>
		<button type="submit" class="btn btn-primary fw-breed-get" style="width: 60px; ">GET</button>
	</div>
	<div class="input-group fw-craft">
		<div class="input-group-text" style="width: inherit; ">CRAFT</div>
		<div class="input-group-text" style="width: 96px;">TOOL</div>
		<select class="form-select" id="fw-craft-tools"><option value=""></option></select>
		<div class="input-group-text" style="width: 96px;">PLOT</div>
		<select class="form-select" id="fw-craft-plot"><option value=""></option></select>
		<button type="submit" class="btn btn-primary fw-craft-get" style="width: 60px; ">GET</button>
	</div>
	<div class="input-group fw-withdraw-fww">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">AUTO WITHDRAW WHEN 5%, KEEP MINIMIUM SUPPLY IN GAME</div>
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-waithdraw-fww-switch" value="0">
					<!--span style="padding-left: 5;"></span-->
				</label>
			</div>
		</div>
		<div class="input-group-text" style="width: 248px;">WITHDRAW FWW 0000</div>
		<input type="range" class="form-control fw-withdraw-fww-input" placeholder="40" value="40" step="5" min="0" max="600" >
		<!--div class="input-group-text" id="basic-addon WAX" style="width: 38px;">%</div-->
	</div>
	<div class="input-group fw-withdraw-fwf">
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-withdraw-fwf-switch" value="0">
					<!--span style="padding-left: 5;"></span-->
				</label>
			</div>
		</div>
		<div class="input-group-text" style="width: 248px;">WITHDRAW FWF 0000</div>
		<input type="range" class="form-control fw-withdraw-fwf-input" placeholder="40" value="40" step="5" min="0" max="600" >
		<!--div class="input-group-text" id="basic-addon WAX" style="width: 38px;">%</div-->
	</div>
	<div class="input-group fw-withdraw-fwg">
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-withdraw-fwg-switch" value="0">
					<!--span style="padding-left: 5;"></span-->
				</label>
			</div>
		</div>
		<div class="input-group-text" style="width: 248px;">WITHDRAW FWG 0000</div>
		<input type="range" class="form-control fw-withdraw-fwg-input" placeholder="40" value="40" step="5" min="0" max="600" >
		<!--div class="input-group-text" id="basic-addon WAX" style="width: 38px;">%</div-->
	</div>
	<div class="input-group fw-feature">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">FEATURE</div>
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-feature-mine-pack-switch" value="0">
					<!--span style="padding-left: 5;"></span-->
				</label>
			</div>
		</div>
		<div class="input-group-text" style="width: 20.5%; ">MINE PACK</div>
		<input type="number" class="form-control fw-feature-mine-pack-input" placeholder="1" value="1" step="1" min="1" max="8" aria-label="">
		<!--div class="input-group-text" id="basic-addon WAX" style="width: 38px;">%</div-->
		<button type="submit" class="btn btn-primary fw-feature-mine-pack-set" style="width: 60px; ">SET</button>
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-feature-eco-mine-switch" value="0">
					<!--span style="padding-left: 5;"></span-->
				</label>
			</div>
		</div>
		<div class="input-group-text" style="width: 20.5%; ">ECO MINE</div>
	</div>
</th>`
                                })
                            );  //	('0000' + '1000').slice(-'0000'.length)
							
							
							
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-plant-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-switch').checked, 
									'corn' 		: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-corn-input').value, 
									'barley' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-barley-input').value
								}; 
								
								if ( parseInt(this['var']['db']['corn']) + parseInt(this['var']['db']['barley']) >= 8 ){
									this['var']['db']['corn'] = Math.max(0, (8 - parseInt(this['var']['db']['barley']))); 
									document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-corn-input').value = this['var']['db']['corn']; 
								}; 
								if ( parseInt(this['var']['db']['barley']) + parseInt(this['var']['db']['corn']) >= 8 ){
									this['var']['db']['barley'] = Math.max(0, (8 - parseInt(this['var']['db']['corn']))); 
									document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-barley-input').value = this['var']['db']['barley']; 
								}; console.debug( this['var'] ); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_plants=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['corn'] + 
									',' + this['var']['db']['barley'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-plant-corn-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-switch').checked, 
									'corn' 		: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-corn-input').value, 
									'barley' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-barley-input').value, 
								}; 
								
								if ( parseInt(this['var']['db']['corn']) + parseInt(this['var']['db']['barley']) >= 8 ){
									this['var']['db']['corn'] = Math.max(0, (8 - parseInt(this['var']['db']['barley']))); 
									document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-corn-input').value = this['var']['db']['corn']; 
								}; console.debug( this['var'] ); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_plants=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['corn'] + 
									',' + this['var']['db']['barley'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-plant-barley-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-switch').checked, 
									'corn' 		: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-corn-input').value, 
									'barley' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-barley-input').value, 
								}; 
								
								if ( parseInt(this['var']['db']['barley']) + parseInt(this['var']['db']['corn']) >= 8 ){
									this['var']['db']['barley'] = Math.max(0, (8 - parseInt(this['var']['db']['corn']))); 
									document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-barley-input').value = this['var']['db']['barley']; 
								}; console.debug( this['var'] ); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_plants=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['corn'] + 
									',' + this['var']['db']['barley'], 
									{method : 'GET'}
								); 
							}); 
							
							
							
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-deposit-fwf-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwf-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwf-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-deposit-fwf-text'
								).innerText = 'DEPOSIT FWF ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_depo_fwf=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-deposit-fwf-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwf-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwf-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-deposit-fwf-text'
								).innerText = 'DEPOSIT FWF ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_depo_fwf=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-deposit-fwf-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwf-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwf-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-deposit-fwf-text'
								).innerText = 'DEPOSIT FWF ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
							}); 
							
							
							
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-deposit-fwg-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwg-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwg-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-deposit-fwg-text'
								).innerText = 'DEPOSIT FWG ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_depo_fwg=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-deposit-fwg-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwg-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwg-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-deposit-fwg-text'
								).innerText = 'DEPOSIT FWG ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_depo_fwg=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-deposit-fwg-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwg-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwg-input').value, 
								}; console.debug( this['var'] );  
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-deposit-fwg-text'
								).innerText = 'DEPOSIT FWG ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
							}); 
							
							
							
                            document.querySelector('table').querySelector('thead').appendChild(
                                Object.assign(document.createElement('tr'), {
                                    innerHTML   : `
<th
    colspan     = "7"
    style       = "display: none; "
	id 			= "${ WAXID }-ss-monitor"
>
    <iframe
    url         = "https://starship-explorer.io/?user=${ WAXID }"
    style       = "width : 100%; height : 3038px; filter: invert(0.95) contrast(1.0) saturate(0.6);"
    scrolling   = "no"
    ></iframe>
</th>
<th colspan="2" style="display: none; vertical-align: top; max-width: 486px;" id = "${ WAXID }-ss-panel-monitor">
	<div class="input-group ss-target-set">
		<div class="input-group-text" style="width: inherit; justify-content: center; "> 0.0000 : WALLET : [] : STAKED : 0.0000 </div>
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<!--input type="checkbox" class="form-check-input ss-target-switch" value="0"-->
					<!--span style="padding-left: 5;"></span-->
				</label>
			</div>
		</div>
		<div class="input-group-text" style="width: 248px;">PLANET TARGET<span style="visibility: hidden;">_</span><a href="https://starship.primatepirate.com/planetarium" target="_blank">ID</a></div>
		<input type="number" class="form-control" placeholder="SS-TARGET-SWITCH" value="SS-TARGET-SWITCH" step="1" min="1" max="100000" aria-label="">
		<!--div class="input-group-text" id="basic-addon WAX" style="width: 38px;">%</div-->
		<button type="submit" class="btn btn-primary ss-target-set" style="width: 60px; ">SET</button>
	</div>
</th>`.replace( /SS-TARGET-SWITCH/gi, window['information-data']['DATA'][WAXID]['vers']['ss']['db']['target'] )
                                })
                            ); 
                            document.querySelector('table').querySelector('thead').appendChild(
                                Object.assign(document.createElement('tr'), {
                                    innerHTML   : `
<th
    colspan     = "9"
    style       = "display: none;"
	id 			= "${ WAXID }-ft-monitor"
>
    <iframe
    url         = "https://icheck-farmingtales.idigger.online/affiliate?waxid=${ WAXID }"
    style       = "width : 100%; height : 580px;"
    scrolling   = "no"
    ></iframe>
</th>`
                                })
                            ); 
//	<div class="input-group">
//	  <div class="input-group-text" id="basic-addon WAX" style="width: inherit; justify-content: center; ">PAYER WAX ID</div>
//	  <input type="text" class="form-control" placeholder="PAYER WAX ID xxxxx.wam" aria-label="RENT SAFE STAKE WAX ID PAYER" pattern=".{4,5}.wam|\w{12,12}" onchange="if(this.value == this.parentElement.parentElement.querySelector('input[aria-label*=\x22RENT SAFE STAKE RECIEVER\x22]').value){this.value=''; $.notify(this, `RENT : INCORRECT`, 'warn'); }" required="">
//	</div>
                            try{
                                window[WAXID].querySelector('input.pause_switch[type="checkbox"]').checked 	= !window['information-data']['DATA'][WAXID]['pause'] || false
                                window[WAXID].querySelector('input.eco_switch[type="checkbox"]').checked 	= window['information-data']['DATA'][WAXID]['lmlw']
                                //  (function (state){
                                //      if (!state){
                                //          return true
                                //      }else{
                                //          return false
                                //      }
                                //  })( window['information-data']['DATA'][WAXID]['state'] )
								
                                window[WAXID].querySelector('input.pause_switch[type="checkbox"]').addEventListener('change', function(e) {
                                    if (
                                        !$(this).attr('disabled')
                                    ){
                                        $(this).prop( "disabled", true ); $(this).attr('readonly', true);
                                        
                                        fetch(
                                            `/set?waxid=${this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id}&pause=${!this.checked}`,
                                            {method : 'GET'}
                                        ).then(
                                            result => result.json()
                                        ).then(result => {
                                            if(result['text'] != 'okay'){ throw result }else{
                                                if (
                                                    result['code'] == true
                                                ){
                                                    this.checked = false; 
                                                    $(this).notify(
                                                        'PAUSE', 
                                                        "success", { position : "top" }
                                                    ); 
                                                }else{
                                                    this.checked = true; 
                                                    $(this).notify(
                                                        'RERUN', 
                                                        "success", { position : "top" }
                                                    ); 
                                                };
                                                (function (checkbox){
                                                    setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); 
                                                })(this); 
                                            }; 
                                        }).catch(error => {
                                            $.notify(`NOT : ${error}`, "error", { position : "top" }); 
                                            (function (checkbox){
                                                setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); checkbox.checked = !checkbox.checked;
                                            })(this); 
                                        }); 
                                    };
                                    //  if (this.checked) {
                                    //      console.log("Checkbox is checked..");
                                    //  }else{
                                    //      console.log("Checkbox is not checked..");
                                    //  }; 
                                });
                                window[WAXID].querySelector('input.eco_switch[type="checkbox"]').addEventListener('change', function(e) {
                                    if (
                                        !$(this).attr('disabled')
                                    ){
                                        $(this).prop( "disabled", true ); $(this).attr('readonly', true);
                                        
                                        fetch(
                                            `/eco/lmlw?waxid=${ this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id }&value=${ this.checked }`,
                                            {method : 'GET'}
                                        ).then(
                                            result => result.json()
                                        ).then(result => {
                                            if(result['text'] != 'okay'){ throw result }else{
                                                if (
                                                    result['data'] == true
                                                ){
                                                    this.checked = true; 
                                                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                                        'ECO MODE ON', 
                                                        "success", { position : "top" }
                                                    ); 
                                                }else{
                                                    this.checked = false; 
                                                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                                        'ECO MODE NO', 
                                                        "error", { position : "top" }
                                                    ); 
                                                };
                                                (function (checkbox){
                                                    setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); 
                                                })(this); 
                                            }; 
                                        }).catch(error => {
                                            $.notify(`ECO MODE : ${ error['text'] }`, "error", { position : "top" }); 
                                            (function (checkbox){
                                                setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); checkbox.checked = !checkbox.checked;
                                            })(this); 
                                        }); 
                                    };
                                    //  if (this.checked) {
                                    //      console.log("Checkbox is checked..");
                                    //  }else{
                                    //      console.log("Checkbox is not checked..");
                                    //  }; 
                                });
                                window[WAXID].querySelector('button#delete').addEventListener('click', function(e) {
                                    if (
                                        !$(this).attr('disabled')
                                    ){
										
                                        $(this).prop( "disabled", true ); 
										
                                        fetch(`/off`, {
											method 		: 'POST', 
											headers 	: {
												"accept"        : "application/json",
												"content-type"  : "application/json"
											},
											body 		: JSON.stringify({
												"waxid" 	: this.parentElement.parentElement.parentElement.id
											})
										}).then(
                                            result => result.text()
                                        ).then(result => {
                                            if(result != 'okay'){ throw result }else{
                                                $(this).notify(
                                                    'DELETE DONE', 
                                                    "success", { position : "top" }
                                                ); 
                                                (function (button){
                                                    setTimeout(function(){ $(button).prop( "disabled", false ); }, 2000); 
                                                })(this); 
                                            }; 
                                        }).catch(error => {
                                            $.notify(`DELETE ERROR ${ error }`, "error", { position : "top" }); 
                                            (function (button){
                                                setTimeout(function(){ $(button).prop( "disabled", false ); }, 2000); 
                                            })(this); 
                                        }); 
                                    };
                                    //  if (this.checked) {
                                    //      console.log("Checkbox is checked..");
                                    //  }else{
                                    //      console.log("Checkbox is not checked..");
                                    //  }; 
                                });
                                window[WAXID].querySelector('input.fw_switch[type="checkbox"]').addEventListener('change', function(e) {
                                    if (
                                        !$(this).attr('disabled')
                                    ){
										
                                        $(this).prop( "disabled", true ); 
										
                                        fetch(`/vers/fw/set?waxid=${ this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id }&switch=${ this.checked }`, 
											{method : 'GET'}
										).then(
                                            result => result.json()
                                        ).then(result => {
                                            if(result['text'] != 'okay'){ throw result }else{
                                                if (
                                                    result['data'] == true
                                                ){
                                                    this.checked = true; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                                        'FARMER WORLDS ON', 
                                                        "success", { position : "top" }
                                                    ); 
                                                }else{
                                                    this.checked = false; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                                        'FARMER WORLDS NO', 
                                                        "error", { position : "top" }
                                                    ); 
                                                };
                                                (function (checkbox){
                                                    setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); 
                                                })(this); 
                                            }; 
                                        }).catch(error => {
                                            $.notify(`FARMER WORLDS : ${ error['text'] }`, "error", { position : "top" }); 
                                            (function (button){
                                                setTimeout(function(){ $(button).prop( "disabled", false ); }, 2000); 
                                            })(this); 
                                        }); 
                                    };
                                });
                                window[WAXID].querySelector('input.ss_switch[type="checkbox"]').addEventListener('change', function(e) {
                                    if (
                                        !$(this).attr('disabled')
                                    ){
										
                                        $(this).prop( "disabled", true ); 
										
                                        fetch(`/vers/ss/set?waxid=${ this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id }&switch=${ this.checked }`, 
											{method : 'GET'}
										).then(
                                            result => result.json()
                                        ).then(result => {
                                            if(result['text'] != 'okay'){ throw result }else{
                                                if (
                                                    result['data'] == true
                                                ){
                                                    this.checked = true; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                                        'STARSHIP ON', 
                                                        "success", { position : "top" }
                                                    ); 
                                                }else{
                                                    this.checked = false; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                                        'STARSHIP NO', 
                                                        "error", { position : "top" }
                                                    ); 
                                                };
                                                (function (checkbox){
                                                    setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); 
                                                })(this); 
                                            }; 
                                        }).catch(error => {
                                            $.notify(`STARSHIP : ${ error['text'] }`, "error", { position : "top" }); 
                                            (function (button){
                                                setTimeout(function(){ $(button).prop( "disabled", false ); }, 2000); 
                                            })(this); 
                                        }); 
                                    };
                                });
								
								//	document.querySelector('th[id="435yo.wam-ss-panel-monitor"]').querySelector('div.input-group.ss-target-set input')
								document.querySelector(`th[id="${ WAXID }-ss-panel-monitor"]`).querySelector('div.input-group.ss-target-set button').addEventListener('click', function(e) {
                                    if (
                                        !$(this).attr('disabled')
                                    ){
										
                                        $(this).prop( "disabled", true ); 
										
                                        fetch(`/vers/ss/set?waxid=${ this.parentElement.parentElement.id.split('-')[0] }&target=${ this.parentElement.querySelector('div.input-group.ss-target-set input').value }`, 
											{method : 'GET'}
										).then(
                                            res => res.json()
                                        ).then(res => {
                                            if(res['text'] != 'okay'){ throw res }else{
                                                if (
                                                    res['code'] == 200
                                                ){
                                                    //	this.checked = true; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement ).notify(
                                                        'PLANET TARGET SETUP', 
                                                        "success", { position : "top" }
                                                    ); 
                                                }else{
                                                    //	this.checked = false; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement ).notify(
                                                        'PLANET TARGET UNSET', 
                                                        "error", { position : "top" }
                                                    ); 
                                                };
                                                (function (checkbox){
                                                    setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); 
                                                })(this); 
                                            }; 
                                        }).catch(error => {
                                            $.notify(`PLANET TARGET ERROR : ${ error['text'] }`, "error", { position : "top" }); 
                                            (function (button){
                                                setTimeout(function(){ $(button).prop( "disabled", false ); }, 2000); 
                                            })(this); 
                                        }); 
                                    };
                                });
                            }catch(e){}; 
							
                            try{ document.querySelector(`tr[id*="${WAXID}"]`).setAttribute('class', 'align-middle') }catch(e){}; 

                            (function thiscode(w){
                                setTimeout(function () {
                                    w.innerText = `${Number(w.innerText.split('/')[0]) + 1}/s`; thiscode(w); 
                                }, 1000); 
                            })( window[WAXID].querySelector('[id*="lastminedelay"]') ); 
							
                            (function thiscode(w, endpoint){
                                if (
                                    (
                                        Math.ceil(Math.random() * 100) >= 32 ||
                                        w.querySelector('span[id="tlmperday"]').innerText.match("0.0000/h")
                                    ) && 
                                    window[ w.id ].querySelector('input').checked == true && 
                                    document.querySelector('button.btn.btn-primary.pau') && 
                                    document.querySelector('button.btn.btn-primary.pau').getAttribute('value') == 'PAUSE'
                                ){
                                    //  if (
                                    //      Math.ceil(Math.random() * 100) >= 80
                                    //  ){
                                    //      fetch("https://cors.bridged.cc/https://wax.greymass.com/v1/history/get_actions", {
                                    //          "headers"   : {
                                    //              "accept"        : "application/json",
                                    //              "content-type"  : "application/json"
                                    //          },
                                    //          "body"      : `{\"account_name\":\"${w.id}\",\"pos\":0,\"offset\":0,\"filter\":\"string\",\"sort\":\"desc\",\"after\":\"${ 2021-09-06T10:19:30.419Z }\",\"before\":\"${ 2021-09-06T11:19:30.419Z }\",\"parent\":0}`,
                                    //          "method"    : "POST",
                                    //      });
                                    //  
                                    //  }; 
                                    fetch(`https://${
										endpoint['url']
                                    }/v2/history/get_actions?account=${
                                        w.id
                                    }&skip=0&limit=100&sort=desc&transfer.to=${
                                        w.id
                                    }&transfer.from=m.federation&after=${
                                        (new Date(Date.now() - (86400000 / 24 * 1.25))).toJSON()
                                    }&before=${
                                        new Date().toJSON()
                                    }`, {
										"headers" 	: endpoint['headers'], 
                                        "method" 	: 'GET'
									}).then(
                                        result => result.json()
                                    ).then(result => {
                                        if(
                                            result['actions'].length >= 1
                                        ){
                                            window[w.id].TLM = {
                                                'amount' : 0.0000, 
                                                'length' : 0
                                            }; for (x of result['actions']){
                                                try{
                                                    window[w.id].TLM['amount'] += x['act']['data']['amount']
                                                    window[w.id].TLM['length'] += 1
                                                }catch(e){}; 
                                            }; 
                                            window[w.id].querySelector('span[id="tlmperday"]').innerText = `${ window[w.id].TLM['amount'].toFixed(4) }/h [${ window[w.id].TLM['length'] }]`; 
											setTimeout(function(){ thiscode(
												w, (function (a) {return a[Math.floor((Math.random()*a.length))]})( window['waxserver']['endpoint'] )
											) }, 16000); try{ delete window.TLM }catch(e){}; 
                                        }else{
                                            window[w.id].TLM = {
                                                'amount' : (window[w.id].TLM || {'amount' : 0.0000})['amount'], 
                                                'length' : (window[w.id].TLM || {'length' : 0})['length']
                                            }; //   window[w.id].TLM['amount'] = window[w.id].TLM || 0.0000; window[w.id].TLM = window[w.id].TLM || 0.0000
											setTimeout(function(){ thiscode(
												w, (function (a) {return a[Math.floor((Math.random()*a.length))]})( window['waxserver']['endpoint'] )
											) }, 16000); try{ delete window.TLM }catch(e){}; 
                                        }; 
                                    }).catch(error => {
                                        //  console.error(`Error : ${ error }`); 
										setTimeout(function(){ thiscode(
											w, (function (a) {return a[Math.floor((Math.random()*a.length))]})( window['waxserver']['endpoint'] )
										) }, 16000); try{ delete window.TLM }catch(e){}; 
                                    }); 
                                }else{
                                    setTimeout(function(){ thiscode(
										w, (function (a) {return a[Math.floor((Math.random()*a.length))]})( window['waxserver']['endpoint'] )
									) }, 16000); 
                                }; 
                            })(
                                window[WAXID], 
								(function (a) {return a[Math.floor((Math.random()*a.length))]})( window['waxserver']['endpoint'] )
                            ); 
                        }catch(e){}; 
                        
                        try{
                            document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').parentElement.setAttribute(
                                'title', `${ WAXID }`
                            ); 
                        }catch(e){}; 
                        try{
                            document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').parentElement.setAttribute(
                                'class', 'text-nowrap overflow-hidden'
                            ); 
                        }catch(e){}; 
                        try{
                            document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').parentElement.setAttribute(
                                'data-toggle', `tooltip`
                            ); 
                        }catch(e){}; 
                        try{
                            document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').parentElement.setAttribute(
                                'data-bs-placement', `top`
                            ); 
                        }catch(e){}; 
                        try{
                            document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').parentElement.setAttribute(
                                'data-bs-original-title', `${ WAXID }`
                            ); 
                        }catch(e){}; 
                        try{
                            document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').setAttribute(
                                'data-waxid', document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').innerText
                            ); 
                        }catch(e){}; 
                        try{
                            document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').setAttribute(
                                'onmouseover', `this.innerText = '${ WAXID.replace('.wam', '.') }';`
                            ); 
                        }catch(e){}; 
                        try{
                            document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').setAttribute(
                                'onmouseout', `this.innerText = this.getAttribute('data-waxid');`
                            ); 
                        }catch(e){}; 
                        
                    }else{
						
						(function (_WAXID){
							
							setTimeout(function(){
								try{ window[_WAXID].querySelector('[id*="lastminedelay"]').innerText     = `${ window['information-data']['DATA'][_WAXID]['cooldown'] }/s`}catch(e){}; 
								try{
									window[_WAXID].querySelector('[id*="lastminestamp"]').innerText          = (new Date(
										`${ window['information-data']['DATA'][_WAXID]['last_mine']['time'].replace('T', ' ') }+0000`
									).toLocaleString(
										"en-US", {
											timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, 
											year    : 'numeric', 
											month   : '2-digit', 
											day     : '2-digit', 
											hour    : '2-digit', 
											hour12  : false, 
											minute  : '2-digit', 
											second  : '2-digit'
										}
									))
								}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="cpustake"]').innerText          = `${ window['information-data']['DATA'][_WAXID]['cpu']['stake']['alls'].toString().split('.')[0] } WAX`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="cpu_prg"]').innerText           = `CPU ${ (100 - Number(window['information-data']['DATA'][_WAXID]['cpu']['per'])) }% ${ window['information-data']['DATA'][_WAXID]['cpu']['max']}`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="cpu_prg"]').style.width         = `${ (100 - Number(window['information-data']['DATA'][_WAXID]['cpu']['per'])) }%`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="cpu_prg"]').setAttribute(
									'aria-valuenow', 0
								)}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="cpu_prg"]').setAttribute(
									'aria-valuemax', `${ window['information-data']['DATA'][_WAXID]['cpu']['max'] }`
								)}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="net_prg"]').innerText           = `NET ${ (window['information-data']['DATA'][_WAXID]['net']['total']['use'] * 100 / window['information-data']['DATA'][_WAXID]['net']['total']['max']).toFixed(2) }%`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="net_prg"]').style.width         = `${ Number(window['information-data']['DATA'][_WAXID]['net']['total']['use'] * 100 / window['information-data']['DATA'][_WAXID]['net']['total']['max']) }%`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="net_prg"]').setAttribute(
									'aria-valuenow', 0
								)}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="net_prg"]').setAttribute(
									'aria-valuemax', `${ window['information-data']['DATA'][_WAXID]['net']['total']['max'] }`
								)}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="ram_prg"]').innerText           = `RAM ${ (window['information-data']['DATA'][_WAXID]['ram']['total']['use'] * 100 / window['information-data']['DATA'][_WAXID]['ram']['total']['max']).toFixed(2) }%`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="ram_prg"]').style.width         = `${ Number(window['information-data']['DATA'][_WAXID]['ram']['total']['use'] * 100 / window['information-data']['DATA'][_WAXID]['ram']['total']['max']) }%`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="ram_prg"]').setAttribute(
									'aria-valuenow', 0
								)}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="ram_prg"]').setAttribute(
									'aria-valuemax', `${ window['information-data']['DATA'][_WAXID]['ram']['total']['max'] }`
								)}catch(e){}; 
								
								try{ window[_WAXID].querySelector('[id*="waxbalance"]').innerText        = `${ Number( window['information-data']['DATA'][_WAXID]['balance']['WAX'] ).toFixed(4) }`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="tlmbalance"]').innerText        = `${ Number( window['information-data']['DATA'][_WAXID]['balance']['TLM'] ).toFixed(4) }`}catch(e){}; 
								try{
									if (
										window[_WAXID].querySelector('[id*="land"]').getAttribute('type') == 'submit'
									){
										window[_WAXID].querySelector('[id*="land"]').innerText           = `${ window['information-data']['DATA'][_WAXID]['land']['id'].replace(/(^)1099512/gi, '') } : ${ window['information-data']['DATA'][_WAXID]['land']['commission'].toFixed(2) }`
									}; 
								}catch(e){
									
								}; 
								try{ window[_WAXID].querySelector('[id*="lasttlm"]').innerText           = `${ window['information-data']['DATA'][_WAXID]['last_mine']['mine'] }`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="lastcpu"]').innerText           = `${ window['information-data']['DATA'][_WAXID]['cpu']['last_cpu_usage'] }us`}catch(e){}; 
								//	try{ window[_WAXID].querySelector('[id*="state"]').innerHTML             = `${ window['information-data']['DATA'][_WAXID]['text'][ window['information-data']['DATA'][_WAXID]['text']['step'] ] }`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="state"]').className             = `${ window['information-data']['DATA'][_WAXID]['text'][ window['information-data']['DATA'][_WAXID]['text']['step'] ]['class'] }`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="state"]').innerText             = `${ window['information-data']['DATA'][_WAXID]['text'][ window['information-data']['DATA'][_WAXID]['text']['step'] ]['text'] }`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="maximumcooldown"]').innerText   = `${ parseInt( window['information-data']['DATA'][_WAXID]['maxdelay'] ) }/s`}catch(e){}; 
								
								try{
									window[_WAXID].querySelector('input[type="checkbox"]').checked = !window['information-data']['DATA'][_WAXID]['pause'] || false
								}catch(e){}; 
								
								try{
									window['total'] = {
										'Stake'     : 0, 
										'Profit'    : {
											'wax' : 0,
											'tlm' : 0, 
											'day' : 0
										}, 
									}; 
									for (x in window['information-data']['DATA']){
										window['total']['Stake']                += window['information-data']['DATA'][ x ]['cpu']['stake']['alls']
										window['total']['Profit']['wax']        += Number(
											window['information-data']['DATA'][ x ]['balance']['WAX']
										); 
										window['total']['Profit']['tlm']        += Number(
											window['information-data']['DATA'][ x ]['balance']['TLM']
										); 
										try{
											window['total']['Profit']['day']    += window[x].TLM['amount']
										}catch(e){}
									}; 
								}catch(e){}; 
								
								try{
									if(
										window['coinMarketCap'] && window['coinMarketCap'].getAttribute('wax')
									){
										TotalStake.innerText = `${ ( Number( window['coinMarketCap'].getAttribute('wax') ) * window['total']['Stake'] ).toFixed(2) } THB : ${ window['total']['Stake'].toFixed(1) } WAX`
									}else{
										TotalStake.innerText = `0.0 THB : 0.0 WAX`
									};
								}catch(e){
									TotalStake.innerText = `0.0 THB : 0.0 WAX`
								}; 
								try{
									if(
										window['coinMarketCap'] && 
										window['coinMarketCap'].getAttribute('wax') && 
										window['coinMarketCap'].getAttribute('tlm')
									){
										TotalProfit.innerText = `${ (Number(( Number( window['coinMarketCap'].getAttribute('wax') ) * window['total']['Profit']['wax'] ).toFixed(2)) + Number(( Number( window['coinMarketCap'].getAttribute('tlm') ) * window['total']['Profit']['tlm'] ).toFixed(2))).toFixed(2) } THB : ${ window['total']['Profit']['wax'].toFixed(2) } WAX, ${ window['total']['Profit']['tlm'].toFixed(4) } TLM`
									}else{
										TotalProfit.innerText = `0.0 THB : 0.0 WAX | 0.0 THB : 0.0 TLM`
									};
								}catch(e){
									TotalProfit.innerText = `0.0 THB : 0.0 WAX | 0.0 THB : 0.0 TLM`
								}; 
								try{
									if(
										window['coinMarketCap'] && 
										window['coinMarketCap'].getAttribute('wax') && 
										window['coinMarketCap'].getAttribute('tlm') && 
										window['total']['Profit']['day'] >= 0.0001
									){
										TotalTLMPerHour.innerText = ` ${ Number(Number( window['total']['Profit']['day'] ) * Number( window['coinMarketCap'].getAttribute('tlm') )).toFixed(2) } THB/h : ${ Number( window['total']['Profit']['day'] ).toFixed(4) } TLM/h`
									}else{
										TotalTLMPerHour.innerText = `0.00 THB/h : 0.0000 TLM/h`
									};
								}catch(e){
									TotalTLMPerHour.innerText = `0.00 THB/h : 0.0000 TLM/h`
								};
								try{
									if(
										window['information-data']["DATA"][ _WAXID ]['vers']['fw']["sw"] == true && 
										Object.keys( window['information-data']['DATA'] ).length >= 1 && 
										!document.querySelector(`iframe[src*="farmersworld.idigger.online/affiliate?waxid=${ _WAXID }"]`) 
									){
										document.querySelector(`iframe[url*="farmersworld.idigger.online/affiliate?waxid=${ _WAXID }"]`).setAttribute(
											'src', document.querySelector(`iframe[url*="farmersworld.idigger.online/affiliate?waxid=${ _WAXID }"]`).getAttribute('url')
										); 
										document.querySelector(`iframe[url*="farmersworld.idigger.online/affiliate?waxid=${ _WAXID }"]`).parentElement.parentElement.querySelector('th[colspan*="7"]').style.display = 'table-cell'; 
										document.querySelector(`iframe[url*="farmersworld.idigger.online/affiliate?waxid=${ _WAXID }"]`).parentElement.parentElement.querySelector('th[colspan*="2"]').style.display = 'table-cell'; 
										
									}; 
									if(
										window['information-data']["DATA"][ _WAXID ]['vers']['fw']["sw"] == true && 
										Object.keys( window['information-data']['DATA'] ).length >= 1 && 
										document.querySelector(`iframe[src*="farmersworld.idigger.online/affiliate?waxid=${ _WAXID }"]`) 
									){
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-switch').checked 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_plants'][0]; 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-corn-input').value 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_plants'][1]; 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-barley-input').value 	= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_plants'][2]; 
										}catch(e){ }; 
										
										try{
											document.querySelector(
												'th[id*="' + _WAXID + '-fw-panel-monitor"]'
											).querySelector(
												'div.fw-deposit-fwf-text'
											).innerText = 'DEPOSIT FWF ' + ( '0000' + window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_depo_fwf'][1] ).slice(-'0000'.length); 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwf-switch').checked 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_depo_fwf'][0]; 
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwf-input').value 			= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_depo_fwf'][1]; 
										}catch(e){ }; 
										try{
											document.querySelector(
												'th[id*="' + _WAXID + '-fw-panel-monitor"]'
											).querySelector(
												'div.fw-deposit-fwg-text'
											).innerText = 'DEPOSIT FWG ' + ( '0000' + window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_depo_fwg'][1] ).slice(-'0000'.length); 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwg-switch').checked 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_depo_fwg'][0]; 
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwg-input').value 			= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_depo_fwg'][1]; 
										}catch(e){ }; 
										
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('div.fw-withdraw-deposit div').innerText 		= `W ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['fw']['db']['balance']['pre']['FWW']).toFixed(2)
											} F ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['fw']['db']['balance']['pre']['FWF']).toFixed(2)
											} G ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['fw']['db']['balance']['pre']['FWG']).toFixed(2)
											} : WITH [0%] DEPO : W ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['fw']['db']['balance']['has']['FWW']).toFixed(2)
											} F ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['fw']['db']['balance']['has']['FWF']).toFixed(2)
											} G ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['fw']['db']['balance']['has']['FWG']).toFixed(2)
											}`; 
										}catch(e){ }; 
									}; 
								}catch(e){ }; 
								
								//  try{
								//      delete window.window['total']['Stake']; 
								//  }catch(e){}; 
								//  try{
								//      delete window.window['total']['Profit']; 
								//  }catch(e){}; 
								
							}, 100 + Math.ceil(Math.random() * 4000)); 
						})(WAXID); 
                        
                    }; 
                    
                }; try{ delete window['WAXID']; delete WAXID }catch(e){}; 

            }).catch(error => {
                console.error(`Error : ${ error }`); 
                document.querySelector('div[class*="progress-bar"][id*="time_pg"]').style.width = '0%'; 

                //	function fetchProcessNone(){
                try{ clearInterval(window['fetchProcessSec']) }catch(e){}; 
                var i = 0; window['fetchProcessSec'] = setInterval(function () {
                    i+= Math.ceil(Math.random() * 12) + 1;
                    if (i >= 180) {
                        document.querySelector('div[class*="progress-bar"][id*="time_pg"]').style.width = '0%'; 
                        clearInterval(window['fetchProcessSec']); thiscode(); 
                    }; 
                }, 200); 
                
            }); 
            
        })();

        // AUTO UPDATE PROCESS BAR BY STYLE
        // AUTO UPDATE PROCESS BAR BY STYLE
        // AUTO UPDATE PROCESS BAR BY STYLE
        for (p of document.querySelectorAll('.progress-bar')){
            new MutationObserver(function(mutations) {
                mutations.forEach(function(mutationRecord) {
                    mutationRecord.target.innerText = mutationRecord.target.style.width; 
                    $('.progress-bar').each(function( index ) {
                        if(
                            Number($( this )[0].style.width.replace('%', '')) >= 90
                        ){
                            $( this )[0].className = 'progress-bar bar-error'; return true; 
                        }
                        if (
                            Number($( this )[0].style.width.replace('%', '')) >= 75
                        ) {
                            $( this )[0].className = 'progress-bar bar-warning'; return true; 
                        }
                        if(
                            Number($( this )[0].style.width.replace('%', '')) >= 55
                        ){
                            $( this )[0].className = 'progress-bar bar-free'; return true; 
                        }; 
                        if(
                            Number($( this )[0].style.width.replace('%', '')) <= 54
                        ){
                            $( this )[0].className = 'progress-bar bar-success'; return true; 
                        }; return true; 
                    }); 
                    
                }); 
            }).observe(p, {
                attributes          : true, 
                attributeFilter     : ['style']
            }); 
        }; 
        // AUTO UPDATE PROCESS BAR BY STYLE
        // AUTO UPDATE PROCESS BAR BY STYLE
        // AUTO UPDATE PROCESS BAR BY STYLE
    }; 
}); 
