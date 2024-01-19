class SortStrategy {
    sort() {
        throw new Error('This method must be implemented');
    }
}

class SortContext extends SortStrategy {
    constructor(strategy) {
        super();
        this.strategy = strategy;
        this.array = [];
    }

    sort() {
        return this.strategy.sort(this.array);
    }

    add(number) {
        this.array.push(number);
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    } 
}

class BubbleSortStrategy extends SortStrategy {
    sort(array) {
        console.log('BubbleSortStrategy ==> sort()', array.sort());
        return array.sort(); 
    }
}

class QuickSortStrategy extends SortStrategy {
    sort(array) {
        console.log('QuickSortStrategy ==> sort()', array.sort());
        return array.sort(); 
    }
}

const list = new SortContext(new BubbleSortStrategy());
list.add(1);
list.add(5);
list.add(3);
list.sort(); // Sorting using bubble sort

list.setStrategy(new QuickSortStrategy());
list.sort(); // Sorting using quick sort