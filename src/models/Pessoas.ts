import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pessoas')
export default class Pessoas{

  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  nome: String;

  @Column()
  sobrenome: String;

  @Column("bigint")
  idade: BigInteger;
}
