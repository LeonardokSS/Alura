# Whatweb 


- Em resumo, a ferramenta **whatweb** funciona basicamente para se obter informações introdutórias para uma invasão ao um site, com ele podemos saber se certa aplicação web utiliza Node.js, Next.js e etc.



## Comandos

- whatweb _(site)_

 - Se o site usa Node.js, você pode ver coisas como:

        X-Powered-By: Express
        
        Node.js

        ExpressJS

        Next.js

        Nuxt

        Vercel

        Fastify

        NestJS

- Verificação rápida (ignora erros)
    - whatweb --no-errors -q https://site.com

- Verificação mais rápida (não abre redirects)
    - whatweb --no-errors -q --max-redirects=0 https://site.com
    