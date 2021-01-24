import {startOfHour} from 'date-fns';
import {getCustomRepository} from 'typeorm';
import Appointment from '../models/Appointment';
import AppointmentRepository from '../repository/AppointmentsRepository';

interface Request{
  provider: string;
  date: Date;
}

class CreateAppointmentService{
        public async execute({date, provider}: Request):Promise<Appointment>{
          const   appointmentRepository = getCustomRepository(AppointmentRepository);
          const appointmentDate = startOfHour(date);

          const findAppointmentInSameDate = appointmentRepository.findByDate(
            appointmentDate,
          );
          if(findAppointmentInSameDate){
            throw Error('This Appointment is already booked!');
          }
          const appointment = appointmentRepository.create({
            provider,
            date: appointmentDate
          });

          await appointmentRepository.save(appointment);
          return appointment;
        }
}

export default CreateAppointmentService;
