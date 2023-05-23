import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StorageService } from 'src/app/service/storage.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {

  taskArray = [{ id: 0, taskName: 'Creading user endpoint', isCompleted: false }];
  taskName!: string;
  taskIndex: number = -1;
  isUpdateMode: boolean = false;

  constructor(private storageService: StorageService) { }

  // Usage examples
  saveData(): void {
    const data = { key: 'value' };
    this.storageService.setItem('myData', data);
  }

  loadData(): void {
    const data = this.storageService.getItem('myData');
    console.log(data);
  }

  removeData(): void {
    this.storageService.removeItem('myData');
  }

  clearAllData(): void {
    this.storageService.clear();
  }


  ngOnit(): void { }

  onSubmit(form: NgForm) {
    console.log('my form', form);
    const id = this.taskArray.length;

    this.taskArray.push({
      id: id,
      taskName: form.controls['task'].value,
      isCompleted: false
    });

    form.reset();
  }



  onDelete(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1);
  }


  onChecked(index: number) {
    console.log(this.taskArray);

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  onUpdate(index: number, newTaskName: string) {
    this.taskName = newTaskName;
    this.taskIndex = index;
    this.isUpdateMode = true;

  }

  onUpdateTask() {
    const task = this.taskArray.find((item) => {
      if (item.id === this.taskIndex) {
        return {
          id: this.taskIndex,
          isCompleted: item.isCompleted,
          taskName: this.taskName
        }
      }
      return item;
    });
    this.taskArray[this.taskIndex] = { id: this.taskIndex, taskName: this.taskName, isCompleted: false };

    this.taskIndex = -1;
    this.taskName = '';
  }
  //   // Retrieve the taskArray from localStorage
  //   const storedTasks = localStorage.getItem('tasks');

  //   // Check if there are stored tasks
  //   const taskArray = storedTasks ? JSON.parse(storedTasks) : [{ id: 0, taskName: 'Creating user endpoint', isCompleted: false }];

  // // Update the taskArray as needed
  // taskArray.push({ id: 1, taskName: 'Implementing authentication', isCompleted: false });

  // // Store the updated taskArray in localStorage
  // localStorage.setItem('tasks', JSON.stringify(taskArray));



}
