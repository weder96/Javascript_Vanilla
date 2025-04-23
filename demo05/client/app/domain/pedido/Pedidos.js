class Pedidos {

    constructor() {

        this._pedidos= [];
    }

    adiciona(pedido) {

        this._pedidos.push(pedido);
    }

    paraArray() {

        return [].concat(this._pedidos);
    }
}