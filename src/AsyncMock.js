const products = [
    {
        id:"1",
        name: "Prive 200",
        price: 8000,
        category: "cerradura",
        img: "https://http2.mlstatic.com/D_NQ_NP_680388-MLA47557334581_092021-O.webp",
        stock: 30,
        description:"Cerradura de pasador con llave doble paleta"
    },
    {
        id:"2",
        name: "Prive 208",
        price: 7900,
        category: "cerradura",
        img: "https://dcdn.mitiendanube.com/stores/934/735/products/20811-6066ec1dbf725ebe8816318007690103-640-0.jpg",
        stock: 30,
        description:"Cerradura de pasador con llave doble paleta"
    },
    {
        id:"3",
        name: "Prive 205",
        price: 8500,
        category: "cerradura",
        img: "https://http2.mlstatic.com/D_NQ_NP_960690-MLA32191896336_092019-O.webp",
        stock: 10,
        description:"Cerradura de pasador con llave doble paleta"
    },
    {
        id:"4",
        name: "BRZ 250",
        price: 3200,
        category: "candado",
        img: "https://http2.mlstatic.com/D_NQ_NP_660406-MLA47848692182_102021-O.webp",
        stock: 6,
        description:"Candado de doble traba bronceado de 50mm"
    },
    {
        id:"5",
        name: "BRZ 238",
        price: 3000,
        category: "candado",
        img: "https://frappampino.com.ar/wp-content/uploads/2022/06/Candado220.jpg",
        stock: 10,
        description:"Candado de doble traba bronceado de 38mm"
    },
    {
        id:"6",
        name: "BRZ 232",
        price: 2900,
        category: "candado",
        img: "https://http2.mlstatic.com/D_NQ_NP_722594-MLA45795619761_052021-O.webp",
        stock: 12,
        description:"Candado de doble traba bronceado de 32mm"
    },
    {
        id:"7",
        name: "Caja fuerte con llave para embutir",
        price: 2900,
        category: "cajafuerte",
        img: "https://www.roa-srl.com.ar/imagenes/7001.jpg",
        stock: 5,
        description:"Caja fuerte con llave para embutir"
    },
    {
        id:"8",
        name: "Caja fuerte de llave de luz para embutir",
        price: 2900,
        category: "cajafuerte",
        img: "https://www.roa-srl.com.ar/imagenes/cajas_camufladas/1_600.jpg",
        stock: 4,
        description:"Caja fuerte llave de luz para embutir"
    },
    {
        id:"9",
        name: "Caja fuerte cerradura electronica",
        price: 2900,
        category: "cajafuerte",
        img: "https://http2.mlstatic.com/D_NQ_NP_788727-MLA50751527017_072022-O.webp",
        stock: 7,
        description:"Caja fuerte con cerradura electronica para embutir"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}