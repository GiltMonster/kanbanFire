import { Task } from './../../model/task';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();
}
