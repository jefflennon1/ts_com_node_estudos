import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import User from './User';

@Entity('appointments')
class Appointment{

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'provider_id'})
  provider_id: string;

  // @ManyToOne(()=> User)
  // @JoinColumn({ name: 'povider_id' })
  // provider: User;

  @Column('timestamp with time zone')
  date: Date;
}


export default Appointment;
