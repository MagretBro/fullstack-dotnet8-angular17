import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { StudentsService } from '../services/students.service';
import { Observable } from 'rxjs';
import { Student } from '../type/student';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [AsyncPipe, CommonModule, RouterLink],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students$!:Observable<Student[]>
  toastrService! : ToastrService;
  studentService = inject(StudentsService);


  ngOnInit(): void {
    this.getStudents();
  }

  delete(id:number){
    console.log(id);

    this.studentService.deleteStudent(id).subscribe({
      next:(response)=>{
        this.getStudents();
        this.toastrService.success("is Deleted")
      },
      error: err => {
        console.log(err);
        this.toastrService.success("is Deleted")

      }
    })
  }

  private getStudents(): void{
    this.students$=this.studentService.getStudents()
  }

}
