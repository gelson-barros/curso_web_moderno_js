// middleware pattern (chain of responsability)

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next();
} 

const passo2 = (ctx, next) => {
    ctx.valor2 = "mid2";
    next();
};

const passo3 = ctx => ctx.valor3 = "mid3";

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && 
            indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1));
        /*
        [passo1, passo2, passo3] && 0 < 3 && passo1 (ctx, execPasso(1))

        [passo1, passo2, passo3] && 0 < 3 && passo1 (ctx, execPasso(1))

        */
    }
    execPasso(0)
}
const ctx = {}
exec(ctx, passo1, passo2, passo3);
// exec(ctx, passo2, passo1, passo3);
// exec(ctx, passo2, passo3, passo2);
// exec(ctx, passo2, passo3);
console.log(ctx)
