class Account{
    min_Bal=500;
    open_Account(){
        console.log("Account Opened Successfully")
    }
    deposit(){
        console.log("Amount Deposited successfully")
    }
    withdrawl(){
        console.log("Insuffient Funds -add more")
    }
    get_Bal(){
        console.log('Always Server busy')
    }
    close_Account(){
        console.log("Bal is -ve pls add more!")
    }
}
let a1=new Account()
console.log(a1.min_Bal)
a1.open_Account()
a1.deposit()
a1.withdrawl()
a1.get_Bal()
a1.close_Account()