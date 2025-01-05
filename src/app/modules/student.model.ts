import { model, Schema,  } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserInfo } from './student/student.interface';

const userSchema= new Schema<UserInfo>({
    firstName:{type : String, required:true},
    middleName:{type : String, },
    lastName:{type : String, required:true}
})

const guardianSchema= new Schema<Guardian>({
    fatherName:{type:String, required:true},
    fatherOccupation:{type:String, required:true},
    fatherContactNo:{type:String, required:true},
    motherName:{type:String,required:true},
    motherOccupation:{type:String,required:true},
    motherContactNo:{type:String,required:true},
})

const localGuardianSchema=new Schema<LocalGuardian>({
    name:{type:String,  required:true},
    occupation:{type:String, required:true},
    contactNo:{type:String, required:true},
    address:{type:String, required:true}
})

//  Create a Schema corresponding to the document interface.
const studentSchema = new Schema <Student>({
    id:{type : String},
    name:userSchema,
    gender:['male','female'],
    dateOfBirth:{type:String},
    email:{type:String,required:true},
    contactNo:{type:String, required:true},
    emergencyContactNo:{type:String, required:true},
    bloodGroup:["A+","A-","B+","B-","O+","O-","AB+","AB-"],
    presentAddress:{type:String,required:true},
    permanemtAddress:{type:String, required:true},
    guardian:guardianSchema,
    localGuardian:localGuardianSchema,
    profileImg:{type:String},
    isActive:['active','blocked']
})

// Create a Model.

const Student =model<Student>('Student',studentSchema)