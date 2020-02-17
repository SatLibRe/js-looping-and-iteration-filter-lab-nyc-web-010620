// Code your solution in this file

function findMatching(drivers, str){
  const newDrivers = drivers.filter(function (el) {el == str})
  return newDrivers
}