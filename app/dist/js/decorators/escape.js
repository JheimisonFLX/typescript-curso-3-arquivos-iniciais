export function escapar(target, propertykey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        return retorno;
    };
    return descriptor;
}
