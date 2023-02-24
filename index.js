// Write your solution here!

const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(Fenris){
    return cats.push(Fenris)
}

function destructivelyPrependCat(Boots){
    return cats.unshift(Boots)
}

function destructivelyRemoveLastCat(Garfield){
    return cats.pop(Garfield)
}

function destructivelyRemoveFirstCat(Milo){
    return cats.shift(Milo)
}

function appendCat(Broom){
    return [...cats, Broom]
}

function prependCat(Broom){
    return [Broom, ...cats]
}

function removeLastCat(){
    return cats.slice(0, 2)
}

function removeFirstCat(){
    return cats.slice(1, 3)
}