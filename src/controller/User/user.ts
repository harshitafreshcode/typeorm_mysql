import { Request, Response } from "express";
import { User } from "../../entity/Usre";
import { getRepository } from "typeorm";
import { MessageResponse } from "../../config/commenResError";
import datasource from "../../connection/db";
import { Photo } from "../../entity/Photo";
import { Profile } from "../../entity/Profile";


const getUsers = async (req: Request, res: Response) => {
    try {

        const users = await datasource.getRepository(User).find({
            relations: {
                profile: true,
            },
        })
        console.log(users,'find');
        
        MessageResponse(req, res, users, 200)
    } catch (error) {
        console.log(error);
        res.send(error)

    }
}

const createUser = async (req: Request, res: Response) => {
    try {
        const profile = new Profile()
        profile.gender = "male"
        profile.post = "me.jpg"
        await datasource.manager.save(profile)
        
        const user = new User()
        user.firstName = "Joe Smith"
        user.lastName = "Joe Smith"
        user.age =200

        user.profile = profile
        await datasource.manager.save(user)
        // const userRepository = datasource.getRepository(User);

        // const profile = new Profile()
        // profile.gender = req.body.gender,
        //     profile.post = req.body.post
            
        // await datasource.manager.save(profile)

        // console.log(profile, 'profile');

        // const users = await userRepository.create({
        //     firstName: req.body.firstName,
        //     lastName: req.body.lastName,
        //     age: req.body.age,
        //     profile: profile
        // })

        MessageResponse(req, res, user, 200)
        
    } catch (error) {
        console.log(error);
        res.send(error)

    }
}
const createM2O = async (req: Request, res: Response) => {
    try {

        const userRepository = datasource.getRepository(User);
        const users = await userRepository.find({
            include: [Photo]
        })

        MessageResponse(req, res, users, 200)
    } catch (error) {
        console.log(error);
        res.send(error)

    }
}

export { getUsers, createM2O, createUser }