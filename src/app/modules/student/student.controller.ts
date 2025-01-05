import { studentServices } from './student.services';
import { Request, Response } from "express";

const createStudent=async (req:Request,res:Response)=>{
 try{
  const student=req.body.student;
  //will cal service function to send this data

 const result =await studentServices.createStudentIntoDB(student)
    //send response
    res.status(200).json({
      success:true,
      message:'student is created successfully',
      data:result
    })
 }
 catch(error){
  console.log(error)
 }
};

const getStudents=async(req:Request,res:Response)=>{
  try{
    const result=await studentServices.allStudentsIntoDB()
    res.status(200).json({
      success:true,
      message:'students are retrived successfully',
      data:result
    })
  }
  catch(error){
    console.log(error)
  }
 
}

const getSingleStudent=async(req:Request,res:Response)=>{
  try{
    const studentId=req.params.studentId;
    const result=await studentServices.getSingleStudentIntoDB(studentId)
  
    res.status(200).json({
      success:true,
      message:'student is retrived successfully',
      data:result
    })
  }
  catch(error){
    console.log(error)
  }
  
}


export const studentController={
  createStudent,
  getStudents,
  getSingleStudent
}