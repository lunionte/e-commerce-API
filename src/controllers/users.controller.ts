import { Request, Response } from "express";
interface IUser {
    id: number;
    name: string;
    email: string;
}

const usuarios: IUser[] = [];
let id: number = 1;

export class UserControllers {
    // SUBSTITUI O GET DE TODOS OS USUARIOS
    static getAll(req: Request, res: Response) {
        res.json(usuarios);
    }
    // SUSBTITUI O GET POR ID
    static getById(req: Request, res: Response) {
        const userId = Number(req.params.id);
        const user = usuarios.find((user) => user.id === userId);
        res.json(user);
    }

    // SUBSTITUI O POST DE USUARIOS
    static save(req: Request, res: Response) {
        const user = req.body;
        user.id = id++;
        usuarios.push(user);
        res.json({ message: "User sucessfuly created" });
    }

    // SUBSTITUI O PUT DE USUARIOS
    static uptade(req: Request, res: Response) {
        const userId = Number(req.params.id);
        const { name, email } = req.body;
        const indexOf = usuarios.findIndex((user: IUser) => user.id === userId);
        usuarios[indexOf].name = name;
        usuarios[indexOf].email = email;

        res.json({ message: "Usuário alterado com sucesso" });
    }

    // SUBSTITUI O DELETE DE USUARIOS
    static delete(req: Request, res: Response) {
        const userId = Number(req.params.id);
        const indexOf = usuarios.findIndex((user: IUser) => user.id === userId);
        usuarios.splice(indexOf, 1);
        res.json({ message: "Usuario excluido com sucesso" });
    }
}
