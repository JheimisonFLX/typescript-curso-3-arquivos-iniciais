export function logarTempoDeExecução() {
    return function (
        target: any,
        propertykey: string,
        descriptor: PropertyDescriptor
    ) {

        const metodoOriginal = descriptor.value;
        descriptor.value = function () {
            const t1 = performance.now();
            const retorno = metodoOriginal();
            const t2 = performance.now();
            console.log(`${propertykey}, tempo de execução: ${(t2 - t1) / 1000} segundos`)
            retorno
        };
        return descriptor;
    }
}