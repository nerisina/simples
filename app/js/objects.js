var person = {
  name: 'Neri',
  country: 'MX',
  age: '31',
  treehouseStudent: true,
  skills: ['Js', 'HTML', 'css']
};

function print(message){
  var div = document.getElementById('output');
  div.innerHTML = message;
}
var message = '<p> Hello. My name is ' + person.name +'</p>';
person.name = 'Neri Esparza';
person.country = 'NY';
message += '<p> I live in ' + person.country + '</p>';

message += '<p class="mdc-typography--caption">Actually my full name is ' + person.name + '</p>';
message += '<p> My age is ' + person.age + '</p>';
message += '<p> I have ' + person.skills.length + ' skills: <span class="mdc-theme--primary-bg">' + person.skills.join(', ')+ '</span></p>';
print(message);

for( prop in person){
  console.log(prop,': ', person[prop]);
}
