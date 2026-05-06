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

test("converteMetroEmPes", () => {
    expect(converteMetroEmPes(1)).toBeCloseTo(3.281);
    expect(converteMetroEmPes(10)).toBeCloseTo(32.81);
    expect(converteMetroEmPes(100)).toBeCloseTo(328.1);
});

test("convertePesEmMetro", () => {
    expect(convertePesEmMetro(3.281)).toBe(1);
    expect(convertePesEmMetro(32.81)).toBe(10);
    expect(convertePesEmMetro(328.1)).toBe(100);
});

test("converteKmEmMilha", () => {
    expect(converteKmEmMilha(1.60934)).toBe(1);
    expect(converteKmEmMilha(16.0934)).toBe(10);
    expect(converteKmEmMilha(80.467)).toBeCloseTo(50);
});

test("converteMilhaEmKm", () => {
    expect(converteMilhaEmKm(1)).toBe(1.60934);
    expect(converteMilhaEmKm(10)).toBe(16.0934);
    expect(converteMilhaEmKm(50)).toBe(80.467);
});

test("converteCmEmPolegada", () => {
    expect(converteCmEmPolegada(2.54)).toBe(1);
    expect(converteCmEmPolegada(25.4)).toBe(10);
    expect(converteCmEmPolegada(127)).toBe(50);
});

test("convertePolegadaEmCm", () => {
    expect(convertePolegadaEmCm(1)).toBe(2.54);
    expect(convertePolegadaEmCm(10)).toBe(25.4);
    expect(convertePolegadaEmCm(0.5)).toBe(1.27);
});

test("converteKgEmLibra", () => {
    expect(converteKgEmLibra(1)).toBe(2.20462);
    expect(converteKgEmLibra(50)).toBeCloseTo(110.231);
    expect(converteKgEmLibra(100)).toBe(220.462);
});

test("converteLibraEmKg", () => {
    expect(converteLibraEmKg(2.20462)).toBe(1);
    expect(converteLibraEmKg(110.231)).toBeCloseTo(50);
    expect(converteLibraEmKg(220.462)).toBe(100);
});

test("converteFahrenheitEmCelsius", () => {
    expect(converteFahrenheitEmCelsius(32)).toBe(0);
    expect(converteFahrenheitEmCelsius(212)).toBe(100);
    expect(converteFahrenheitEmCelsius(50)).toBe(10);
});

test("converteCelsiusEmFahrenheit", () => {
    expect(converteCelsiusEmFahrenheit(0)).toBe(32);
    expect(converteCelsiusEmFahrenheit(100)).toBe(212);
    expect(converteCelsiusEmFahrenheit(10)).toBe(50);
});

test("converteKelvinEmCelsius", () => {
    expect(converteKelvinEmCelsius(273.15)).toBe(0);
    expect(converteKelvinEmCelsius(0)).toBe(-273.15);
    expect(converteKelvinEmCelsius(373.15)).toBe(100);
});

test("converteCelsiusEmKelvin", () => {
    expect(converteCelsiusEmKelvin(0)).toBe(273.15);
    expect(converteCelsiusEmKelvin(-273.15)).toBe(0);
    expect(converteCelsiusEmKelvin(100)).toBe(373.15);
});

test("converteRealEmDolar", () => {
    expect(converteRealEmDolar(5)).toBe(1);
    expect(converteRealEmDolar(25)).toBe(5);
    expect(converteRealEmDolar(500)).toBe(100);
});

test("converteDolarEmReal", () => {
    expect(converteDolarEmReal(1)).toBe(5);
    expect(converteDolarEmReal(5)).toBe(25);
    expect(converteDolarEmReal(100)).toBe(500);
});

test("converteRealEmEuro", () => {
    expect(converteRealEmEuro(5.50)).toBe(1);
    expect(converteRealEmEuro(55)).toBe(10);
    expect(converteRealEmEuro(110)).toBe(20);
});

test("converteEuroEmReal", () => {
    expect(converteEuroEmReal(1)).toBe(5.50);
    expect(converteEuroEmReal(10)).toBe(55);
    expect(converteEuroEmReal(20)).toBe(110);
});

test("converteRealEmWon", () => {
    expect(converteRealEmWon(1)).toBe(270);
    expect(converteRealEmWon(10)).toBe(2700);
    expect(converteRealEmWon(0.5)).toBe(135);
});

test("converteWonEmReal", () => {
    expect(converteWonEmReal(270)).toBe(1);
    expect(converteWonEmReal(2700)).toBe(10);
    expect(converteWonEmReal(135)).toBe(0.5);
});

test("converteHorasEmMs", () => {
    expect(converteHorasEmMs(1)).toBe(3600000);
    expect(converteHorasEmMs(0.5)).toBe(1800000);
    expect(converteHorasEmMs(24)).toBe(86400000);
});

test("converteMsEmHoras", () => {
    expect(converteMsEmHoras(3600000)).toBe(1);
    expect(converteMsEmHoras(1800000)).toBe(0.5);
    expect(converteMsEmHoras(86400000)).toBe(24);
});