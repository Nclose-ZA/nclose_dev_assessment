import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {MatSnackBar , MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  taskListForm!: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  isTyping = false;
  constructor(private formbuilder: FormBuilder, 
              private taskService : TaskService, 
              private toastr: ToastrService,
              private _snackBar : MatSnackBar
              ) { }
  

  ngOnInit(): void {
    this.taskListForm = this.formbuilder.group({
      taskList : this.formbuilder.array([this.addTaskList()])
    });
    this.taskListForm.get('task')?.disable();
    
    this.getPulicIP();
  }

  get inputFieldControl() {
    return this.taskListForm.get('task');
  }

  onInputKeyup() {
    if(this.inputFieldControl?.value !== '') {
      this.isTyping = true;
      this.inputFieldControl?.enable();
    } else {
      this.isTyping = false;
      this.inputFieldControl.disable();
    }
  }
  //get method to console log public ip api
  getPulicIP() {
    this.taskService.getIP()
    .subscribe(res => {
      console.log("Public IP :", res.ip);
    });
  }

  addTaskList() {
    return this.formbuilder.group({
      task : ['']
    });
  }

  addTaskGroup() {
    this.addSnackBar();
    this.taskListArray.push(this.addTaskList());
  }
  //delete function to delete desired input field for the array
  deleteTaskList(index : any) {
    this.taskListArray.removeAt(index);
    this.removeSnackBar();
  }

  get taskListArray() {
    return<FormArray> this.taskListForm.get('taskList');
  }

  clearAllTask() {
   //iterating over form controls
    Object.keys(this.taskListArray.controls).forEach(key => {
      //for loop to clear input fields not including the first index
      for(let i =1; i < this.taskListArray.controls.length; i++){
        if( parseInt(key) > 0){
          this.taskListArray.removeAt(i);
        }
        this.clearSnackBar();
      }
    }); 
  }
  //function notification bar to delete all tasks
  clearSnackBar() {
    this._snackBar.open('You have removed all task!', '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 1000,
      panelClass: 'error'
    });
  }
  //function notifacation bar for removing a task
  removeSnackBar() {
    this._snackBar.open('You have removed a task!', '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 1000,
      panelClass: 'error'
    });
  }
  //function notifacation bar for adding a function
  addSnackBar() {
    this._snackBar.open('You have added a task!', '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 1000,
      panelClass: 'success'
    });
  }
}
