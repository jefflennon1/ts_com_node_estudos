import { Router } from "express";
import AppointmentRepository from '../repository/AppointmentsRepository';
import { getCustomRepository }  from 'typeorm'

const appointmemtRouter = Router();

appointmemtRouter.get('/', (request, response)=>{
  const appointmentRepository = getCustomRepository(AppointmentRepository);
  const appointments = appointmentRepository.find();
  return response.json(appointments);
})



export default appointmemtRouter;
