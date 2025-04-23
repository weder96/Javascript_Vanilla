class Pedidos {
    
    constructor(chamada) {

        this._pedidos = [];
        this._chamada = chamada;
        Object.freeze(this);
    }


    adiciona(pedido) {

        this._pedidos.push(pedido);
        this._chamada(this);
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
        this._chamada(this);
    }
}