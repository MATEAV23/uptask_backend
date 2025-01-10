import type {Request, Response} from 'express'
import Project from '../models/Project'
import Task from '../models/Task'

export class TaskController {

    static createTask = async (req: Request, res: Response) => {

        const { projectId } = req.params
        const project = await Project.findById(projectId)
        if (!project) {
            const error = new Error('Proyecto no Encontrado')
            res.status(400).json({ error: error.message })
        }
        try {
            const task = new Task(req.body)
            task.project = project.id
            project.tasks.push(task.id)
            await task.save()
            await project.save()
            res.send('Tarea Creada con exito')
        } catch (error) {
            console.log(error)
        }
    }



}