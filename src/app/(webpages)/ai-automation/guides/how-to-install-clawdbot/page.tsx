'use client';
import DynamicHero from '@/components/sections/dynamic-hero';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import CTA from '@/components/sections/cta';
import { Server, Zap, MessageSquare, CheckCircle, AlertTriangle, DollarSign, Cpu, Clock, Shield } from 'lucide-react';

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <DynamicHero
        headline="How to Install Clawdbot in 30 Minutes"
        highlightWords={['Clawdbot', '30 Minutes']}
        description="Set up your own 24/7 AI assistant that actually does the work—not just answers questions. Clawdbot runs continuously on a server, handling inbox cleanup, research, scheduling, and content creation automatically through Telegram or WhatsApp."
        accentColor="orange"
        primaryButton={{
          text: 'Start Installation',
          action: () => {
            const el = document.getElementById('installation-steps');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        secondaryButton={{ text: 'Get Expert Help', action: 'https://finbyz.tech/contact' }}
      />

      {/* WHAT IS CLAWDBOT */}
      <section id="what-is-clawdbot">
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1A5276] drop-shadow-sm animate-fade-in-up">
            What Clawdbot Actually Is
          </h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            Clawdbot is an open-source AI assistant that runs 24/7 on its own server. Unlike traditional AI tools that just answer questions, Clawdbot is built for execution. You don't open a dashboard or log into another app—you just message it.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#FF8C00]" />
                How It Works
              </h3>
              <p className="text-slate-600">
                Behind the scenes, Clawdbot connects to tools you already use like Gmail, Google Drive, GitHub, and calendars. Give it a task, and it breaks it into steps and executes them automatically.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#FF8C00]" />
                Real Examples
              </h3>
              <p className="text-slate-600">
                Tell it: "Analyze my site, write a blog post, update the metadata, then draft a LinkedIn post"—and it runs all steps in sequence. You can even use voice notes instead of typing.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF8C00]">
            <h3 className="text-lg font-semibold mb-3">Key Capabilities:</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Runs 24/7 on a dedicated server—no need to keep your computer on</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Connects to Gmail, Google Drive, GitHub, Calendar, and more</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Supports voice notes on Telegram and WhatsApp for hands-free operation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Monitors tasks like stock prices, flight check-ins, and sends alerts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Open-source and fully customizable for your specific workflow</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY SETUP IS EASY */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1A5276] drop-shadow-sm animate-fade-in-up">
            Why This Setup is Easier Than It Looks
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-md border-l-4 border-[#FF8C00] mb-6">
            <p className="text-lg font-medium mb-2 text-gray-800">
              Most of the setup is copy-paste followed by a wizard that asks clear questions.
            </p>
            <p className="text-slate-600">
              If you get stuck at any step, screenshot it and ask ChatGPT what to click. That works more often than it should. If you can follow basic instructions, you can set this up.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg border shadow-sm">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">One Command Install</h3>
              <p className="text-sm text-slate-600">Only ONE command needed—the rest is a guided wizard</p>
            </div>
            <div className="bg-white p-5 rounded-lg border shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <Server className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Free AWS Tier</h3>
              <p className="text-sm text-slate-600">Free server works perfectly for most users</p>
            </div>
            <div className="bg-white p-5 rounded-lg border shadow-sm">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">30 Minutes Total</h3>
              <p className="text-sm text-slate-600">Complete setup from start to finish in half an hour</p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTALLATION STEPS */}
      <section id="installation-steps">
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold mb-6 text-[#1A5276] drop-shadow-sm animate-fade-in-up">
            The Complete 30-Minute Setup
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-md border-l-4 border-[#FF8C00]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#FF8C00] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold text-[#1A5276]">Get a Free AWS Server (5 minutes)</h3>
              </div>
              <p className="text-slate-700 mb-4">
                Clawdbot needs to run somewhere 24/7. AWS Free Tier provides enough resources for most users.
              </p>
              <div className="bg-white p-5 rounded-lg border mb-4">
                <h4 className="font-semibold mb-3 text-[#1A5276]">Step-by-Step:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF8C00] font-bold">→</span>
                    <span className="text-slate-700">Go to aws.amazon.com and create an account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF8C00] font-bold">→</span>
                    <span className="text-slate-700">Search for 'EC2' and click 'Launch Instance'</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF8C00] font-bold">→</span>
                    <span className="text-slate-700">Name your instance anything you want</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF8C00] font-bold">→</span>
                    <span className="text-slate-700">Select 'Ubuntu' as the operating system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF8C00] font-bold">→</span>
                    <span className="text-slate-700">Filter for 'free tier eligible' and pick the 8GB option</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF8C00] font-bold">→</span>
                    <span className="text-slate-700">Click 'Launch', then click your instance ID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF8C00] font-bold">→</span>
                    <span className="text-slate-700">Click 'Connect' twice to open the terminal</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-sm font-medium text-green-900">
                  ✓ You're now in a terminal. That's the scariest part, and it's already over.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-md border-l-4 border-[#FF8C00]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#FF8C00] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold text-[#1A5276]">Install Clawdbot (2 minutes)</h3>
              </div>
              <p className="text-slate-700 mb-4">
                Just one command to install everything. No dependencies to hunt down.
              </p>
              <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm mb-4 overflow-x-auto">
                curl -fsSL https://clawd.bot/install.sh | bash
              </div>
              <p className="text-slate-700">
                Wait about 2 minutes. When it finishes, the setup wizard starts automatically.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-md border-l-4 border-[#FF8C00]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#FF8C00] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h3 className="text-2xl font-bold text-[#1A5276]">Run the Wizard (10 minutes)</h3>
              </div>
              <p className="text-slate-700 mb-4">
                The wizard asks clear questions and guides you through the configuration.
              </p>
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold mb-3 text-[#1A5276]">Configuration Steps:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Select 'Quick Start' when prompted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Choose 'Anthropic' as your AI provider</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Select 'Token Paste Setup' method</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Run the token command on your local computer (wizard shows exact command)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Copy the token and paste it back into the wizard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Select 'Opus 4.5' as your model</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Choose 'Telegram Bot' as your communication channel</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-md border-l-4 border-[#FF8C00]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#FF8C00] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <h3 className="text-2xl font-bold text-[#1A5276]">Create Your Telegram Bot (5 minutes)</h3>
              </div>
              <p className="text-slate-700 mb-4">
                Set up your Telegram bot so only you can communicate with your AI assistant.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-lg border">
                  <h4 className="font-semibold mb-3 text-[#1A5276]">Create the Bot:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF8C00]">1.</span>
                      <span className="text-slate-700">Open Telegram and search for '@BotFather'</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF8C00]">2.</span>
                      <span className="text-slate-700">Send the command '/newbot'</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF8C00]">3.</span>
                      <span className="text-slate-700">Name your bot whatever you want</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF8C00]">4.</span>
                      <span className="text-slate-700">Copy the token and paste into wizard</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-lg border">
                  <h4 className="font-semibold mb-3 text-[#1A5276]">Lock Down Access:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF8C00]">1.</span>
                      <span className="text-slate-700">Search for '@UserIDBot' in Telegram</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF8C00]">2.</span>
                      <span className="text-slate-700">Copy your user ID</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF8C00]">3.</span>
                      <span className="text-slate-700">Paste your ID into the wizard</span>
                    </li>
                  </ul>
                  <p className="text-xs text-slate-500 mt-3 bg-yellow-50 p-2 rounded">
                    ⚠️ Critical for security—ensures only you can talk to your bot
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-md border-l-4 border-[#FF8C00]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#FF8C00] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <h3 className="text-2xl font-bold text-[#1A5276]">Give It an Identity (5 minutes)</h3>
              </div>
              <p className="text-slate-700 mb-4">
                Clawdbot will message you on Telegram and ask a few questions to personalize its behavior.
              </p>
              <div className="bg-white p-5 rounded-lg border mb-4">
                <h4 className="font-semibold mb-3 text-[#1A5276]">Questions You'll Answer:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <MessageSquare className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">What should it call you?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MessageSquare className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">What should you call it?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MessageSquare className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">What's its purpose? (e.g., productivity assistant, research helper)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MessageSquare className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">What timezone are you in?</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-sm font-medium text-green-900">
                  ✓ Once you're done, the assistant is live and ready to work!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK TESTS */}
      <section>
        <div className="container-custom py-8">
          <ResponsiveCardGrid
            data={{
              title: 'Quick Tests to Verify Everything Works',
              subtitle: 'Start small. You want proof it is useful before getting fancy. Try these three quick tests:',
              variant: 'iconCard',
              cards: [
                {
                  id: 1,
                  title: 'Inbox Test',
                  description: '"Check my last 10 emails and tell me which ones actually need a response." Tests email integration and decision-making.',
                  icon: 'Mail',
                  iconColor: '#ffffff',
                  iconBg: '#FF8C00',
                },
                {
                  id: 2,
                  title: 'Research Test',
                  description: '"Research [company name] and give me a 3-bullet summary of what they do." Tests web search and summarization capabilities.',
                  icon: 'Search',
                  iconColor: '#ffffff',
                  iconBg: '#1A5276',
                },
                {
                  id: 3,
                  title: 'Reminder Test',
                  description: '"Remind me to [task] tomorrow at 9am." Tests scheduling and notification system.',
                  icon: 'Bell',
                  iconColor: '#ffffff',
                  iconBg: '#27AE60',
                },
              ],
            }}
          />
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-6">
            <p className="text-blue-900 font-medium">
              💡 If those three tests work, everything else will too.
            </p>
          </div>
        </div>
      </section>

      {/* COST BREAKDOWN */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold mb-6 text-[#1A5276] drop-shadow-sm animate-fade-in-up">
            How Much Does Clawdbot Cost?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-4 text-[#1A5276]">Monthly Costs</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="font-semibold">Claude API</span>
                  <span className="text-[#FF8C00] font-bold">~$20/month</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span className="font-semibold">AWS EC2</span>
                  <span className="text-green-600 font-bold">Free tier</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FF8C00]/10 to-[#FF8C00]/5 p-6 rounded-lg border-2 border-[#FF8C00]/20">
              <h3 className="text-xl font-semibold mb-3 text-[#1A5276]">Value Comparison</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Human VA (part-time)</span>
                  <span className="font-bold">$500-2000/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Working hours</span>
                  <span>~8 hours/day</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between text-lg">
                  <span className="font-semibold text-[#FF8C00]">Clawdbot</span>
                  <span className="font-bold text-[#FF8C00]">$20/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-[#FF8C00]">Availability</span>
                  <span className="font-bold text-[#FF8C00]">24/7</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-900 mb-2">
                  Important: Use Pay-As-You-Go API Keys
                </p>
                <p className="text-sm text-red-800">
                  Do NOT use Claude Pro/subscription tokens (sk-ant-oat*). Use official API keys (sk-ant-api03-*) to stay compliant with Anthropic's Terms of Service. Users have been banned for using subscription tokens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY & BEST PRACTICES */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold mb-6 text-[#1A5276] drop-shadow-sm animate-fade-in-up flex items-center gap-2">
            <Shield className="w-8 h-8" />
            Security & Best Practices
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Critical: Secure Your Bot Access
              </h3>
              <p className="text-sm text-red-800">
                Clawdbot gives unauthenticated root access to whoever can talk to it. Make absolutely sure you've properly configured your Telegram user ID to lock down access. If you can get to it, so can others.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Set AWS Usage Limits
              </h3>
              <p className="text-sm text-yellow-800">
                AWS can bill you without warning if you exceed free tier limits. Set usage limits in AWS settings (e.g., "stop this service at $5"). If you get an unexpected bill, email AWS support—they might forgive it.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Claude Code Token Conflict
              </h3>
              <p className="text-sm text-blue-800">
                If Claude Code disconnects when you paste your token into Clawdbot, use a separate API key instead. Alternative: Tell Clawdbot to "fix this" and paste the error—it often resolves itself.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-green-900 mb-2">Best Practices</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>✓ Use ENV files for API keys</li>
                <li>✓ Enable authentication on all dashboards</li>
                <li>✓ Monitor access logs regularly</li>
                <li>✓ Set up firewall rules</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO DO NEXT */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1A5276] drop-shadow-sm animate-fade-in-up">
            What to Do After Installation
          </h2>
          <p className="text-slate-700 text-lg mb-6">
            Once Clawdbot is running, you can slowly make it smarter by connecting more tools and giving it real tasks.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#1A5276]">Add Web Search</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF8C00]">1.</span>
                  <span>Go to brave.com/search/api</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF8C00]">2.</span>
                  <span>Get a free API key</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF8C00]">3.</span>
                  <span>Tell your bot: "Set up Brave search with this API key"</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#1A5276]">Connect Your Tools</h3>
              <p className="text-sm text-slate-600 mb-3">Add integrations over time—no rush:</p>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>GitHub</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Google Drive</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Gmail</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Calendar</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-3 text-[#1A5276]">Real Task Examples</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-[#FF8C00]">→</span>
                <span>Research [company] and give me a one-pager</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#FF8C00]">→</span>
                <span>Remind me to follow up with [name] in 3 days</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#FF8C00]">→</span>
                <span>Draft a LinkedIn post about [topic]</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#FF8C00]">→</span>
                <span>Check my calendar and find time for a call Tuesday</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#FF8C00]">→</span>
                <span>Summarize this article and draft a thank you email</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#FF8C00]">→</span>
                <span>Monitor [stock] and alert if it drops below [price]</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-6">
            <h4 className="font-semibold text-blue-900 mb-2">
              💡 Pro Tip: Use Voice Notes
            </h4>
            <p className="text-sm text-blue-800">
              Telegram supports voice notes. You can talk to Clawdbot while walking, driving, or thinking out loud. It listens, processes, and responds like a teammate who never interrupts.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTA
        data={{
          subheading: { text: 'Need Professional Help?' },
          title: 'Let Our Team Set Up Your AI Automation',
          description: 'Setting up Clawdbot is straightforward, but connecting it to your business systems, customizing workflows, and ensuring security takes expertise. Our AI automation specialists can deploy and configure Clawdbot for your specific needs—from email management to complex multi-agent systems.',
          primaryButton: {
            text: 'Get Expert Setup',
            action: '/contact',
          },
        }}
      />
    </>
  );
}
