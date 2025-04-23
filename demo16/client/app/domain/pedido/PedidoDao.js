class PedidoDao {

    constructor(connection) {

        this._connection = connection;
        this._store = 'pedidos';
    }


    adiciona(pedido) {

        return new Promise((resolve, reject) => {

            const request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(pedido);

            request.onsuccess = e => resolve();
            request.onerror = e => {

                console.log(e.target.error);
                reject('Não foi possível salvar a negociação');
            }
        });
    }
    listaTodos() {

        return new Promise((resolve, reject) => {

            const pedidos = [];

            const cursor = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .openCursor();

            cursor.onsuccess = e => {

                const atual = e.target.result;

                if (atual) {

                    const pedido = new Pedido(
                        atual.value._data,
                        atual.value._quantidade,
                        atual.value._valor);

                    pedidos.push(pedido);
                    atual.continue();

                } else {

                    resolve(pedidos);
                }
            };

            cursor.onerror = e => {
                console.log(e.target.error);
                reject('Não foi possível listar nas Pedidos');
            }

        });
    }

    apagaTodos() {

        return new Promise((resolve, reject) => {

            const request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .clear();

            request.onsuccess = e => resolve();

            request.onerror = e => {
                console.log(e.target.error);
                reject('Não foi possível apagar as Pedidos');                
            };

        });
    }    
}