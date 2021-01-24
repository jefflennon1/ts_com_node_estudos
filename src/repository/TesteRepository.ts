import { Repository,EntityRepository } from "typeorm";
import Teste from "../models/Teste";

@EntityRepository(Teste)
export default class TesteRepository extends Repository<Teste>{

}
