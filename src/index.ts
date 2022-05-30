//import { Node } from "./node.js";
import { Tree } from "./tree.js";
import * as readlineSync from "readline-sync"


const tree: Tree<number> = new Tree<number>();

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


while (true){
    console.log("1) Add");
    console.log("2) Print of Tree");
    console.log("3) Search");
    console.log("4) Delete");

    let x = readlineSync.question("Your choice: ");

    if (Number(x) === 1){
        add();
    }
    if (Number(x) === 2){
        print();
    }
    if (Number(x) === 3){
        search();
    }
    if (Number(x) === 4){
        del();
    }
    if (Number(x) === 0){
        process.exit(0);
    }
}
