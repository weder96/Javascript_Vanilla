class Pedidos {
    
    constructor() {

        this._pedidos = [];
        Object.freeze(this);
    }


    adiciona(pedido) {

        this._pedidos.push(pedido);
    }

    paraArray() {

        return [].concat(this._pedidos);
    }

    get volumeTotal() {

        return this._pedidos
            .reduce((total, pedido) =>
                total + pedido.volume, 0);
    }

    esvazia() {

        this._pedidos.length = 0;
    }
}