//import { Node } from "./node.js";
import { Tree } from "./tree.js";
import * as readlineSync from "readline-sync"


const tree: Tree<number> = new Tree<number>();
tree.add(5);
tree.add(4);
tree.add(7);
tree.add(10);
tree.add(8);
tree.add(1);

function add(){
    console.log("Add");
    let data = readlineSync.question("Enter data: ");
    if (isNaN(Number(data))){
        console.log("Is no a number");
    } else {
        tree.add(Number(data));
        console.log("Addition completed");
    }
}

function search(){
    console.log("Search");
    let data = readlineSync.question("Enter data: ");
    if (isNaN(Number(data))){
        console.log("Is no a number");
    } else {
        console.log(tree.search(Number(data)))
    }

}

function del(){
    console.log("Delete");
    let data = readlineSync.question("Enter data: ");
    if (isNaN(Number(data))){
        console.log("Is no a number");
    } else {
        tree.delMenu(Number(data));
        console.log("Deleted completed");
    }
}

function print(){
    tree.getTree(tree.root)
}

print()
add()
search()
del()

