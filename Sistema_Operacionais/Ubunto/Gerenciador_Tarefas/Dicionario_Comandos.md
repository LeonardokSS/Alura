# 💻 Gerenciamento e Manipulação de Processos e Dados no Linux

Abaixo estão alguns comandos essenciais para a visualização, gerenciamento de processos e manipulação de fluxos de dados em sistemas baseados em Linux.

---

## ⚙️ Comandos de Gerenciamento de Processos

### **`top` (Table of Processes)**
* Exibe uma visão em **tempo real** dos processos em execução.
* Mostra detalhes cruciais como **PID**, uso de **CPU** e **memória**, e o **estado** dos processos.

### **`ps` (Process Status)**
* Fornece uma "**fotografia**" dos processos em execução no momento em que o comando é chamado.

| Comando/Opção | Descrição |
| :--- | :--- |
| **`ps aux`** | **(All Users Extended)**: Lista **todos** os processos em execução com detalhes extensivos, como `%CPU`, `%MEM`, `PID`, etc. |
| **`ps -u [usuario]`** | **(User)**: Filtra e exibe apenas os processos pertencentes ao **usuário** especificado. |
| **`ps -p [PID]`** | **(Process ID)**: Exibe informações detalhadas sobre um processo **específico** com o PID fornecido. |
| **`ps -C [comando]`** | **(Command)**: Filtra e exibe os processos associados ao **comando** especificado. |

### **`pstree` (Process Tree)**
* Mostra a **árvore de processos**, ilustrando a **relação hierárquica** entre processos **pai** e **filho**.

---

## 🛑 Comandos de Interrupção de Processos (`kill` e Derivados)

### **`kill` (Kill Process)**
* Envia **sinais** para processos em execução usando o **PID** (Process ID).

| Comando/Sinal | Tipo de Sinal | Descrição |
| :--- | :--- | :--- |
| **`kill [PID]`** | **SIGTERM (Padrão)** | Envia o sinal de interrupção padrão, permitindo uma **interrupção suave**. |
| **`kill -9 [PID]`** | **SIGKILL (Sinal 9)** | Envia um sinal de interrupção **abrupta**, **forçando** o encerramento imediato. |
| **`kill -STOP [PID]`** | **SIGSTOP** | Envia um sinal de **pausa**, interrompendo a execução **sem encerrar** o processo. |
| **`kill -CONT [PID]`** | **SIGCONT** | Envia um sinal de **continuação** para retomar a execução de um processo que foi pausado. |

### **`pkill` (Process Kill)**
* Envia sinais para processos com base no **nome do processo**.
* ⚠️ **Atenção:** Todos os processos que correspondem ao nome fornecido poderão ser afetados.

### **`killall` (Kill All)**
* Envia sinais para **todos** os processos com um **nome específico**.
* É prático para enviar sinais a múltiplos processos de forma simultânea.

---

## 🔧 Comandos de Manipulação de Dados e Fluxos

### **`head` (Head of File)**
* Exibe as **primeiras linhas** de um arquivo ou da saída de um comando.
* Por padrão, exibe as primeiras **10 linhas**.

### **`pipe` (`|`) (Pipe)**
* **Redireciona** a **saída** de um comando como **entrada** para outro comando.
* É utilizado no **encadeamento** de comandos e processamento de dados de modo sequencial.

### **`sort` (Sort)**
* **Ordena** a saída de um comando ou o conteúdo de um arquivo.
* Pode ser combinado com outros comandos usando o `pipe` para organizar dados.