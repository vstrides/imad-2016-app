var button = document.getElementById('counter');

var counter = 0;

button.onclick = function() {

var request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if(request.readyState === XMLHttpReaquest.DONE)
    {
        if(request.status === 200)
        {
            counter = request.responseText;
            var span = document.getElementById('count');  
            span.innerHTML = counter.toString();
        }
    }
};

request.open('GET', 'http://vstrides.imad.hasura-app.io/counter', true);
request.send(null);
};