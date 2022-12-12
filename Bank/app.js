class Account {
  constructor(accname, accno, balance) {
    this.name = accname;
    this.accno = accno;
    this.balance = balance;
    this.transactions = [];
  }

  //Your code here
  obj (accno){
    if(accno === this.accno){
    this.accno =true
    }
    }
    
    deposit (depAct){
    if (this.balance += depAct){
    this.transactions.push(depAct)
    } 
    
    }
    
    withdraw (withD) {
    if(this.balance > withD){
    this.balance = this.balance - withD;
    this.transactions.push(withD)
    } else { 
    this.transactions =false
    }
    }
    
    get showBalance(){
    return this.balance
    }
    
    get accountDetails(){
    return this.transactions
    }
    }
    


module.exports = { Account };
