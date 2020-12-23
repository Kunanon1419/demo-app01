//clone object
var student1 = {
    id:1,
    name: 'Name1'
}
var student2 = student1
student2.id = 2
console.log(student1.id,student2.id)
var student3 = JSON.parse(JSON.stringify(student1))
student3.id = 3
console.log(student1.id,student3.id)