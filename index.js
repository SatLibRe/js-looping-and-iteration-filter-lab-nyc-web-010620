// Code your solution in this file

function findMatching(drivers, str){
  return drivers.filter(function (el) {
    return el == str.toLowerCase()
  })
}


