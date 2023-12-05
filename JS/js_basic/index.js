// Вызов break <labelName> в цикле ниже ищет ближайший внешний цикл с такой меткой и переходит в его конец.

outer: for (let i = 0; i < 4; i++) {
    inner: for (let j = 0; j < 4; j++) {
        if (i === 2) {
            console.log('outer');
            break outer;
        }

        for (let a = 0; a < 4; a++) {
            console.log(`Coord: ${i}:${j}:${a}`);
            if (j === 2) {
                console.log('inner');
                break inner;
            }
        }
    }
}