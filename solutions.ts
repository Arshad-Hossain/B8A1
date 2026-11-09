const multiplyValue = (value:number, multiplier:number = 2) : number=>{
return value * multiplier
}


const processInput = (a : string | number | boolean) : string | number =>{
if(typeof a === "string"){
    return a.trim().toLowerCase()
}
else if(typeof a === 'number'){
    return a * 10
}
else {
    return a === true ? "Active" : "Inactive"
}
}



const formatCoordinate = (
    coordinate: readonly [latitude: number, longitude: number, locationName: string]
): string => {
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
};




const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return ([] as T[]).concat(...arrays);
};



interface Course {
    title : string
    students : number
    isPublished : boolean
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    course => course.isPublished && course.students >= minStudents
  );
}


const pluckValues = <T, K extends keyof T>(
  items: T[],
  key: K
): T[K][] => {
  return items.map((item) => item[key]);
};


class Employee {
    constructor(protected name: string, private baseSalary: number) {
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    constructor(
        name: string,
        baseSalary: number,
        private department: string
    ) {
        super(name, baseSalary);
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}


const validateAgeAsync = async (age: number): Promise<string> => {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }

    await new Promise<void>((resolve: () => void): void => {
        setTimeout(resolve, 1000);
    });

    return "Access Granted";
};



