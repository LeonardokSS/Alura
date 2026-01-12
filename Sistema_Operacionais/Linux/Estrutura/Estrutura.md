# Linux

<img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png" style="max-width:120px;width:100%;height:auto;"/>

Linux is a kernel-based operating system which enables users to customize it and provides open-source code for modifications.

---

## Interfaces

### CLI (Command Line Interface)
<img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Gnome-terminal.png" style="max-width:300px;width:100%;height:auto;"/>

It is similar to PowerShell. You can write commands that the kernel executes.

### Kernel
<img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Linux_kernel_map.png" style="max-width:300px;width:100%;height:auto;"/>

The core of the operating system. It virtualizes hardware such as CPU, hard disk, and allocated memory. It provides virtual resources and prevents conflicts between processes.

### GUI (Graphical User Interface)
<img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/GNOME_Shell.png" style="max-width:300px;width:100%;height:auto;"/>

A way to interact with the computer through graphical elements.

---

## File System Hierarchy

<img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png" style="max-width:120px;width:100%;height:auto;"/>

Linux is a kernel-based operating system which enables users to customize it and provides open-source code for modifications.

---

## Interfaces

### CLI (Command Line Interface)
<img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Gnome-terminal.png" style="max-width:300px;width:100%;height:auto;"/>

It is similar to PowerShell. You can write commands that the kernel executes.

### Kernel
<img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Linux_kernel_map.png" style="max-width:300px;width:100%;height:auto;"/>

The core of the operating system. It virtualizes hardware such as CPU, hard disk, and allocated memory. It provides virtual resources and prevents conflicts between processes.

### GUI (Graphical User Interface)
<img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/GNOME_Shell.png" style="max-width:300px;width:100%;height:auto;"/>

A way to interact with the computer through graphical elements.

---

## File System Hierarchy

<img src="hFILE.png" style="max-width:700px;width:100%;height:auto;"/>

**/**  
The top-level directory (root filesystem). It contains all files required to boot the operating system. After boot, other filesystems are mounted as subdirectories of `/`.

**/etc**  
Local system configuration files. Configuration files for installed applications may also be stored here.

**/home**  
Each user on the system has a subdirectory here for storage.

**/media**  
External removable media devices such as USB drives are mounted here.

---

## Linux Philosophy

<img src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Linux_system_components.png" style="max-width:300px;width:100%;height:auto;"/>

The Linux philosophy centers on simplicity, modularity, and openness. It promotes small, single-purpose programs that can be combined to perform complex tasks.

| Principle | Description |
|---------|------------|
| Everything is a file | Configuration files are stored as text files |
| Small, single-purpose programs | Tools are designed to do one task well |
| Ability to chain programs | Tools can be combined to perform complex tasks |
| Avoid captive user interfaces | Linux focuses on shell usage |
| Configuration stored in text files | Example: `/etc/passwd` |

---

## Components

<img src="data:image/png;base64,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" style="max-width:300px;width:100%;height:auto;"/>

| Component | Description |
|---------|------------|
| Bootloader | Guides the boot process (e.g., GRUB) |
| OS Kernel | Manages hardware resources |
| Daemons | Background services |
| OS Shell | Interface between user and OS |
| Graphics server | Provides graphical subsystem (X Server) |
| Window Manager | Graphical user interface |
| Utilities | Programs that perform specific functions |

---

## Linux Architecture

<img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Linux_architecture.png" style="max-width:350px;width:100%;height:auto;"/>

| Layer | Description |
|------|------------|
| Hardware | CPU, RAM, disk, peripherals |
| Kernel | Controls and virtualizes hardware |
| Shell | Command-line interface |
| System Utility | Provides OS functionality |

---

## Linux Distributions

<img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg" style="max-width:400px;width:100%;height:auto;"/>

Each Linux distribution is different, with its own features, packages, and tools.

<img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo-ubuntu_cof-orange-hex.svg" style="max-width:90px;width:100%;height:auto;"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Fedora_logo.svg" style="max-width:90px;width:100%;height:auto;"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Centos-logo-light.svg" style="max-width:90px;width:100%;height:auto;"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Openlogo-debianV2.svg" style="max-width:90px;width:100%;height:auto;"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg" style="max-width:90px;width:100%;height:auto;"/>

- Ubuntu  
- Fedora  
- CentOS  
- Debian  
- Red Hat Enterprise Linux
