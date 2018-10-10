var test = [
    'test',
    'tesereer'
];

test.forEach(function (element) {
    console.log('element ' + element);
}, this);


var testObject = {
    'test': 12345,
    'tesereer' : 'wefgh'
};

Object.keys(testObject).forEach((elem)=>{
   console.log(elem, ' == ' , testObject[elem]); 
});

