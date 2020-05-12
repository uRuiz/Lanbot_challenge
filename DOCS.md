# DOCS
The bots builder is the most powerful tool created by Landbot, and so the most complex.
A bot is a graph of nodes connected to each other. Each node may be a simple message, a send email task, etc...

## BOT MODEL
A bot contains nodes and connections. A special node with `id: 'bot_start'` is required to get a bot's starter point.
```
{
  "nodes": {
    [node_id]": {
      "id": node_id,
      "top": node_top_coord,
      "left": node_left_coord,
    },
    ...
  },
  "connections": {
    [connection_id]: {
      "id": connection_id,
      "type": connection_type,
      "sourcePath": connection_source,
      "targetPath": connection_target,
    }
  }
}
```

## NODE MODEL
- node_id: Unique node identifier.
- node_top_coord: Node vertical coordinate.
- node_left_coord: Node horizontal coordinate.

## CONNECTION MODEL
- connection_id: Connection identifier, where
```
connection_id = `${connection_source}.${connection_type}--${connection_target}`;
```
- connection_type: Connection type. A node can output multiple connection types.
- connection_source: Connection source node identifier.
- connection_target: Connection target node identifier.