import { Text } from "./text.js";
import { Shapes } from "./shapes.js";

class Drawing {
    constructor(game) {
        this.text = new Text(game);
        this.shapes = new Shapes(game);
    }
}

export { Drawing };