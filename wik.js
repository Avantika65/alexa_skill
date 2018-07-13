var https =require('https')
var urlPrefix= "https://9a3awibe5g.execute-api.ap-south-1.amazonaws.com/staging/answer/"
var url= urlPrefix+ ques;
  https.get(url, function(response)
	{
	  var body= '';
	  
	  response.on('data', function (chunk)
	      {
		    body +=chunk;
		  });
	 
	 response.on('end', function ()
	      {
		    console.log(body);
		  });  
	}).on('error',function(e) {
	    console.log("Got error: ", e);
	});