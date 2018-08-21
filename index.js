function produceDrivingRange(range){
  return function blockRange(start, end){
    let rangeCheck = (parseInt(end)-parseInt(start))
    if (rangeCheck < range) {
      return `within range by ${range - rangeCheck}`
    } else {
      return `${rangeCheck - range} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercent){
  return function tip(billAmount){
    return billAmount * tipPercent
  }
}
