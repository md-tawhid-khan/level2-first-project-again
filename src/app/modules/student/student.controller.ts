import { studentServices } from './student.services';
import { Request, Response } from "express";

const createStudent=async (req:Request,res:Response)=>{
 try{
  const student=req.body;
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
}

export const studentController={
  createStudent
}