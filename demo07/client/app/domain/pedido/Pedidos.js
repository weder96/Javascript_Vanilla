class Pedidos {

    constructor() {

        this._pedidos = [];
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
}