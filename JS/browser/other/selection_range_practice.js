const selection = document.getSelection();
const cloned = document.getElementById('test');

console.log('selection =>', {
  selection,
  range: selection.rangeCount
});

for (let i = 0; i < selection.rangeCount; i++) {
  console.log(selection.rangeCount);
  cloned.append(selection.getRangeAt(i).cloneContents);
}
