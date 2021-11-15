import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  students=[
            {"Name":"Chaitanya","Registration":"201900314","Department":"CSE","Semester":5},
            {"Name":"Mahesh","Registration":"201900632","Department":"EEE","Semester":3},
            {"Name":"Rohit","Registration":"201900362","Department":"MECH","Semester":7},
            {"Name":"Anudeep","Registration":"201900637","Department":"IT","Semester":5},
            {"Name":"Dhileep","Registration":"201900351","Department":"CIVIL","Semester":1}
          ]
  getdetails()
  {
    return this.students
  }
  constructor() { }
}
