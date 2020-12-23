console.log('hello world')

// ชนิดข้อมูล (Data Type)
// Number, String,Boolean
var id = 3
var name = 'Artdvp' // string
var ok = true //Boolean

var name2 = 'Artdvp id = ${id}' // การทำ String ให้สามารถใส่ตัวแปรหรือ expression

// Array,Object,Function

//object
/*
var Object = {
    key:'value'
}
*/
var student ={
    code: '001',
    name: 'Artdvp'
}

//แสดงค่า
console.log(student.code) //001
console.log(student[name])//Artdvp
//เพิ่ม key ใหม่
student['age'] = 25
//ลบ key
delete student.age

//Array
//เก็บข้อมูลใน array เป็นชนิดใดก็ได้
var list =['aaa',1,{id:1},['AAAA','BBBB']]

for(let i=0;i<list.length;i++){
    const element = list[i];
    console.log(element);
}
/*
result:
'aaa'
1
{id:1}
['AAAA','BBBB']
*/






