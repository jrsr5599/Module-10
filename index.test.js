// import { Triangle, Square, Circle } from "./Module-10/shapes.js";
const { Triangle, Square, Circle } = require("./Module-10/shapes")

describe('Circle', () => {
    it('should create a blue circle', () => {
       const testcircle = "<circle cx=\"150\" cy=\"115\" r=\"80\" fill=\"Blue\" />"
        const newcircle = new Circle();
        newcircle.setColor("Blue")
        const actual = newcircle.render() 
        expect(actual).toEqual(testcircle)
      });
})

describe('Triangle', () => {
    it('should create a blue triangle', () => {
       const testtriangle = "<polygon points=\"150\", \"18\", \"244\", \"182\", \"56\", \"182\" fill=\"Blue\" />"
        const newtriangle = new Triangle();
        newtriangle.setColor("Blue")
        const actual = newtriangle.render() 
        expect(actual).toEqual(testtriangle)
      });
})

describe('Square', () => {
    it('should create a blue square', () => {
       const testsquare = "<rect x=\"73\" y=\"40\" width=\"160\" height=\"160\" fill=\"Blue\" />"
        const newsquare = new Square();
        newsquare.setColor("Blue")
        const actual = newsquare.render() 
        expect(actual).toEqual(testsquare)
      });
})