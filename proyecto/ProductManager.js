class ProductManager {
    constructor() {
        this.products = []
    }
    getProduct() {
        return this.product
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Validación de campos vacíos
        if (!title || !description || !price || !code || !thumbnail || !stock) {
            console.error("**Error:** Faltan campos por completar. Todos los campos son obligatorios.")
            return; // Se detiene la función si hay campos vacíos
        }

        // Validación de código único
        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            console.error("**Error:** El código ingresado ya está en uso. Por favor, introduce un código único.");
            return; // Se detiene la función si el código ya existe
        }

        // Crear el nuevo producto y agregarlo al array
        const product = {
            id: this.#getId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        this.products.push(product);
        return product;
    }

    #getId() {
        if (this.products.length === 0) return 1
        return this.products[this.products.length - 1].id + 1
    }

    getProductById(id) {
        const foundProduct = this.products.find((product) => product.id === id);
        if (!foundProduct) {
            throw new Error(`El producto con el id -> ${id} No a sido encontrado`)
        }
        return foundProduct
    }
}


let test = new ProductManager()
test.addProduct('pan', 'es un pan riquisimo', 1500, 'foto.jpg', 'SKU', 50)
test.addProduct('caramelos', 'super dulces', 30, 'foto.jpg','CGF', 50)
console.log(test.getProductById(3));