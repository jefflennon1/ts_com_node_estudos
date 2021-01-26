import { EntityRepository, Repository } from "typeorm";
import Pessoas from "../models/Pessoas";

@EntityRepository(Pessoas)
export default class PessoasRepository extends Repository<Pessoas>{

}
