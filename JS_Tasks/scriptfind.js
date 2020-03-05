var request=new XMLHttpRequest()
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.onload=function()
{
var data=JSON.parse(this.response)
const findindia = data.find((country) => {
	return country.name.toLowerCase() == "india"
})
console.log(findindia)

}
request.send()