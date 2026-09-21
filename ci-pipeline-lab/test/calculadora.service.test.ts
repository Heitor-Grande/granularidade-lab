import { expect, test } from '@jest/globals';

import { CalculadoraService } from '../services/calculadora.service.ts';


test('deve somar dois numeros', () => {
    const calculadora = new CalculadoraService();

    const resultado = calculadora.somar(2, 3);

    expect(resultado).toBe(5);
});

test('deve subtrair dois numeros', () => {
    const calculadora = new CalculadoraService();

    const resultado = calculadora.subtrair(5, 3);

    expect(resultado).toBe(2);
});

test('deve multiplicar dois numeros', () => {
    const calculadora = new CalculadoraService();

    const resultado = calculadora.multiplicar(4, 3);

    expect(resultado).toBe(12);
});

test('deve dividir dois numeros', () => {
    const calculadora = new CalculadoraService();

    const resultado = calculadora.dividir(10, 2);

    expect(resultado).toBe(5);
});
