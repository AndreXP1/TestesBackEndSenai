import { 
    converteMetroEmPes, convertePesEmMetro,
    converteKmEmMilha, converteMilhaEmKm,
    converteCmEmPolegada, convertePolegadaEmCm,
    converteKgEmLibra, converteLibraEmKg,
    converteFahrenheitEmCelsius, converteCelsiusEmFahrenheit,
    converteKelvinEmCelsius, converteCelsiusEmKelvin,
    converteRealEmDolar, converteDolarEmReal,
    converteRealEmEuro, converteEuroEmReal,
    converteRealEmWon, converteWonEmReal,
    converteHorasEmMs, converteMsEmHoras
} from "./ferramentas";

test("Converte 250 metros para pés", () => {
    expect(converteMetroEmPes(250)).toBeCloseTo(820.25);
});

test("Converte 50 pés para metros", () => {
    expect(convertePesEmMetro(50)).toBeCloseTo(15.239);
});

test("Converte 150 quilômetros para milhas", () => {
    expect(converteKmEmMilha(150)).toBeCloseTo(93.205);
});

test("Converte 100 milhas para quilômetros", () => {
    expect(converteMilhaEmKm(100)).toBeCloseTo(160.934);
});

test("Converte 100 centímetros para polegadas", () => {
    expect(converteCmEmPolegada(100)).toBeCloseTo(39.37);
});

test("Converte 40 polegadas para centímetros", () => {
    expect(convertePolegadaEmCm(40)).toBe(101.6);
});

test("Converte 85 quilogramas para libras", () => {
    expect(converteKgEmLibra(85)).toBeCloseTo(187.39);
});

test("Converte 150 libras para quilogramas", () => {
    expect(converteLibraEmKg(150)).toBeCloseTo(68.038);
});

test("Converte 32 Fahrenheit para Celsius", () => {
    expect(converteFahrenheitEmCelsius(32)).toBe(0);
});

test("Converte 100 Celsius para Fahrenheit", () => {
    expect(converteCelsiusEmFahrenheit(100)).toBe(212);
});

test("Converte 310 Kelvin para Celsius", () => {
    expect(converteKelvinEmCelsius(310)).toBeCloseTo(36.85);
});

test("Converte -10 Celsius para Kelvin", () => {
    expect(converteCelsiusEmKelvin(-10)).toBe(263.15);
});

test("Converte 750 Reais para Dólares", () => {
    expect(converteRealEmDolar(750)).toBe(150);
});

test("Converte 40 Dólares para Reais", () => {
    expect(converteDolarEmReal(40)).toBe(200);
});

test("Converte 220 Reais para Euros", () => {
    expect(converteRealEmEuro(220)).toBe(40);
});

test("Converte 100 Euros para Reais", () => {
    expect(converteEuroEmReal(100)).toBe(550);
});

test("Converte 2 Reais para Won", () => {
    expect(converteRealEmWon(2)).toBe(540);
});

test("Converte 5400 Won para Reais", () => {
    expect(converteWonEmReal(5400)).toBe(20);
});

test("Converte 10 horas para milissegundos", () => {
    expect(converteHorasEmMs(10)).toBe(36000000);
});

test("Converte 1800000 ms para horas", () => {
    expect(converteMsEmHoras(1800000)).toBe(0.5);
});