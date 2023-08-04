const form = document.forms.my;
const elem = form.one;
const fieldSet = form.userFields;
const select = form.select;
const musicSelect = form.musicSelect;

elem.value = 'chiki briki v damki';
form.age[0].checked = true;
// select.selectedIndex = 1;
// select.value = 'banana';
select.options[2].selected = true;

console.log({
    form,
    elem,
    radio: form.age[0].checked,
    fieldSet,
    value: elem.value
});

const rapOption = new Option('Рэп', 'rap', true, true);
musicSelect.append(rapOption);

const selected = Array.from(musicSelect.options)
    .filter(option => option.selected)
    .map(option => option.value);

console.log({
    options: musicSelect.options,
    value: select.value,
    index: select.selectedIndex,
    selected
});
