import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function InstallPythonOnUnsupportedEnv() {
  return (
    <>
      <CodeSnippetHero
        title="How to Install Python on Unsupported Environments in Ubuntu Using pyenv?"
        description="Utilizes pyenv to install Python 3.10.15 on Ubuntu environments where direct installations fail, facilitating Python version management."
        snippetName="Install python on unsupported environment"
        language="bash"
        category="System Setup"
        accentColor="green"
      />

      <section className="container-custom">
        <h2>Introduction</h2>
        <p>
          Many Ubuntu environments, especially minimal or containerized ones, lack up-to-date
          Python versions or have restrictions preventing direct install via package managers.
          This snippet uses <code>pyenv</code>, a popular Python version management tool, to
          install Python 3.10.15 independently of system packages. This approach solves common
          challenges developers face when the native Python installation is insufficient or outdated,
          enabling seamless switching between multiple Python versions for testing and development.
        </p>
      </section>

      <CodeBlock
        code={`curl https://pyenv.run | bash

# Install Python 3.10
pyenv install 3.10.15
pyenv global 3.10.15`}
        language="bash"
        showLineNumbers={true}
        allowCopy={true}
        referenceLink="https://github.com/pyenv/pyenv"
        referenceLinkText="pyenv official GitHub repository"
      />

      <CodeOverview
        whatItDoes="Automatically installs pyenv and configures Python 3.10.15 as the global interpreter."
        whenToUse="Use in environments where system Python installation is unsupported or outdated."
        prerequisites={[
          "Curl installed",
          "Basic shell access",
          "Build dependencies for Python compilation (gcc, make, etc.)"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "pyenv",
            description: "A tool to easily switch between multiple versions of Python.",
            relatedLink: "https://github.com/pyenv/pyenv"
          },
          {
            title: "Python 3.10.15",
            description: "A stable Python release version installed via pyenv for development and compatibility.",
            relatedLink: "https://www.python.org/downloads/release/python-31015/"
          },
          {
            title: "Build dependencies",
            description: "Required system packages for compiling Python from source when using pyenv.",
            relatedLink: "https://github.com/pyenv/pyenv/wiki#suggested-build-environment"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Install pyenv",
            explanation: "Run the convenient installer script to download and setup pyenv in your environment.",
            code: "curl https://pyenv.run | bash",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Configure shell environment",
            explanation: "Follow the post-install instructions to add pyenv to your shell's PATH and initialize it.",
            code: `export PATH=\"$HOME/.pyenv/bin:$PATH\"
eval \"$(pyenv init --path)\"
eval \"$(pyenv virtualenv-init -)\"`,
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Install Python 3.10.15",
            explanation: "Use pyenv to download, compile, and install the specified Python version.",
            code: "pyenv install 3.10.15",
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Set Python 3.10.15 as global default",
            explanation: "Configure pyenv to use this Python version globally across your user session.",
            code: "pyenv global 3.10.15",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "pyenv command not found after installation.",
            solution: "Ensure your shell config file (.bashrc, .zshrc) includes the pyenv initialization lines as per the installer output. Restart your shell session."
          },
          {
            problem: "Python build fails due to missing dependencies.",
            solution: "Install all necessary build dependencies listed in pyenv's suggested build environment wiki page."
          },
          {
            problem: "Installed Python version is not accessible globally.",
            solution: "Use 'pyenv global 3.10.15' to set the global Python version and verify with 'pyenv version'."
          }
        ]}
      />
    </>
  );
}
