import { TipoIndicador } from './tipo-indicador';
import { Serie } from './serie';

export class Indicador {
    public nome: string;
    public peso: number;
    public numerador: TipoIndicador;
    public denominador: TipoIndicador;
    public serie: Serie[];
    public graficoNumerador = [];
    public graficoIndice = [];
    public corSinal = [];
}