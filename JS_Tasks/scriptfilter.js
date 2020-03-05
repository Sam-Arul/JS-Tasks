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