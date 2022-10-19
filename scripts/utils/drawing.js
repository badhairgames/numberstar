import { Text } from "./text.js";
import { Shapes } from "./shapes.js";
import { UI } from "./ui.js";

class Drawing {
    constructor(game) {
        this.text = new Text(game);
        this.shapes = new Shapes(game);
        this.ui = new UI(game);
    }
}

export { Drawing };