// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"] ;
  
function destructivelyAppendCat(name){
    return cats.push(name)
}
function destructivelyPrependCat(name){
    return cats.unshift(name)
}
function destructivelyRemoveLastCat(){
        return cats.pop()
}
function destructivelyRemoveFirstCat(){
    return cats.shift()
}
function appendCat(name){
   const newCatsArray = [...cats, name];
   return newCatsArray;
}
function prependCat(name){
     const catsNewArray = [name, ...cats];
    return catsNewArray
}
function removeLastCat(){
    return cats.slice(0, cats.length - 1);
}
function removeFirstCat(){
    return cats.slice(1);
}