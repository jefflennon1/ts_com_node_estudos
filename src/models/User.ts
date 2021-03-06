import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export default class User{

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: String;

  @Column()
  email: String;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  avatar: string;
}
