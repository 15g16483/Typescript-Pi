import BinaryTree from 'comp-sci-maths-lib/dist/dataStructures/binaryTree/BinaryTree';
import traverseInOrder from 'comp-sci-maths-lib/dist/algorithms/binaryTreeTraversal/traverseInOrder'
import traversePreOrder from 'comp-sci-maths-lib/dist/algorithms/binaryTreeTraversal/traversePreOrder'
import traversePostOrder from 'comp-sci-maths-lib/dist/algorithms/binaryTreeTraversal/traversePostOrder'
test('Binary Tree Traverse', () => {
    const myTree: BinaryTree<number> = new BinaryTree<number>((a , b) => a - b);
    const inOrder: number[] = [];
    const postOrder: number[] = [];
    const preOrder: number[] = [];


    myTree.add(7);
    myTree.add(4);
    myTree.add(90);
    myTree.add(8);


    traversePostOrder(myTree, x => postOrder.push(x));
    traversePreOrder(myTree, x => preOrder.push(x));
    myTree.add(44)
    traverseInOrder(myTree, x => inOrder.push(x));

    expect(inOrder).toStrictEqual([4,7,8,44,90]);
    expect(postOrder).toStrictEqual([4,8,90,7]);
    expect(preOrder).toStrictEqual([7,4,90,8]);

})