function removeProperty(obj, key){
delete obj[key];
return obj;
}
obj={name:"Sam",age:22}
console.log(removeProperty(obj,"name"));