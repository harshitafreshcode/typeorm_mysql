import { Request, Response } from "express";
import { User } from "../../entity/Usre";
import { getRepository } from "typeorm";
import { ErrorMessage, MessageResponse } from "../../config/commenResError";
import datasource from "../../connection/db";
import { Photo } from "../../entity/Photo";
import { Employee } from "../../entity/Employee";


const createEmp = async (req: Request, res: Response) => {
  try {
    
    let photoArr = req.body.photos;
    let arr: any = [];

    const emp = new Employee();
   
    emp.name = req.body.name;
    emp.age = req.body.age;
    emp.salary = req.body.salary;
    
    const empId = await datasource.manager.save(emp);

    console.log("arr",empId);
    console.log('1',emp);
    

    await Promise.all(
      photoArr.map(async (ele: any, index: any) => {

        const photo1 = new Photo();
        photo1.pic = ele;
        photo1.emp = emp
        await datasource.manager.save(photo1);
        console.log(photo1);
        arr.push(photo1);
        
      })
    );


    return MessageResponse(req, res, emp, 201);

  } catch (error) {
    console.log(error, "error");  
    return ErrorMessage(req, res, error, 412);
  }
};

const oneToMany = async (req: Request, res: Response) => {
  try {
    const empRepositry = datasource.getRepository(Employee);
    const Emps = await empRepositry.find({
      relations: {
        photos: true,
      },
    });
    return MessageResponse(req, res, Emps, 201);
  } catch (error) {
    console.log(error, "eroo");

    return ErrorMessage(req, res, error, 412);
  }
};

const manyToOne = async (req: Request, res: Response) => {
  try {
    const photoRepositry = datasource.getRepository(Photo);
    const Emps = await photoRepositry.find({
      relations: {
        emp: true,
      },
    });
    return MessageResponse(req, res, Emps, 201);
  } catch (error) {
    console.log(error, "eroo");

    return ErrorMessage(req, res, error, 412);
  }
};

module.exports = {
  createEmp,
  manyToOne,
  oneToMany

}