function getpedidoDao() {

    return ConnectionFactory
        .getConnection()
        .then(conn => new PedidoDao(conn));
}