// Lập trình huoc đối tượng (OOP)
const sv1 = {
    ten : "An",
    tuoi : 20,
    gioithieu : function() {
        console.log("Toi la" , this.ten)
    }
};

const sv2 = {
    ten : "Binh",
    tuoi : 21,
    gioithieu : function() {
        console.log("Toi la" , this.ten)
    }
};

sv1.gioithieu(); // Toi la An
sv2.gioithieu(); // Toi la Binh

// Cách tạo đối tượng bằng class    
class Student{
    constructor(ten, tuoi) {
        this.ten = ten;
        this.tuoi = tuoi;
    }
    gioithieu() {
        console.log("Toi la" , this.ten ,", toi " , this.tuoi , " tuoi");
    }
}

const s1 = new Student("An", 20);
const s2 = new Student("Binh", 21);
s1.gioithieu(); // Toi la An , toi 20 tuoi
s2.gioithieu(); // Toi la Binh , toi 21 tuoi

// kế thừa trong OOP
class Person {
    constructor(ten, tuoi) {
        this.ten = ten;
    }
    gioithieu() {
        console.log("Toi la" , this.ten);
    }
}
class Student1 extends Person {
    constructor(ten,lop) {
        super(ten);
        this.lop = lop;
    }
    hoc() {
        console.log(this.ten + " dang hoc lop " + this.lop);
    }
}
const sv = new Student1("An", "CNNT");
sv.gioithieu(); // Toi la An
sv.hoc(); // An dang hoc lop CNNT

// Đa hình trong OOP
class Animal {
    speak() {
        console.log("Động vật phát ra âm thanh");
    }
}
class Dog extends Animal { 
    speak() {
        console.log("Gâu Gâu");
    }
}
class Cat extends Animal {
    speak() {
        console.log("Meo Meo");
    }
} 
new Dog().speak(); // Gâu Gâu
new Cat().speak(); // Meo Meo

// Đóng gói trong OOP
class Account {
    #balance = 0;
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
    getBalance() {
        return this.#balance;
    }
}
const acc = new Account();
acc.deposit(100);
console.log(acc.getBalance()); // 100
