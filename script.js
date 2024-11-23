//Створити телефонну книгу
//створити початковий клас Abonent, де зберігатимуться ім*я і номер
//створити set який прийматиме телефон і номер
//створити get який виводитиме данні про абонента
//створити три різних юзери
//вивести данні

/*class Phonebook {
    constructor(abonents) {
        this.abonents = abonents;
    }
    addAbonent(name, phone) {
    this.abonents = this.abonents.push({name,phone});
    console.log( 'Контакт ${name} з номером ${phone} додано');
    }
    deleteAbonent(name,phone) {
    this.abonents = this.abonents.filter(abonent => abonent.name !== name);
    console.log(`Контакт ${name} видалено`);
    }
    findAbonent(name,phone) {
    this.abonents = this.abonents.find(abonent => abonent.name === name);
    if(abonent) {
    console.log( 'Контакт ${abonent.name} з номером {contact.phone} знайдено');
    }
    else {
    comsole.log( `Контакт ${name} не знайдено`);
    }
    }
    listAbonents() {
    if(this.abonents.length === 0) {
    console.log(`Телефонна книга порожня`);
    }
    else { 
    console.log (`Список контактів`);
    this.abonents.forEach(abonent => {
    console.log(`Ім'я ${abonent.name}, номер ${abonent.phone}`);
    });
    }
    }
    }

class Abonent {
    constructor(props) {
        this.name = props.name;
    };
    contactsName = "";
    contactsNumber = "";
        set name(newContact) {
            const nameRow = newContact.split(' ');
            this.contactsName = nameRow[0];
            this.contactsNumber = nameRow[1];
        };
        get name () {
            return ` : ${this.contactsName} :  ${this.contactsNumber}`
        };
}

const Roman = new Abonent({
    name: 'Roman +380987028897', 
});
console.log(Roman);
const Olha  = new Abonent ({
    name:  'Olha +380972144434',
});
console.log(Olha);
const Mayre = new Abonent ({
    name: 'Mayre +380994230933',
});
console.log(Mayre);*/
