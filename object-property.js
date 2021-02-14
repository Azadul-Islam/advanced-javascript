const studends = [
    {id:21, name:'omar Sunny'},
    {id:31, name:'manna'},
    {id:41, name:'moyouri'},
    {id:71, name:'deepjol'},

];

const name = studends.map( s => s.name);
const ids = studends.map(s => s.id);
const bigger = studends.filter(s => s.id>40);
const biggerOne = studends.find(s => s.id>40);

console.log(biggerOne);