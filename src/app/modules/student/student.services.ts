import {  StudentModel } from "../student.model";
import { Student } from "./student.interface";


const createStudentIntoDB=async(student:Student)=>{

 const result =   await StudentModel.create(student)

 return result
}

const allStudentsIntoDB=async()=>{
    const result=await StudentModel.find();
    return result
}


const getSingleStudentIntoDB=async(studentId:string)=>{
    const result=await StudentModel.findOne({id:studentId})
    return result
}

export const studentServices={
    createStudentIntoDB,
    allStudentsIntoDB,
    getSingleStudentIntoDB
}