var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
	'article-one': {
	title: 'article-one | Parvaiz Khan',
	heading: 'Article One',
	date: '21 Sept, 2016',
	content: `
		<p>
	        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quam leo, bibendum sodales velit vel, pretium vehicula eni
	        Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent non ornare velit, at faucibus nibh. Fusce vulputate, metus sie
	        amet molestie pretium, urna mi rhoncus odio, ut dapibus dui quam non purus. Quisque in feugiat urna. Sed pharetra libero vitae tortor
	        dignissim, ut porttitor nisi semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean luctus dui quis bibendum
	        ornare. Morbi convallis consequat lectus, ac dapibus magna rutrum eu. Phasellus vel egestas ex. Proin purus odio, tincidunt nec purus
	        at, fermentum sagittis quam. Nullam varius porttitor augue ut sollicitudin. 
	    </p>
	    <p>
	        Nulla eu blandit mauris. Sed tempor ut neque a imperdiet. Nulla lacinia, leo a egestas aliquet, felis eros maximus erat, ut volutpat
	        nibh lorem vel eros. Vivamus at arcu id ex commodo venenatis convallis in enim. Maecenas pulvinar ex a condimentum varius. Sed dui
	        elit, fermentum eu augue sit amet, interdum ornare arcu. Aenean ultrices euismod vulputate. Pellentesque habitant morbi tristique
	        senectus et netus et malesuada fames ac turpis egestas. Phasellus quis velit venenatis, sollicitudin sem sit amet, imperdiet sem. 
	    </p>
	    <p>
	       Morbi nisi nisl, porta at euismod non, sodales eget mi. Phasellus ornare turpis non ex dignissim dapibus. Donec purus sapien, blandit
	       et interdum non, lobortis et arcu. In hac habitasse platea dictumst. Proin in urna vitae tellus imperdiet molestie sed et nibh. Cras
	       malesuada efficitur molestie. Morbi auctor egestas turpis, vitae pulvinar diam auctor vitae. Morbi a orci in dolor condimentum pulvinar
	       sit amet id nibh. Curabitur orci nisi, euismod non lorem a, ullamcorper aliquam nisl. Morbi ac convallis lorem. Nunc nec faucibus mi.
	       Fusce vel fermentum arcu. Nulla a leo urna. In ac fringilla elit. Donec pretium sapien ligula, at porta ipsum commodo eget. 
	    </p>`
 	},

 	'article-two': {
	title: 'article-two | Parvaiz Khan',
	heading: 'Article Two',
	date: '24 Sept, 2016',
	content: `
		<p>
	        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quam leo, bibendum sodales velit vel, pretium vehicula eni
	        Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent non ornare velit, at faucibus nibh. Fusce vulputate, metus sie
	        amet molestie pretium, urna mi rhoncus odio, ut dapibus dui quam non purus. Quisque in feugiat urna. Sed pharetra libero vitae tortor
	        dignissim, ut porttitor nisi semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean luctus dui quis bibendum
	        ornare. Morbi convallis consequat lectus, ac dapibus magna rutrum eu. Phasellus vel egestas ex. Proin purus odio, tincidunt nec purus
	        at, fermentum sagittis quam. Nullam varius porttitor augue ut sollicitudin. 
	    </p>
	    <p>
	        Nulla eu blandit mauris. Sed tempor ut neque a imperdiet. Nulla lacinia, leo a egestas aliquet, felis eros maximus erat, ut volutpat
	        nibh lorem vel eros. Vivamus at arcu id ex commodo venenatis convallis in enim. Maecenas pulvinar ex a condimentum varius. Sed dui
	        elit, fermentum eu augue sit amet, interdum ornare arcu. Aenean ultrices euismod vulputate. Pellentesque habitant morbi tristique
	        senectus et netus et malesuada fames ac turpis egestas. Phasellus quis velit venenatis, sollicitudin sem sit amet, imperdiet sem. 
	    </p>`
 	},

 	'article-three': {
	title: 'article-three | Parvaiz Khan',
	heading: 'Article Three',
	date: '27 Sept, 2016',
	content: `
		<p>
	        Nulla eu blandit mauris. Sed tempor ut neque a imperdiet. Nulla lacinia, leo a egestas aliquet, felis eros maximus erat, ut volutpat
	        nibh lorem vel eros. Vivamus at arcu id ex commodo venenatis convallis in enim. Maecenas pulvinar ex a condimentum varius. Sed dui
	        elit, fermentum eu augue sit amet, interdum ornare arcu. Aenean ultrices euismod vulputate. Pellentesque habitant morbi tristique
	        senectus et netus et malesuada fames ac turpis egestas. Phasellus quis velit venenatis, sollicitudin sem sit amet, imperdiet sem. 
	    </p>
	    <p>
	       Morbi nisi nisl, porta at euismod non, sodales eget mi. Phasellus ornare turpis non ex dignissim dapibus. Donec purus sapien, blandit
	       et interdum non, lobortis et arcu. In hac habitasse platea dictumst. Proin in urna vitae tellus imperdiet molestie sed et nibh. Cras
	       malesuada efficitur molestie. Morbi auctor egestas turpis, vitae pulvinar diam auctor vitae. Morbi a orci in dolor condimentum pulvinar
	       sit amet id nibh. Curabitur orci nisi, euismod non lorem a, ullamcorper aliquam nisl. Morbi ac convallis lorem. Nunc nec faucibus mi.
	       Fusce vel fermentum arcu. Nulla a leo urna. In ac fringilla elit. Donec pretium sapien ligula, at porta ipsum commodo eget. 
	    </p>`
 	}
};

function createTemplate(data) {
	var title = data.title;
	var heading = data.heading;
	var date = data.date;
	var content = data.content;

	var htmlTemplate = `<html>
	  <head>
	    <title>${title}</title>
	    <meta name=viewport content="width=device-width, initial-sclae=1">
	  </head>
	  <link rel="stylesheet" type="text/css" href="/ui/style.css">
	<body>
		<div class="container">
		    <div>
		        <a href="/">Home</a>
		        <hr/>
		    </div>
		    <h3>${heading}</h3>
		    <div>
		        <h3>${date}</h3>
		    </div>
		    ${content}
		</div>
	</body>
	</html>
	`;

	return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
	var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter += 1;
    res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
