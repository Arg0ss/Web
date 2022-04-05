export function snapToWord(selected) {
  const range = document.createRange ? document.createRange() : undefined;

  if (!range) {
    alert("document.createRange is undefined!");
    return;
  }

  range.setStart(selected.anchorNode, selected.anchorOffset);
  range.setEnd(selected.focusNode, selected.focusOffset);

  const backwards = range.collapsed;
  range.detach();

  const endNode = selected.focusNode;
  const endOffset = selected.focusOffset;
  selected.collapse(selected.anchorNode, selected.anchorOffset);

  var direction = [];
  if (backwards) {
    direction = ["backward", "forward"];
  } else {
    direction = ["forward", "backward"];
  }

  selected.modify("move", direction[0], "character");
  selected.modify("move", direction[1], "word");
  selected.extend(endNode, endOffset);
  selected.modify("extend", direction[1], "character");
  selected.modify("extend", direction[0], "word");

  const string = selected.toString();
  console.log("snapToWord: ", string);

  return selected;
}
