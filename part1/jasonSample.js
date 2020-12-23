// JSON.stringify, JSON.parse

/*
 JSON (JavaScript Object Notation) คือ รูปแบบของข้อมูลที่ใช้สำหรับแลกเปลี่ยนข้อมูลที่มีขนาดเล็ก 
 ซึ่งคนสามารถทำความเข้าใจได้ง่าย และสามารถถูกสร้างและอ่านโดยเครื่องได้ง่าย 
*/
// JSON.stringify() ใช้แปลงข้อมูล ให้กลายเป็นแถว string
var student ={
    code:'001',
    name:'Artdvp'
}
let stri = JSON.stringify(student)
console.log(JSON.stringify(student))

//JSON.parse() ใช้แปลงข้อมูล กลับไปเป็น JSON
let par = JSON.parse(stri)
console.log(par)

let student1 = {
    id:1,
    name:{
        list:[1]
    }
}
// clone object ใช้ clone ข้อมูล json ทั้งหมดโดยไม่เกี่ยวข้องกับคำแรก
let student2 = JSON.parse(JSON.stringify(student1))

student2.id = 2
console.log(student1.id)