# AvantLink report
AvantLink Affiliate Network Reports.

    //Loading the modules
    var $avantlinkDetails = {
		affiliate_id : id,
		auth_key : auth_key
	}
	var AvantLink = require('./lib/avantlink').Affiliate($avantlinkDetails)


    //Getting the report
	AvantLink.Report({
		    module : 'AffiliateReport',
		    report_id : 8,
                    output : 'csv',
		    date_begin: '2016-07-12', 
		    date_end: '2016-07-13'
	}, function(err,data) {
		console.log(err,data)
	})
	
# Filters
Check the parameters that can be passed through Report from https://classic.avantlink.com/affiliate/api_request_builder.php .  The parameters differ according to the module.
