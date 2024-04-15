let students = new Map();
students.set("Lisa", 1234);
students.set("jack", 9073);
students.set("barack", 6372);
students.set("josh", 8632);
students.forEach((name, id) => {
    console.log(`The student's name is ${name} and id is ${id}`);
});
export {};
