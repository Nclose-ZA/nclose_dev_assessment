import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.getPublicIpData();
  }

  getPublicIpData() {
    this.taskService.getPublicIP()
      .subscribe(res => {
        console.log("Public IP", res);
      })
  }
}
