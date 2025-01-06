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
    id:{type : String, required:true, unique:true},
    name:{
        type:userSchema,
        required:[true,'name is required'],
    },
    gender:{
        type:String,
        enum:{
            values:['male','female','other'],
             message: `{VALUE} is not supported`
        },
        required:true
    },
    dateOfBirth:{type:String},
    email:{type:String,required:[true,'email is required'], unique:true},
    contactNo:{type:String, required:[true,'contact no is required']},
    emergencyContactNo:{type:String, required:[true,'emergency contact no is required']},
    bloodGroup:{
        type:String,
        enum:{
            values:["A+","A-","B+","B-","O+","O-","AB+","AB-"],
            message:'{VALUE} is not valid'
        },
    },
    presentAddress:{type:String,required:[true,'present address is requiredd']},
    permanemtAddress:{type:String, required:[true,'permanent address is required ']},
    guardian:{
        type:guardianSchema,
        required:[true,'guardian information is required'],
    },
    localGuardian:{
        type:localGuardianSchema,
        required:[true,'local guardian information is required'],
    },
    profileImg:{type:String},
    isActive:{
        type:String,
        enum:['active','blocked'],
        default:'active'
    }
})

// Create a Model.

export const StudentModel =model<Student>('Student',studentSchema)