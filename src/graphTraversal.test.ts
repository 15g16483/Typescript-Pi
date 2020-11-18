import { getStringVertex } from 'comp-sci-maths-lib/dist/common';
import Graph from 'comp-sci-maths-lib/dist/dataStructures/graph/Graph';
import { StringGraphVertex } from 'comp-sci-maths-lib/dist/types';

test('simple Graph', () => {

    const myGraph: Graph<StringGraphVertex> = new Graph();

    const vertexA = getStringVertex('A');
    const vertexB = getStringVertex('B');
    const vertexC = getStringVertex('C');
    const vertexD = getStringVertex('D');
    const vertexE = getStringVertex('E');
    const vertexF = getStringVertex('F');
    const vertexH = getStringVertex('H');

    myGraph.addBiDirectionalEdge(vertexA, vertexB);
    myGraph.addBiDirectionalEdge(vertexA, vertexC);
    myGraph.addBiDirectionalEdge(vertexB, vertexD);
    myGraph.addBiDirectionalEdge(vertexB, vertexE);
    myGraph.addBiDirectionalEdge(vertexC, vertexD);
    myGraph.addBiDirectionalEdge(vertexD, vertexF);
    myGraph.addBiDirectionalEdge(vertexE, vertexF);
    myGraph.addBiDirectionalEdge(vertexF, vertexH);

    const outfromB = myGraph.getOutgoing(vertexB).map(x => x.to).map(v => v.value);



    expect(outfromB.includes('D')).toBeTruthy();
    expect(outfromB.includes('E')).toBeTruthy();
    expect(outfromB.includes('A')).toBeTruthy();
    expect(outfromB.includes('C')).toBeFalsy();



})