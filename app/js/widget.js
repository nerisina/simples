var xhr = new XMLHttpRequest();
var url =  'http://pokeapi.co/api/v2/pokemon/1/';


xhr.open('GET', url);
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var persons = JSON.parse(xhr.responseText);
    for(var i; i >= 20; i++){
      console.log(i);
    }

  }
};
xhr.send();
