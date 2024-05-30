import { Calculator } from "./calculator";

describe("Test for calculator", () => {
    describe("Test for multiplicar", () => {
        it('should return 3', () =>{
            const calculator = new Calculator();
            const multiplicacion = calculator.Multiplicar(3,1)
        
            expect(multiplicacion).toEqual(3);
        })
    
        it('should return 6', () =>{
            const calculator = new Calculator();
            expect(calculator.Multiplicar(3,2)).toEqual(6);
        })
    
        it('should return 9', () =>{
            const calculator = new Calculator();
            expect(calculator.Multiplicar(3,3)).toEqual(9);
        })
    })
    
    describe('Test for sumar', () => {
        it('should return 3', () =>{
            const calculator = new Calculator();
            const suma = calculator.Sumar(3,2)
        
            expect(suma).toEqual(5);
        })    
    })

    describe('Test for matchers', () => {
        it('test matchers', () =>{
            let nombre: string = "julio";
            expect(nombre).toBeDefined();
    
            let nombreUndefined: string;
            expect(nombreUndefined).toBeUndefined();
    
            expect(1+3 === 4).toBeTruthy();
            expect(1+3 === 5).toBeFalsy();
    
            expect(5).toBeLessThan(10);
            expect(11).toBeGreaterThan(10);
    
            expect("12345").toMatch(/12345/);//Regex
            expect(['apples','oranges','pears']).toContain('apples');
        })
    })
})