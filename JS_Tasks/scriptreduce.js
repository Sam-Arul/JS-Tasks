var request=new XMLHttpRequest()
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.onload=function()
{
var data=JSON.parse(this.response)
const filteredItems = data.filter((item) => {
	return item.capital.length <=5
})
for(var i in filteredItems){
console.log(filteredItems[i].capital)
} 
}
request.send()


var numbers = [1,2,3,4,5,6,7,8,9];

var sum_of_numbers = numbers.reduce(function(a, b){return a+b},0);

console.log(sum_of_numbers);