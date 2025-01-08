import type {Request, Response} from 'express'
import Project from '../models/Project'
import { error } from 'node:console'

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

    static getProjectById = async (req: Request, res: Response): Promise<void> => {

        const { id } = req.params

        try {
            const project = await Project.findById(id)

            if(!project)
            {
                const error = new Error('Proyecto no Encontrado')
                res.status(400).json({error: error.message})
            }
            res.json(project)
        } catch (error) {
            console.log(error)
        }
        
    }
}