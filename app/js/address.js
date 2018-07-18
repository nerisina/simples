var address = {
  name: 'Zak Linder',
  street: '55 Madison Ave',
  street2: 'Apt 1',
  city: 'New York',
  state: 'NY',
  zip: '10001',
  country: 'United States',
  phone: '(555) 123-4567',
};

function typeAddress(typeAddressCh){
  //if (typeAddress == 1) {
    for( prop in address){
      var output = document.getElementById('output');
      output.innerHTML += address[prop];
    }
    for( prop in address){
      var output = document.getElementById('output');
      output.innerHTML += address[prop];
    }
//  }
}
typeAddress(1);
