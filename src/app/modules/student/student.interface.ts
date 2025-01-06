import { Schema, model, connect } from 'mongoose';

export type Guardian = {
    fatherName:string;
    fatherOccupation:string;
    fatherContactNo:string;
    motherName:string;
    motherOccupation:string ;
    motherContactNo:string;
}

export type UserInfo={
    firstName: string;
    middleName: string;
    lastName:string;
}

export type LocalGuardian={
    name:string;
    occupation:string;
    contactNo:string;
    address:string;
}

export type Student = {
    id:string;
    name:UserInfo;
    gender:'male'|'female'|'other';
    dateOfBirth:string;
    email: string;
   contactNo:string;
   emergencyContactNo:string;
   bloodGroup?:"A+"|"A-"|"B+"|"B-"|"O+"|"O-"|"AB+"|"AB-";
   presentAddress:string;
   permanemtAddress:string;
   guardian:Guardian;
   localGuardian:LocalGuardian;
   profileImg:string;
   isActive:'active'| 'blocked';
  }