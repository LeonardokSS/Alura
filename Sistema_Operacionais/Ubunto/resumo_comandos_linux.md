# Comandos Linux — Resumo Organizado

## ⚙️ Privilégios de Administrador
- **sudo <comando>** → Executa um comando com privilégios de administrador.
- **sudo -i** → Inicia uma sessão como administrador (root). *Use com cuidado!*
  - **exit** → Sai da sessão de administrador.
- **sudo su** → Abre um shell como root, mantendo o ambiente do usuário atual.

---

## 📁 Diretórios e Navegação
### Prompt do terminal
```
leo@LEO:~$
```
- **leo** → Usuário
- **LEO** → Dispositivo
- **~** → Pasta Home
- **$** → Terminal pronto para comandos

### Comandos básicos

*   **cd <caminho>** → Entra em um diretório.
*   **ls** → Lista arquivos do diretório atual.
    *   **ls -a** → Lista arquivos inclusive ocultos.
    *   **ls -al** → Lista arquivos inclusive ocultos + informações extras.
        *   `drwxr-xr-x 2 leo leo 4096 Nov 23 10:59 .`
            *   `d`: Diretório
            *   `rwx`: Permissões para o proprietário (leo).
                *   `r`: Permissão de leitura (read).
                *   `w`: Permissão de escrita (write).
                *   `x`: Permissão de execução (execute/acessar o diretório).
            *   `r-x`: Permissões para o grupo (leo).
                *   `r`: Permissão de leitura.
                *   `-`: Sem permissão de escrita.
                *   `x`: Permissão de execução.
            *   `r-x`: Permissões para outros usuários.
                *   `r`: Permissão de leitura.
                *   `-`: Sem permissão de escrita.
                *   `x`: Permissão de execução.
            *   `2`: Número de hard links para este diretório.
            *   `leo`: Proprietário do diretório.
            *   `leo`: Grupo proprietário do diretório.
            *   `4096`: Tamanho do diretório em bytes.
            *   `Nov 23 10:59`: Data e hora da última modificação.
            *   `.`: Nome do diretório (neste caso, `.` representa o diretório atual).
*   **pwd** → Mostra o caminho do diretório atual.
*   **clear** → Limpa a tela.
*   **mkdir <nome>** → Cria um novo diretório com o nome especificado.
*   **rm <arquivo>** → Remove um arquivo.
*   **rm -r <diretório>** → Remove um diretório e seu conteúdo recursivamente. (Use com cuidado!)
*   **mv <origem> <destino>** → Move ou renomeia um arquivo ou diretório.
*   **cp <origem> <destino>** → Copia um arquivo ou diretório.
*   **touch <arquivo>** → Cria um arquivo vazio.
*   **cat <arquivo>** → Exibe o conteúdo de um arquivo.
*   **nano <arquivo>** → Abre o editor de texto Nano para editar um arquivo.

### Observação importante
- A partir da pasta **home**, não é possível acessar todos os arquivos do sistema.
- Use **cd /** para ir ao diretório raiz.

---

## 📄 Visualização de Arquivos
- **cat <arquivo>** → Exibe conteúdo de arquivos ou concatena arquivos.

---

## 🗂️ Diretórios do Sistema (dentro da raiz /)
### /bin
Armazena binários essenciais do sistema.

### /boot
Contém arquivos necessários para inicialização (kernel, bootloader).

### /dev
Armazena arquivos de dispositivos do sistema (discos, terminais etc.).

### /etc
Configurações do sistema.

### /home
Diretórios pessoais dos usuários.

### /lib
Bibliotecas essenciais usadas por /bin e /sbin.

### /media
Ponto de montagem para dispositivos removíveis (USB, HD externo).

### /mnt
Usado para montagens temporárias.

### /opt
Armazena aplicativos adicionais que não fazem parte da instalação padrão.

### /proc
Sistema de arquivos virtual com informações de processos e kernel.

### /root
Pasta pessoal do usuário root.

### /run
Informações voláteis desde a última inicialização (PID, sockets etc.).

### /sbin
Binários essenciais para administração e recuperação do sistema.

### /srv
Armazena dados de serviços oferecidos pelo sistema.

### /sys
Sistema de arquivos virtual que expõe informações do kernel.

### /tmp
Arquivos temporários apagados ao reiniciar.

### /usr
Programas, bibliotecas e arquivos instalados para usuários.

### /var
Arquivos variáveis como logs e filas de email.

