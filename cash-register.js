function checkCashRegister(price, cash, cid) {
  let change = cash*100 - price*100;
  let cidSum = 0
  for (let a of cid){
    cidSum += a[1]*100
    
  }
  if(change > cidSum){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }else if (change === cidSum){
    return {status: "CLOSED", change: cid}
  }else {
    let answer = []
    cid=cid.reverse()
    const currUnit = {"PENNY": 1,"NICKEL": 5,"DIME": 10,"QUARTER": 25,"ONE":100,"FIVE":500,"TEN":1000,"TWENTY":2000,"ONE HUNDRED":10000}; 
    for (let a of cid){
      let container = [a[0], 0]
      a[1] = a[1]*100
      while(change >= currUnit[a[0]] && a[1] >0){
        change -= currUnit[a[0]]
        a[1] -= currUnit[a[0]]
        container[1] += currUnit[a[0]]/100
      }
      if(container[1]>0){
        answer.push(container)
      }
    }
    if(change > 0){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    return {status: "OPEN", change: answer}
  }
}
