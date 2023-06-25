import { Component, OnInit } from '@angular/core';
import {  FormBuilder } from '@angular/forms';


import { TaskService } from './task.service';
import { SnackBarService } from 'src/app/services/snackBar.service';
import { IipAddress } from 'src/app/models/ipModel';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{

  address!: any;
  tasks: string[] = [];
  newTaskField: string = '';
 

  constructor( private fb:FormBuilder,private snack:SnackBarService,private taskService:TaskService) { }


  ngOnInit(): void {
    this.getIP()

  }
  
  getIP() {
    return this.taskService.getIP().subscribe(
      {
        next: (res: IipAddress) => {
          this.address = res.ip
          console.log(this.address) 
          this.alertWithSuccess()
        },
        error: (err: any) => {
          this.alertWithError()   
        }   
  })
}
  alertWithSuccess() {
    Swal.fire('Success', 'API address successfully fetched', 'success')
  }

  alertWithError() {
    Swal.fire('Error', 'An error occured. Could not fetch API address', 'error')
  }

  addTask() {
    if (this.newTaskField) {
      this.tasks.push(this.newTaskField);
      this.newTaskField = '';
      this.openSnackBar();
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.openErrorSnackBar()
  }

  removeAllTasks() {
    if (this.tasks.length) {
      this.tasks = [];  
    }
    
  }

  
  openSuccessSnackBar() {
    this.addTask() 
    if (this.newTaskField) {
      this.tasks.push(this.newTaskField);
      this.newTaskField = '';
      }
   
  }
  openSnackBar() {
    const message = 'You have added a task!'
    this.snack.openSuccessSnackBar(message)
 }

  openErrorSnackBar() {
    const message='You have removed a task!'
    return this.snack.openDeleteSnackBar(message)
  }
}
