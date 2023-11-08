class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    itemCount() {
        return this.collection.length;
    }
    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }
    pageItemCount(pageIndex) {
        if (pageIndex < 0 || pageIndex >= this.pageCount()) {
            return -1
        }
        if (pageIndex === this.pageCount() - 1) {
            return this.collection.length % this.itemsPerPage || this.itemsPerPage
        }
        return this.itemsPerPage
    }
    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.collection.length) {
            return -1
        }
        return Math.floor(itemIndex / this.itemsPerPage)
    }
}
let c = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 10)
console.log(c.itemCount())
console.log(c.pageCount())
console.log(c.pageItemCount(2))
console.log(c.pageIndex(13))
