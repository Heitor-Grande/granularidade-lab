export class CalculadoraService {

    resultado = 0

    public somar(a: number, b: number): number {
        this.resultado = a + b;
        return this.resultado;
    }

    public subtrair(a: number, b: number): number {
        this.resultado = a - b;
        return this.resultado;
    }

    public multiplicar(a: number, b: number): number {
        this.resultado = a * b;
        return this.resultado;
    }

    public dividir(a: number, b: number): number {
        this.resultado = a / b;
        return this.resultado;
    }
}

