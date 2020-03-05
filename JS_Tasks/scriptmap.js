var request=new XMLHttpRequest()
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.onload=function()
{
var data=JSON.parse(this.response)
const caps = data.map((item) => {
	return item.name.toUpperCase()
})
for(var i in caps){
console.log(caps[i])
} 
}
request.send()
