/**
 * GRAPH FUNCTIONS.
 */

/**
 * getNodeInputConnections: Get a node input connections.
 * 
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeInputConnections(node, graph) {
  const { id } = node;
  const { connections } = graph;

  const nodeInputConnections =  Object.entries(connections).filter((entry) => entry[1].targetPath === id).map((entry) => entry[1]);
  
  return nodeInputConnections;
}

/**
 * getNodeOutputConnections: Get a node output connections.
 * 
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeOutputConnections(node, graph) {
  const { id } = node;
  const { connections } = graph;

  const nodeOutputConnections =  Object.entries(connections).filter((entry) => entry[1].sourcePath === id).map((entry) => entry[1]);

  return nodeOutputConnections;
}

/**
 * getNodeConnections: Get a node connections.
 * 
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeConnections(node, graph) {
  const nodeInputConnections = getNodeInputConnections(node, graph)
  const nodeOutputConnections = getNodeOutputConnections(node, graph);
  const nodeConnections = nodeInputConnections.concat(nodeOutputConnections);
  
  return nodeConnections;
}

/**
 * getLeafNodes: Get all leaf nodes (no output connections).
 * 
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Node models.
 */
export function getLeafNodes(graph) {
  const { nodes } = graph;
  const { connections } = graph;

  const nodeConnections =  Object.entries(connections).map((entry) => entry[1]).map(nodeOutput => nodeOutput.sourcePath);
  const nodesIds = Object.entries(nodes).map((entry) => entry[1]).map(element => element.id).filter(node => !nodeConnections.includes(node));
  const filteredNodes = Object.entries(nodes).map((entry) => entry[1]).filter(element => nodesIds.includes(element.id));

  return filteredNodes;
}

/**
 * getRootNodes: Get all root nodes (no input connections).
 * 
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Node models.
 */
export function getRootNodes(graph) {
  const { nodes } = graph;
  const { connections } = graph;

  const nodeConnections =  Object.entries(connections).map((entry) => entry[1]).map(nodeOutput => nodeOutput.targetPath);
  const nodesIds = Object.entries(nodes).map((entry) => entry[1]).map(element => element.id).filter(element => !nodeConnections.includes(element));
  const filteredNodes = Object.entries(nodes).map((entry) => entry[1]).filter(element => nodesIds.includes(element.id))

  return filteredNodes;
}

/**
 * hasMultipleSources: Determines if a node is reachable from different sources.
 * 
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Boolean} True if a node has different source paths.
 */
export function hasMultipleSources(node, graph) {
  const nodeInputConnections = getNodeInputConnections(node, graph);

  return nodeInputConnections.length > 1 ? true : false;
}
