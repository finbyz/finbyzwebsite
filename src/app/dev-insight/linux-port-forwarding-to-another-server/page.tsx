import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const snippetName = "Linux Port Forwarding to Another Server";
const language = "bash";
const category = "Commandline";

const codeSnippet = `# Enable IP forwarding
sysctl -w net.ipv4.ip_forward=1

# Forward port 80 on current server to port 80 on destination server 18.133.142.120
iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination 18.133.142.120:80

# Forward port 8443 on current server to port 443 on destination server
iptables -t nat -A PREROUTING -p tcp --dport 8443 -j DNAT --to-destination 18.133.142.120:443

# Forward port 2222 on current server to port 22 on destination server
iptables -t nat -A PREROUTING -p tcp --dport 2222 -j DNAT --to-destination 18.133.142.120:22

# Add POSTROUTING rule to enable masquerading
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

# List existing NAT rules
iptables -t nat -L
`;

export default function LinuxPortForwarding() {
  return (
    <main>
      <CodeSnippetHero
        title="How to forward ports from a Linux server to another server?"
        description="Forward TCP traffic arriving at specific ports on one Linux machine to another server by enabling IP forwarding and configuring iptables rules."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> You need to redirect incoming TCP traffic on certain ports from a Linux server to a different server. This is common for reverse proxy setups or to route traffic through a gateway. By default, Linux does not forward packets between interfaces.
        </p>
        <p>
          <strong>Solution:</strong> This can be solved by enabling IP forwarding on the Linux machine and then defining NAT rules using <code>iptables</code> to perform Destination NAT (DNAT) on specified ports. A masquerade rule is added in the POSTROUTING chain to ensure reply packets are properly routed back.
        </p>
        <p>
          No reference link was provided for this snippet.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Enables IP forwarding and sets up iptables NAT rules that forward specific incoming TCP ports on the current Linux server to designated ports on another remote server."
        whenToUse="Use this method when your Linux box is acting as a gateway or proxy and you want to transparently redirect certain port traffic to another server."
        prerequisites={[
          "Root/administrator access to configure sysctl and iptables.",
          "The destination server must be reachable over the network.",
          "Linux system with iptables installed."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "IP Forwarding",
            description: "Allows a Linux machine to forward packets between network interfaces, acting as a router.",
            relatedLink: "https://www.kernel.org/doc/html/latest/networking/ip-sysctl.html"
          },
          {
            title: "iptables NAT Table",
            description: "Network Address Translation rules for packet manipulation, including DNAT and MASQUERADE.",
            relatedLink: "https://wiki.nftables.org/wiki-nftables/index.php/Basic_iptables_examples"
          },
          {
            title: "PREROUTING Chain",
            description: "Used to alter packets as they just arrive on the network interface, before routing decisions.",
            relatedLink: "https://www.netfilter.org/documentation/HOWTO/netfilter-hacking-HOWTO-6.html"
          },
          {
            title: "POSTROUTING Chain",
            description: "Manipulates packets just before they leave the interface.",
            relatedLink: "https://www.netfilter.org/documentation/HOWTO/netfilter-hacking-HOWTO-6.html"
          },
          {
            title: "MASQUERADE target",
            description: "A special form of SNAT for dynamically assigned IP addresses.",
            relatedLink: "https://linux.die.net/man/8/iptables"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Enable IP forwarding",
            explanation: "This allows the Linux kernel to forward packets between network interfaces. The setting can be checked or set using the sysctl command.",
            code: "sysctl -w net.ipv4.ip_forward=1",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Add PREROUTING rules for port forwarding",
            explanation: "Use the iptables NAT PREROUTING chain to change the destination IP and port for incoming TCP packets matching specific ports, redirecting them to the desired server and port.",
            code: `iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination 18.133.142.120:80
iptables -t nat -A PREROUTING -p tcp --dport 8443 -j DNAT --to-destination 18.133.142.120:443
iptables -t nat -A PREROUTING -p tcp --dport 2222 -j DNAT --to-destination 18.133.142.120:22`,
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Add a POSTROUTING MASQUERADE rule",
            explanation: "In the POSTROUTING chain, ensure the source IP is rewritten so replies go back through this machine, maintaining connection state.",
            code: "iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE",
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Verify iptables NAT rules",
            explanation: "Check the current NAT table rules to confirm that forwarding rules are correctly applied.",
            code: "iptables -t nat -L",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Forwarded connections are not reaching the destination server.",
            solution: "Verify IP forwarding is enabled with 'sysctl net.ipv4.ip_forward'. Check firewall rules on both servers allowing the forwarded ports. Ensure destination server is reachable."
          },
          {
            problem: "iptables rules don’t persist after reboot.",
            solution: "Save iptables rules using 'iptables-save' and restore on boot, or configure a firewall service like firewalld or ufw."
          },
          {
            problem: "MASQUERADE not working on interface other than eth0.",
            solution: "Replace 'eth0' with the correct network interface name of the outgoing connection. Use 'ip addr' to check interface names."
          }
        ]}
      />
    </main>
  );
}
