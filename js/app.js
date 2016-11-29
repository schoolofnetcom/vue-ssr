
var listProductsComponent = {
    props: ['products'],
    render: function (createElement) {
        if (this.products.length) {
            var liCollection = this.products.map(function (product) {
                return createElement('li', product.name);
            });
            return createElement('div', [
                createElement('ul', liCollection),
                createElement('a', {
                    attrs: {
                        href: 'javascript:void(0)',
                    },
                    on: {
                        click: this.inserirProduto
                    }
                }, 'Inserir Produto')
            ]);

        } else {
            return createElement('p', 'Sem produtos');
        }
    },
    methods: {
        inserirProduto: function(){
            this.products.push({name: 'Novo Produto'});
        }
    }
};

var app = new Vue({
    data: {
        products: [
            {name: 'Produto 1'},
            {name: 'Produto 2'},
            {name: 'Produto 3'},
            {name: 'Produto 4'},
            {name: 'Produto 5'},
        ]
    },
    render: function (createElement) {
        return createElement('div', {
            attrs: {id: 'app'}
        }, [
            createElement(listProductsComponent, {
                attrs: {products: this.products}
            })
        ]);
    }
});

if(typeof module !== 'undefined' && module.exports){
    module.exports = app;
}