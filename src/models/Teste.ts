import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('testes')
export default class Teste{

  @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column()
    pessoa_nome: String;
}
