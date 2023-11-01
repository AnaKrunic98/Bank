const bankApp = {
    accounts : [],

    openAccount: function (cardHolder,cardNumber) {
        let account = {
            id:Date.now(),
            cardNumber:cardNumber,
            cardHolder: cardHolder,
            balance: 0,
        }

        this.accounts.push(account)
    },

    deposit: function(cardNumber,amount) {
        let account = this.findAccount(cardNumber)
        
        account.balance += amount
        let check = this.checkBalance(cardNumber) 
    },

    pay: function(cardNumber,amount) {
        let account = this.findAccount(cardNumber)

        if(account.balance > amount){
        account.balance -= amount
        } else {
            console.log("Nema dovoljno novca na racunu")
        }

        let check = this.checkBalance(cardNumber) 
    },
    
    findAccount: function (cardNumber) {
        let account 
        this.accounts.forEach(acc => {
            if (cardNumber === acc.cardNumber) {
                account = acc
            }
        })
        return account
    },

    checkBalance: function (cardNumber) {
        let account = this.findAccount(cardNumber)

        console.log(`Stanje racuna: ${account.balance}`)
    }


}

bankApp.openAccount("Test Test", 423102683)
bankApp.openAccount("Ana Krunic", 123123123)

bankApp.deposit(423102683,25)
bankApp.deposit(123123123,100)

bankApp.pay(423102683,15)
