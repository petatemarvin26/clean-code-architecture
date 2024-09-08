class School {
  private students: Student[];
  private teachers: Teacher[];

  public addStudent(student: Student) {
    this.students.push(student);
  }
  public addTeachers(teacher: Teacher) {
    this.teachers.push(teacher);
  }

  public getStudentAverageGrade() {}
  public getTeachersLessonPlan() {}
}

class Student {
  grade: number;
}

class Teacher {
  lessonPlan: object;
}
