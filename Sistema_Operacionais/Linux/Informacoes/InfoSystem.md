# 🖥️ Linux System Enumeration Guide

This guide covers fundamental commands for system and user identification, essential for administrators and security analysts.

---

## 🏷️ 1. Hostname
The `hostname` command is the simplest way to verify which machine you are currently operating on.

```bash
hostname
```
> **Expected Output:** `nixfund`

---

## 👤 2. Whoami
Displays the username of the current session. In penetration testing, this is the initial "situational awareness" command to know which permissions you started with.

```bash
whoami
```
> **Expected Output:** `cry0l1t3`

---

## 🆔 3. Id
The `id` command provides a detailed view of the user's identity, including the **UID** (User ID) and **GID** (Group ID).

```bash
id
```

**Output Example:**
`uid=1000(cry0l1t3) gid=1000(cry0l1t3) groups=1000(cry0l1t3),1337(hackthebox),4(adm),27(sudo)...`

### 🔍 What to look for:
* **`sudo` Group:** Indicates the user can escalate privileges to root.
* **`adm` Group:** Allows reading sensitive log files in `/var/log`.
* **Custom Groups:** May indicate access to specific databases or configuration files.

---

## 🐧 4. Uname (System Info)
`uname` is the primary tool for extracting Kernel and system architecture data.

### 📋 Common Options
| Flag | Function |
| :--- | :--- |
| `-a` | **Print All**: Displays all available system information. |
| `-s` | Kernel name. |
| `-r` | **Kernel Release**: Exact kernel version (critical for exploit research). |
| `-m` | Machine hardware architecture (e.g., x86_64). |

---

## 🚀 Practical Applications

### Full System Information
Useful for understanding the environment as a whole.
```bash
uname -a
```
> **Output:** `Linux box 4.15.0-99-generic #100-Ubuntu SMP Wed Apr 22 20:32:56 UTC 2020 x86_64 GNU/Linux`

### Vulnerability Research (Kernel Release)
Use this to identify specific versions and search for known exploits.
```bash
uname -r
```
> **Output:** `4.15.0-99-generic`

---

## 💡 Study Notes
Mastering these commands is the first step for:
1.  **System Enumeration:** Mapping the target.
2.  **Identifying Misconfigurations:** Finding gaps in user groups.
3.  **Privilege Escalation:** Finding attack vectors based on the Kernel version.
