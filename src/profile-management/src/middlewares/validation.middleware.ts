import { BadRequestException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';

export function checkObjectIdIsValid(req: Request, res: Response, next: NextFunction) {
  const employeeId = req.params[0];
  if (employeeId.length < 1) {
    console.log('There is no value at index 0 in params');
    throw new BadRequestException('No employee ID was provided');
  }
  let objectId: Types.ObjectId;
  try {
    objectId = new Types.ObjectId(employeeId);
  } catch (error) {
    console.log(error);
    throw new BadRequestException('The provided employee ID is not a valid ObjectID');
  }
  if (employeeId !== objectId.toString()){
    throw new BadRequestException('The provided employee ID is not a valid ObjectID');
  }
  next();
};
