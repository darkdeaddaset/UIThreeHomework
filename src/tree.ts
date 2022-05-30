export class Tree<T>{
    get root(): Node<T> | undefined {
        return this._root;
    }

    set root(value: Node<T> | undefined) {
        this._root = value;
    }
    private _root : Node<T> | undefined;

    constructor() {
        this._root = undefined;
    }

    public add(data:T): Node<T>{
        if (!this._root){
            this._root = new Node(data);
            return this._root;
        }
        let current = this._root;

            while(true){
                if (this.sort(data, current.num) === 1){
                    if (current.right){
                        current = current.right;
                    } else {
                        current.right = new Node(data);
                        return current.right;
                    }
                } else {
                    if (current.left){
                        current = current.left;
                    } else {
                        current.left = new Node(data);
                        return current.left;
                    }
                }
            }
    }

    getTree(node: Node<T> | undefined): void {
        if (node) {
            this.getTree(node.left);
            console.log(node.num);
            this.getTree(node.right);
        }
    }

    private sort(x:T, y:T){
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
    }

    public search(data:T): Node<T> | undefined{
        if (!this._root) return undefined;

        let current = this._root;

        while (this.sort(data, current.num) !==0){
            if (this.sort(data, current.num) ===1){
                if (!current.right) return;
                current = current.right;
            } else {
                if (!current.left) return;
                current = current.left;
            }
        }
        return current;
    }

    public delMenu(data: T){
        this.delete(data, this.root);
    }

    private delete(key: T, data: Node<T> | undefined): Node<T> | undefined {
        if (data === undefined){
            return undefined;
        }

        else if (key < data.num){
            data.left = this.delete(key, data.left);
            return data;
        } else if (key > data.num){
            data.right = this.delete(key, data.right);
            return data;
        } else {
            if (data.left === undefined && data.right === undefined){
                data = undefined;
                return data;
            }
            if (data.left !== undefined && data.right !== undefined){
                let x = this.find(data.right);
                data.num = x.num;

                data.right = this.delete(x.num, data.right);
                return data;
            }
        }
    }

    private find(node: Node<T>): Node<T>{
        if (node.left === undefined){
            return node;
        } else {
            return this.find(node.left);
        }
    }
}

export class Node<T> {
    private _num: T;
    private _left: Node<T> | undefined;
    private _right: Node<T> | undefined;

    public constructor(num: T) {
        this._num = num;
    }

    public get right(): Node<T> | undefined {
        return this._right;
    }

    public set right(value: Node<T> | undefined) {
        this._right = value;
    }

    public get left(): Node<T> | undefined {
        return this._left;
    }

    public set left(value: Node<T> | undefined) {
        this._left = value;
    }
    public get num(): T {
        return this._num;
    }

    public set num(value: T) {
        this._num = value;
    }
}