import { Component} from '@angular/core';
export interface Task {
  id: number
  text: string
  done: boolean
}

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class TodoPageComponent{
  tasks: Task[] = [];
  private nextId = 1

  addTask(text: string){
    if (!text.trim()) return
  }
}

