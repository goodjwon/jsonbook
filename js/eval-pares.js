
// var x = '{ "sessionDate": "2014-10-06T13:30:00.000Z" }';

// console.log('Parse with eval(): ' + eval('(' + x + ')').sessionDate + '\n');

// console.log('Parse with JSON.parse(): ' + JSON.parse(x).sessionDate);


var x = '{ "sessionDate": new Date() }';

//eval은 안전하지 않다. 실행 됨. 악의적인 처리가 가능 함.
console.log('Parse with eval(): ' + eval('(' + x + ')').sessionDate + '\n');

//처리를 중지 시킴. json 안에서 logical 한 부분 실행은 지양 해야 함.
console.log('Parse with JSON.parse(): ' + JSON.parse(x).sessionDate);