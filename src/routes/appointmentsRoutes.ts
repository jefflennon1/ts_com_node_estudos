import { Router } from "express";
import AppointmentRepository from '../repository/AppointmentsRepository';
import { getCustomRepository }  from 'typeorm';
import { parseISO } from 'date-fns';
import CreateAppointmentService from '../service/CreateAppointmentsService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const appointmemtRouter = Router();
appointmemtRouter.use(ensureAuthenticated);

appointmemtRouter.get('/', async (request, response)=>{
  console.log(request.user)
  const appointmentRepository = getCustomRepository(AppointmentRepository);
  const appointments = await appointmentRepository.find();
  return response.json(appointments);
});

appointmemtRouter.post('/', async (request, response)=>{

      const { provider_id, date } = request.body;
      const parsedDate = parseISO(date);

      const createAppointment = new CreateAppointmentService();
      const appointment = await createAppointment.execute({
        date: parsedDate,
        provider_id,
      });
      return response.json(appointment);

});

export default appointmemtRouter;
