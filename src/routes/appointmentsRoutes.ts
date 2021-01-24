import { Router } from "express";
import AppointmentRepository from '../repository/AppointmentsRepository';
import { getCustomRepository }  from 'typeorm';
import { parseISO } from 'date-fns';
import CreateAppointmentService from '../service/CreateAppointmentsService';

const appointmemtRouter = Router();

appointmemtRouter.get('/', (request, response)=>{
  const appointmentRepository = getCustomRepository(AppointmentRepository);
  const appointments = appointmentRepository.find();
  return response.json(appointments);
});

appointmemtRouter.post('/', (request, response)=>{
 try{
      const { provider, date } = request.body;
      const parsedDate = parseISO(date);

      const createAppointment = new CreateAppointmentService();
      const appointment = createAppointment.execute({
        provider,
        date: parsedDate
      });
      return response.json(appointment);
}catch(err){
  return response.status(404).json({ error: err.message })
}
});

export default appointmemtRouter;
