import FileConnection from '../connection/FileConnection';

class Categories {
    categories: any;

    constructor() {
        var conn = new FileConnection('categories');
        this.categories = conn.Categories();
    }

    getCategories() {
        let cats = new Array();
        this.categories.forEach(function (category: any){
            cats.push(category);
        });
        return cats;
    }

    getCategory(id: number) {
        var category;
        this.categories.forEach(function (cat: any) {
            if (cat.id === id) {
                category = cat;
            }
        });
        return category;
    }
}

export default Categories;