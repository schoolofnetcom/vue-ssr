var Vue = require('vue');

var listProductsComponent = {
    props: ['products'],
    render: function (createElement) {
        if (this.products.length) {
            var liCollection = this.products.map(function (product) {
                return createElement('li', product.name);
            });
            return createElement('ul', liCollection);
        } else {
            return createElement('p', 'Sem produtos');
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
        return createElement(listProductsComponent, {
            attrs: {products: this.products}
        })
    }
});

var renderer = require('vue-server-renderer').createRenderer();

renderer.renderToString(app, function(error, html){
    if(error){
        throw error;
    }

    console.log(html);
});