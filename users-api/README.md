User Schema:{
	Email (Unique),
	Password,
	Phone,
	Role [Admin, Teacher, Student]
}


There are Three Roles ==> Admin, Teacher, Student


/Register ==> Rigester User

/Logout ==>  Logout User

/Login ==> Login User




/  ==> EveryOne Allowed Without Auhtentication


/Admin  ==> Only Admin Allowed 


/GetAllCourses  ==> Only Admin Allowed 


/GetAllStudents  ==> Only Admin Allowed


/GetAllTeachers  ==> Only Admin Allowed  


/MakeAssignment  ==> Only Teacher Allowed 


/MakeQuiz  ==> Only Teacher Allowed 


/SubmitAssignment  ==> Only Student Allowed 


/SubmitQuiz  ==> Only Student Allowed 


/MyCourse  ==> Teacher and Student Allowed

