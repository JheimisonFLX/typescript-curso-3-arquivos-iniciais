export function inspect() {
    return function (target, propertykey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`---- Método ${propertykey}`);
            console.log(`---- Parâmetros ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`---- Retorno ${JSON.stringify(retorno)}`);
            return retorno;
        };
        return descriptor;
    };
}
