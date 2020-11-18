import * as winston from "winston";
import { depthFirstSearch, SimpleStringGraph } from 'comp-sci-maths-lib/dist'
import { getStringVertex } from "comp-sci-maths-lib/dist/common";

const simpleLogger = winston.createLogger({
    level: "info",
    format: winston.format.simple(),
    transports: [new winston.transports.Console()],
});

const myGraph = new SimpleStringGraph();
myGraph.addLink('A', 'B');

const dfs: string[] = [];
depthFirstSearch(myGraph, getStringVertex('A'), x => dfs.push(x.value));

simpleLogger.info(dfs);