# Listando processos com mais detalhes

## Basta usar o comando:
- **ps aux** 


- Ele abre um terminal que exibe informações mais específicas sobre os processos que estão ocorrendo atualmente no sistema



## Comandos prontos

- Mesmo que ele seja mais específico, é melhor sempre usar ele junto ao **|**, porque assim busca fica bem mais simples e direta

 **ps aux | grep firefox**
 - Neste caso ele busca um processo pelo nome, usando o comando **grep**

 **ps aux --sort=-%cpu**
  - Neste ele busca processos por porcentagem decresente de cpu
