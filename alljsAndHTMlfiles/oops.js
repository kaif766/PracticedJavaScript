//oops
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }

    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}


//Intantiate object
const Person11 = new Person('Malik Rehan', 'Devalapur', '01-11-20012');
const Person1 = new Person('Mohammad Kaif', 'Devalapur', '03-06-2001');
const Person2 = new Person('Mahe Jabeen', 'Devalapur', '05-05-1975');
const Person3 = new Person('Mohammad Sadiq', 'Devalapur', '07-19-1973');

console.log(Person3.dob);
// console.log(Person2.dob);

// console.log(Person1.getBirthYear());
// console.log(Person1.getFullName());

function PersonDetails(FirstName, LastName, SchoolName, Prev_Percentage) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.SchoolName = SchoolName;
    this.Prev_Percentage = Prev_Percentage;
}

const details = new PersonDetails('MohammadKaif ', ' Devalapur', 'NPET', 78);

console.log(details);