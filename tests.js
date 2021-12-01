// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello!" when executed', function() {
      expect(helloWorld()).toBe("Hello");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// describe("name of function that being tested", function(){
//     it(" it should descrive what you're  specifically testing",function(){
//         expect(something from the function).jasmineMethod("actual" + "expected output hear")
//     })
// })
describe("double", function() {
    it('result of double should return be number', function () {
        expect(typeof double()).toBe('number');
    });
    it('should be defined function.', function () {
        expect(typeof double).toBe("function");
    });
    it('should return the number 10 when executed', function () {
        expect(double(5)).toEqual(10);
    });
});

// ---- exercise 1
describe("sayHello",function() {

    it("should be defined function",function(){
        expect(typeof sayHello).toBe("function")
    });
    it("should return a string when called",function(){
        expect(typeof sayHello()).toBe("string")
    })
    //exercise 4
    it('should return "Hello, Alex!',function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    })
    //exercise 5
    it('should return"Hello, Pat!',function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    })
    //exercise 6---? not sure
    it('should never return "undefined" when called',function(){
        expect(sayHello()).not.toBe(undefined)
    })
});
