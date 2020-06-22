import { ClasseMedida } from './classe-medida';
import { Serie } from './serie';

export class Estagio {
    public semana: string;
    public indice: string;
    public sinal: string;
    public classe: ClasseMedida[];
    public classes: ClasseMedida[];
    public serie: Serie[];
    public graficoIndice = [];
    public corSinal = [];
}
