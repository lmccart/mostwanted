var api = require('./lib/api')
var automator = require('./lib/automator')
var client = api.createClient()

// Copy your preferred match search's url from the website.
var matchOptions = {
	searchUrl: 'http://www.okcupid.com/match?filter1=0,17&filter2=2,0,100&filter3=5,315360000&filter4=1,0&filter5=35,0&locid=0&timekey=1&matchOrderBy=RANDOM&custom_search=0&fromWhoOnline=0&mygender=f&update_prefs=1&sort_type=0&sa=1&using_saved_search=',
	count: 100
}

var automatorOptions = {
	matchOptions: matchOptions,
	dryRun: true,
	maxMessages: 100,
	timeBetweenRequests: 1000
}

var message = 'How are you?'

client.authenticate('user', 'pass', function(success){	
	automator.messageMatches(client, message, automatorOptions, function(){
		console.log('Complete!')
	})
})