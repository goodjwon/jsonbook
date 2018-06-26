var speaker = {
    firstName: 'Larson',
    lastName: 'Richard',
    email: 'larsonrichard@ecratic.com',
    about: 'Incididunt mollit cupidatat magna excepteur do tempor ex non ...',
    company: 'Ecratic',
    tags: ['json', 'rest', 'api', 'oauth'],
    registered: true
  };

function serializeSpeaker(key, value){
    return (typeof value === 'string' || Array.isArray(value)) ? undefined : value;
}


//javascript object(리터널)를 json 객채로 만들어 준다.
console.log('Speaker (pretty print):\n'+ JSON.stringify(speaker, null, 3)+'\n');


console.log('Speaker without String and Array:\n'+ JSON.stringify(speaker, serializeSpeaker, 2)+'\n');


speaker.toJSON = function(){
    return 'Hi there!'
};

console.log('spker.toJSON():' + JSON.stringify(speaker, null, 2));
