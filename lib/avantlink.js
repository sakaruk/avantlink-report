var request = require('request')
var csv = require('csv')

Affiliate = function($details) {
	this.details = $details
}

Affiliate.prototype.Report = function($params, cb ) {
    	$params.auth_key = this.details.auth_key
	$params.affiliate_id = this.details.affiliate_id
	$params.output = 'csv'
	request({
		method: 'GET',
		url: "https://classic.avantlink.com/api.php",
		qs: $params,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	},function(err,res,body) {
		if (err)
			return cb(err)
                    
		csv.parse( body, function(err, data){
			if (err)
				return cb(err)
			
			if (!data.length)
				return cb({errorMessage: 'empty csv'})
			
			var $indexes = {}
			var $ret = []
			for (var $i in data) {
				if ($i === '0') {
					// skip first row
				} else {
					var $item = {}
					for (var $j in data[$i]) {
						$item[ data[0][$j] ] = data[$i][$j]
					}
					$ret.push($item)
				}
			}
			cb(null,$ret)
		})
	})
}
module.exports =  {
	Affiliate: function($details) {
		return new Affiliate($details)
	}
}

