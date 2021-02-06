import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';
import Pessoas from './Pessoas';

@Entity('testes')
export default class Teste{

  @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column()
    pessoa_nome: string;

    @Column()
    password:string

    @ManyToOne(()=>Pessoas)
    @JoinColumn({name: 'pessoa_nome'})
    nome: Pessoas;
}
