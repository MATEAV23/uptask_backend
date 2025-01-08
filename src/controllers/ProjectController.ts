import type {Request, Response} from 'express'
import Project from '../models/Project'

export class ProjectController {

    static createProject = async (req: Request, res: Response) => {

        

        try {
            await Project.create(req.body)
            res.send('Proyecto creado correctamente')
        } catch (error) {
            console.log(error)
        }

        
    }

    static getAllProjects = async (req: Request, res: Response) => {

        try {
            const projects = await Project.find({})
            res.json(projects)
        } catch (error) {
            console.log(error)
        }
        
    }
}