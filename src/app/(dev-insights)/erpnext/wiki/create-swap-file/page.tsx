import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const CreateSwapFilePage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Create and Add a Swap File on Ubuntu"
        description="A step-by-step guide to creating, activating, and making a permanent swap file on Ubuntu to improve system performance and manage virtual memory."
        snippetName="Create swap file"
        language="bash"
        category="Commandline"
        accentColor="blue"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "A swap file allows a Linux operating system to use disk space as virtual memory when the physical RAM is fully utilized. This is crucial for systems with limited RAM, as it can prevent out-of-memory errors and improve stability when running memory-intensive applications. This guide provides a set of commands to create, enable, and automate a swap file on an Ubuntu system.",
        ]}
      />
      <CodeBlock
        code={`# Allocate 1GB Diskspace to swapfile
sudo fallocate -l 1G /swapfile

# Secure the swap file (only root can read/write)
sudo chmod 600 /swapfile

# Set up the file as Linux swap area
sudo mkswap /swapfile

# Activate the swap file
sudo swapon /swapfile

# Make the swap file permanent by adding it to fstab
# Add the following line to /etc/fstab:
# /swapfile   swap    swap    sw  0   0

# Verify the swap is active
swapon -s
free -m`}
        language="bash"
        allowCopy={true}
      />
      <CodeOverview
        whatItDoes="This series of commands creates a dedicated file on your filesystem to be used as virtual memory (swap space), which helps the system handle memory-intensive processes when physical RAM is full."
        whenToUse="Use this when your server has limited RAM, you are running applications that consume a lot of memory, or you want to prevent 'out of memory' errors during peak loads."
        prerequisites={["Root or sudo access to an Ubuntu server."]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "Swap Space",
            description: "In Linux, swap space is disk space used as an extension of RAM. When the system runs out of physical memory, it moves inactive pages from RAM to the swap space, freeing up RAM for active processes.",
            relatedLink: "https://help.ubuntu.com/community/SwapFaq",
          },
          {
            title: "fallocate",
            description: "`fallocate` is a command used to pre-allocate blocks to a file. It is much faster than creating a file by writing zeros to it (e.g., with the `dd` command).",
            relatedLink: "https://man7.org/linux/man-pages/man1/fallocate.1.html",
          },
          {
            title: "/etc/fstab",
            description: "The File System Table (`fstab`) is a system configuration file that contains information about all the partitions and storage devices on the system. Entries in this file ensure that the specified filesystems, including swap, are mounted automatically at boot time.",
            relatedLink: "https://man7.org/linux/man-pages/man5/fstab.5.html",
          },
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Allocate Disk Space",
            explanation: "Create a file named `swapfile` in the root directory with a size of 1GB. You can change `1G` to `4G` or another size depending on your needs.",
            code: "sudo fallocate -l 1G /swapfile",
            language: "bash",
          },
          {
            stepNumber: 2,
            title: "Set Secure Permissions",
            explanation: "Adjust the file permissions so that only the root user can read and write to it. This is a critical security measure to prevent unauthorized users from accessing the memory contents swapped to disk.",
            code: "sudo chmod 600 /swapfile",
            language: "bash",
          },
          {
            stepNumber: 3,
            title: "Format the File for Swap",
            explanation: "Mark the file as swap space. This command sets up the file with the necessary signatures to be used as virtual memory.",
            code: "sudo mkswap /swapfile",
            language: "bash",
          },
          {
            stepNumber: 4,
            title: "Activate the Swap File",
            explanation: "Enable the swap file, making it immediately available for the operating system to use.",
            code: "sudo swapon /swapfile",
            language: "bash",
          },
          {
            stepNumber: 5,
            title: "Make the Swap Permanent",
            explanation: "To ensure the swap file is automatically activated after every reboot, you must add an entry to the `/etc/fstab` file. Use a text editor like `nano` or `vim` to add the specified line.",
            code: `sudo nano /etc/fstab\n\n# Add this line at the end of the file:\n/swapfile   swap    swap    sw  0   0`,
            language: "bash",
          },
          {
            stepNumber: 6,
            title: "Verify the Swap is Active",
            explanation: "Check the system's active swap spaces and memory usage. The output should list your new swapfile and show the total available memory.",
            code: "swapon -s && free -m",
            language: "bash",
          },
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "`fallocate: fallocate failed: Operation not supported`",
            solution: "Some filesystems (like Btrfs) do not support `fallocate`. As an alternative, use the `dd` command: `sudo dd if=/dev/zero of=/swapfile bs=1G count=1`. Note that `dd` is significantly slower.",
          },
          {
            problem: "System is slow after adding swap.",
            solution: "Swap is much slower than RAM. If your system is constantly using swap (a condition called 'thrashing'), it indicates a need for more physical RAM, not just more swap. You can check swap usage with `free -m` and consider lowering the system's `swappiness` value to make it rely on swap less often.",
          },
          {
            problem: "The swap file is not active after rebooting.",
            solution: "This usually means there is an error in the `/etc/fstab` entry. Carefully check the line `/swapfile swap swap sw 0 0` for typos. You can test the fstab entry without rebooting by first running `sudo swapoff /swapfile` and then `sudo swapon -a`, which activates all swap listed in fstab.",
          },
        ]}
      />
    </main>
  );
};

export default CreateSwapFilePage;
