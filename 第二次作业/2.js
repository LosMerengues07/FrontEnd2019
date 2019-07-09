const tree = {
  val: 1,
children: [ {
val: 2,
       children : []
     },
{
val: 3,
children : [ {
val: 4,
             children : []
           }
]}, {
val: 5,
         children : []
       },
] };

class TreeIterator 
{
    constructor(tree) 
    {
        this.list = [];
        this.pointer = 0;
        if (tree == null) return;
        let stack = [tree];
        while (stack.length > 0)
        {
            let node = stack.pop();
            if (node.children.length > 0)
            {
                for (let i = node.children.length - 1; i >= 0; i--)
                {
                    stack.push(node.children[i]);
                }
            }
            this.list.push(node.val);
        }
    }

    has_next() 
    {
        return (this.pointer + 1 <= this.list.length);
    }

    next_value() 
    {
        let value = this.list[this.pointer];
        this.pointer++;
        return value;
    }
}

const iterator = new TreeIterator(tree);
while(iterator.has_next()){
console.log(iterator.next_value());
}
