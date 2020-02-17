// Code your solution in this file

function findMatching(drivers, str){
  return drivers.filter(function (el) {
    return el.toLowerCase() == str.toLowerCase()
  })
}

function fuzzyMatch(drivers, str){
  return drivers.filter(function (el){
    return el
  })
}


