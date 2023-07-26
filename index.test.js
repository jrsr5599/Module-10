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
