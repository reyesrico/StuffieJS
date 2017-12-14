import FileConnection from '../connection/FileConnection.jsx';

class Categories {
    constructor() {
        var conn = new FileConnection('categories');
        this.categories = conn.Categories();
    }

    getCategories() {
        var categories = [];
        this.categories.forEach(function (category){
            categories.push(category);
        });
        return categories;
    }

    getCategory(id) {
        var category;
        this.categories.forEach(function (cat) {
            if (cat.id === id) {
                category = cat;
            }
        });
        return category;
    }
}

export default Categories;