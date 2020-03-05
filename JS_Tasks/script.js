var request=new XMLHttpRequest()
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.onload=function()
{
var data=JSON.parse(this.response)
for (var i in data)
{
console.log(" country name:",data[i].name,",","country capital:",data[i].capital);
}
}
request.send()
