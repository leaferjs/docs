# remove

Remove the current element.

## Key Methods

### remove ( )

Remove the current element.

### remove ( child: [`UI`](../display/UI.md))

For Group elements, remove the specified child element.

## Belongs to

### [UI Element](../display/UI.md)

## Example

### Standard removal

<<< @/code/basic/remove/remove.ts

### Conditional removal

Uses the same parameters as the [find()](./find.md) method. It first performs `find()` internally, then removes elements in batch.

<<< @/code/basic/remove/remove-tag.ts
