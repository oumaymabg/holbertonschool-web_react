interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
}

interface Directors extends Teacher { 
   numberOfReports:number;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function(
	firstName: string, 
	lastName: string
): string{
	return '${firstName[0]}. ${lastName}';
}

  console.log(printTeacher('Monica', 'Bellucci'));

interface classInterface {
   firstName: string;
   lastName: string;
   workOnHomework(): string;
   displayName(): string;
}
  
interface classConstructor {
   new (firstName: string, lastName: string): classInterface;
}


class StudentClass implements classInterface {
   firstName: string;
   lastName: string;

	constructor(firstName: string, lastName:string) {
   	this.firstName = firstName;
   	this.lastName = lastName;
  	}

   workOnHomework(): string {
      return 'Currently working';
   }
  
   displayName(): string {
      return this.firstName;
   }
}


const studentClass: StudentClass = new StudentClass('Monica', 'Bellucci');
console.log(studentClass.displayName());
console.log(studentClass.workOnHomework());