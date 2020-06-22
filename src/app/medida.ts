import { Indicador } from './indicador';
import { ClasseMedida } from './classe-medida';

export class Medida {
    public id: number;
    public nome: string;
    public classes: ClasseMedida[];
    public indicadores: Indicador[];
    public exibeGraficos: boolean;
    public graficoPercentual: boolean;
}
