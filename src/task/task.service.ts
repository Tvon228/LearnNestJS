import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-tast.dto';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'Learn NestJS',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Learn Rest API',
      isCompleted: true,
    },
  ];

  findAll() {
    return this.tasks;
  }

  findByID(id: number) {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  create(dto: CreateTaskDto) {
    const { title } = dto;

    const newTask = {
      id: this.tasks.length + 1,
      title,
      isCompleted: false,
    };

    this.tasks.push(newTask);

    return this.tasks;
  }

  update(id: number, dto: UpdateTaskDto) {
    const { title, isCompleted } = dto

    const task = this.findByID(id)

    task.title = title,
    task.isCompleted = isCompleted

    return task
  }

  patchUpdateTask(id: number, dto: Partial<UpdateTaskDto>){
    const task = this.findByID(id)

    Object.assign(task, dto)

    return task
  }
}
