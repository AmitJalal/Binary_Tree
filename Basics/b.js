class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const a = new Node("a"),
    b = new Node("b"),
    c = new Node("c"),
    d = new Node("d"),
    e = new Node("e"),
    f = new Node('f')
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

<<<<<<< HEAD
=======

>>>>>>> 8d14bf9b2237ddcd0308de4924f56f5a79276a56
/* 
               a
             /  \
           /     \
          b       c
        /   \      \
       d     e      f 
               
*/

<<<<<<< HEAD
console.log(a);
=======
console.log(a);
>>>>>>> 8d14bf9b2237ddcd0308de4924f56f5a79276a56
