'use client';
import DynamicHero from '@/components/sections/dynamic-hero';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';

export default function Page() {
    return (
        <>
            {/* HERO SECTION */}
            <DynamicHero
                headline="OpenClaw Personal Assistant Your Always-On AI Companion"
                highlightWords={['OpenClaw', 'Personal Assistant', 'Always-On']}
                description="Meet OpenClaw — the open-source AI personal assistant built for people who demand full control. From managing tasks and drafting messages to executing workflows autonomously, OpenClaw is the intelligent co-pilot that works around the clock, entirely on your terms."
                heroImage={{
                    src: '/openclaw_img.png',
                    alt: 'OpenClaw Personal AI Assistant',
                }}
                primaryButton={{
                    text: 'Discover OpenClaw',
                    action: () => {
                        const el = document.getElementById('what-is-openclaw');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
                secondaryButton={{ text: 'Contact Us', action: '/contact' }}
            />

            {/* WHAT IS OPENCLAW */}
            <section id="what-is-openclaw">
                <div className="container-custom py-8">
                    <h2 className="text-3xl font-bold mb-4 text-[#1A5276] drop-shadow-sm animate-fade-in-up">
                        What is OpenClaw Personal Assistant?
                    </h2>
                    <p className="text-slate-700 text-base md:text-lg mb-6 text-justify">
                        <strong>OpenClaw Personal Assistant</strong> is an open-source, self-hosted AI agent designed to act as your
                        24/7 personal aide. Unlike cloud-dependent assistants that lock your data behind corporate walls, OpenClaw
                        runs on your own hardware — giving you an intelligent, privacy-first assistant that learns your habits,
                        manages your workflows, and takes action on your behalf without ever leaving your control.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4 text-[#1A5276]">OpenClaw vs. Standard AI Assistants</h3>

                    <div className="overflow-x-auto mb-8">
                        <table className="w-full border-collapse border border-slate-300 rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                                    <th className="p-4 text-left font-semibold border-r border-purple-400">Feature</th>
                                    <th className="p-4 text-left font-semibold border-r border-purple-400">Standard AI Assistant</th>
                                    <th className="p-4 text-left font-semibold">OpenClaw Personal Assistant</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white hover:bg-slate-50 transition">
                                    <td className="p-4 border border-slate-300 font-medium">Data Privacy</td>
                                    <td className="p-4 border border-slate-300">Stored on vendor servers.</td>
                                    <td className="p-4 border border-slate-300 text-purple-700 font-medium">Fully local — your data never leaves your device.</td>
                                </tr>
                                <tr className="bg-slate-50 hover:bg-slate-100 transition">
                                    <td className="p-4 border border-slate-300 font-medium">Task Execution</td>
                                    <td className="p-4 border border-slate-300">Answers questions only.</td>
                                    <td className="p-4 border border-slate-300 text-purple-700 font-medium">Executes real actions — files, apps, and APIs.</td>
                                </tr>
                                <tr className="bg-white hover:bg-slate-50 transition">
                                    <td className="p-4 border border-slate-300 font-medium">Memory</td>
                                    <td className="p-4 border border-slate-300">Resets after each session.</td>
                                    <td className="p-4 border border-slate-300 text-purple-700 font-medium">Persistent memory across days, weeks, and months.</td>
                                </tr>
                                <tr className="bg-slate-50 hover:bg-slate-100 transition">
                                    <td className="p-4 border border-slate-300 font-medium">Customisation</td>
                                    <td className="p-4 border border-slate-300">Limited to vendor settings.</td>
                                    <td className="p-4 border border-slate-300 text-purple-700 font-medium">Fully open-source — extend, modify, and own it.</td>
                                </tr>
                                <tr className="bg-white hover:bg-slate-50 transition">
                                    <td className="p-4 border border-slate-300 font-medium">Proactive Actions</td>
                                    <td className="p-4 border border-slate-300">Waits for your command.</td>
                                    <td className="p-4 border border-slate-300 text-purple-700 font-medium">Initiates tasks based on context and schedules.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CORE BENEFITS */}
            <section>
                <div className="container-custom py-8">
                    <ResponsiveCardGrid
                        data={{
                            title: 'Core Benefits of OpenClaw Personal Assistant',
                            subtitle: 'Experience a new standard of personal AI — open, capable, and entirely yours',
                            variant: 'iconCard',
                            cards: [
                                {
                                    id: 1,
                                    title: 'Full Ownership & Privacy',
                                    description: 'Your conversations, files, and preferences stay on your machine. No subscriptions, no vendor lock-in, and no data mining — ever.',
                                    icon: 'Lock',
                                    iconColor: '#ffffff',
                                    iconBg: '#8B5CF6',
                                },
                                {
                                    id: 2,
                                    title: 'Autonomous Task Execution',
                                    description: 'Go beyond chat. OpenClaw can browse the web, manage files, call APIs, and run terminal commands — completing multi-step tasks without hand-holding.',
                                    icon: 'Cpu',
                                    iconColor: '#ffffff',
                                    iconBg: '#6366F1',
                                },
                                {
                                    id: 3,
                                    title: 'Persistent Contextual Memory',
                                    description: 'OpenClaw remembers your preferences, past instructions, and ongoing projects — building a true "second brain" that grows smarter over time.',
                                    icon: 'Brain',
                                    iconColor: '#ffffff',
                                    iconBg: '#A855F7',
                                },
                                {
                                    id: 4,
                                    title: 'Multi-Platform Accessibility',
                                    description: 'Interact through WhatsApp, Telegram, Discord, or Slack — wherever you already are. No new apps or dashboards to learn.',
                                    icon: 'Smartphone',
                                    iconColor: '#ffffff',
                                    iconBg: '#7C3AED',
                                },
                            ],
                        }}
                    />
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section>
                <div className="container-custom py-8">
                    <h2 className="text-3xl font-bold mb-4 text-[#1A5276] drop-shadow-sm animate-fade-in-up">
                        How OpenClaw Works: Intelligence You Can Trust
                    </h2>
                    <p className="text-slate-700 text-base md:text-lg mb-6 text-justify">
                        OpenClaw combines a powerful <strong>local AI runtime</strong> with a modular skill engine,
                        allowing it to understand context deeply and act decisively — all without sending a single byte to the cloud.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-white p-6 rounded-lg border shadow-sm">
                            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                                <span className="text-2xl font-bold text-purple-600">1</span>
                            </div>
                            <h3 className="font-semibold mb-2 text-[#1A5276]">Connect Your World</h3>
                            <p className="text-sm text-slate-600">Link your email, calendar, messaging apps, and local files. OpenClaw securely reads your ecosystem to understand your context.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border shadow-sm">
                            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                                <span className="text-2xl font-bold text-indigo-600">2</span>
                            </div>
                            <h3 className="font-semibold mb-2 text-[#1A5276]">Learn & Adapt</h3>
                            <p className="text-sm text-slate-600">Through persistent memory and pattern recognition, OpenClaw builds a model of your preferences, habits, and priorities — improving with every interaction.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border shadow-sm">
                            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                                <span className="text-2xl font-bold text-purple-600">3</span>
                            </div>
                            <h3 className="font-semibold mb-2 text-[#1A5276]">Act Autonomously</h3>
                            <p className="text-sm text-slate-600">From drafting emails to executing scripts and filling online forms, OpenClaw takes real-world action — notifying you only when your approval is needed.</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-lg shadow-md">
                        <p className="text-white text-lg font-medium">
                            <strong>Built on Open Standards:</strong> OpenClaw is powered by open-source LLMs and integrates with
                            industry-standard protocols — so you are never locked into a single AI provider or platform.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY OPENCLAW IN 2026 */}
            <section>
                <div className="container-custom py-8">
                    <h2 className="text-3xl font-bold mb-4 text-[#1A5276] drop-shadow-sm animate-fade-in-up">
                        Why OpenClaw is the Right Choice in 2026
                    </h2>
                    <p className="text-slate-700 text-base md:text-lg mb-4 text-justify">
                        As AI assistants become central to how we work and live, concerns around data sovereignty, vendor dependency,
                        and rising subscription costs are growing. <strong>OpenClaw</strong> was built precisely for this moment —
                        offering the power of a frontier AI assistant with the freedom and transparency of open-source software.
                        Whether you are an individual professional, a developer, or a small team, OpenClaw gives you a competitive
                        edge without compromising your privacy.
                    </p>
                    <p className="text-2xl font-bold text-purple-600 text-center my-8">
                        Open-source power. Personal-scale intelligence. Zero compromises.
                    </p>
                </div>
            </section>

            {/* OPENCLAW FEATURES */}
            <section className="bg-gradient-to-b from-slate-50 to-white">
                <div className="container-custom py-8">
                    <h2 className="text-3xl font-bold mb-4 text-[#1A5276] drop-shadow-sm animate-fade-in-up">
                        What Makes OpenClaw Different
                    </h2>
                    <p className="text-slate-700 text-base md:text-lg mb-6 text-justify">
                        OpenClaw is not just another chatbot wrapper. It is a fully-fledged <strong>autonomous agent runtime</strong>
                        that runs locally on your Mac, Windows, Linux, or even a Raspberry Pi, with capabilities that go far beyond
                        answering questions.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4 text-[#1A5276]">Signature Capabilities</h3>

                    <ResponsiveCardGrid
                        data={{
                            title: '',
                            variant: 'iconCard',
                            cards: [
                                {
                                    id: 1,
                                    title: 'Skill Marketplace & Custom Plugins',
                                    description: 'Extend OpenClaw with community-built skills or write your own. From summarising PDFs to monitoring stock prices, new capabilities plug in instantly.',
                                    icon: 'Package',
                                    iconColor: '#ffffff',
                                    iconBg: '#8B5CF6',
                                },
                                {
                                    id: 2,
                                    title: 'Scheduled & Event-Triggered Actions',
                                    description: 'Set cron-based routines or trigger actions based on real-world events — inbox activity, calendar changes, or webhook signals from your apps.',
                                    icon: 'CalendarClock',
                                    iconColor: '#ffffff',
                                    iconBg: '#6366F1',
                                },
                                {
                                    id: 3,
                                    title: 'Voice & Text Interface',
                                    description: 'Communicate via text on any messaging platform or use built-in voice commands for hands-free operation at home or in the office.',
                                    icon: 'Mic',
                                    iconColor: '#ffffff',
                                    iconBg: '#A855F7',
                                },
                                {
                                    id: 4,
                                    title: 'Multi-Agent Orchestration',
                                    description: 'Deploy specialised sub-agents for research, writing, or coding tasks. OpenClaw coordinates them seamlessly to handle complex, multi-step projects.',
                                    icon: 'Network',
                                    iconColor: '#ffffff',
                                    iconBg: '#7C3AED',
                                },
                            ],
                        }}
                    />

                    {/* REAL-WORLD USE CASES */}
                    <h3 className="text-2xl font-semibold mb-4 mt-12 text-[#1A5276]">Real-World Use Cases with OpenClaw</h3>

                    <div className="overflow-x-auto mb-8">
                        <table className="w-full border-collapse border border-slate-300 rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                                    <th className="p-4 text-left font-semibold border-r border-purple-400">Use Case</th>
                                    <th className="p-4 text-left font-semibold">How OpenClaw Handles It</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white hover:bg-slate-50 transition">
                                    <td className="p-4 border border-slate-300 font-medium">Daily Briefings</td>
                                    <td className="p-4 border border-slate-300">Every morning, OpenClaw delivers a personalised summary of your emails, calendar, news highlights, and pending tasks — straight to your preferred messaging app.</td>
                                </tr>
                                <tr className="bg-slate-50 hover:bg-slate-100 transition">
                                    <td className="p-4 border border-slate-300 font-medium">Research & Summarisation</td>
                                    <td className="p-4 border border-slate-300">Provide a topic or a set of URLs and OpenClaw autonomously browses, reads, and synthesises information into a clean report saved to your local files.</td>
                                </tr>
                                <tr className="bg-white hover:bg-slate-50 transition">
                                    <td className="p-4 border border-slate-300 font-medium">Code & DevOps Assistant</td>
                                    <td className="p-4 border border-slate-300">Monitors your repositories, reviews pull requests, flags failing tests, and even writes boilerplate code — notifying you via Slack or Telegram with a summary.</td>
                                </tr>
                                <tr className="bg-slate-50 hover:bg-slate-100 transition">
                                    <td className="p-4 border border-slate-300 font-medium">Personal Finance Tracker</td>
                                    <td className="p-4 border border-slate-300">Connects to your expense data, categorises spending, and sends weekly digests with insights and budget alerts — all processed locally without third-party access.</td>
                                </tr>
                                <tr className="bg-white hover:bg-slate-50 transition">
                                    <td className="p-4 border border-slate-300 font-medium">Content Creation Pipeline</td>
                                    <td className="p-4 border border-slate-300">Drafts blog posts, social media captions, or email newsletters based on your brand voice — then queues them for your review in a simple approval workflow.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                        <p className="text-sm text-blue-900">
                            <strong>SEO Tip:</strong> Pairing terms like <em>&quot;open-source personal AI assistant,&quot;</em>{' '}
                            <em>&quot;self-hosted AI agent,&quot;</em> and <em>&quot;local-first AI automation&quot;</em> with{' '}
                            <strong>OpenClaw</strong> captures high-intent traffic from privacy-conscious users and developers
                            seeking powerful, vendor-independent automation solutions.
                        </p>
                    </div>

                    {/* PRIVACY & SECURITY */}
                    <h3 className="text-2xl font-semibold mb-4 text-[#1A5276]">Privacy & Security: The OpenClaw Promise</h3>
                    <p className="text-slate-700 text-base md:text-lg text-justify">
                        OpenClaw is architected with a <strong>local-first, privacy-by-design</strong> philosophy. Your credentials,
                        conversation history, and personal files are stored exclusively on your own hardware. The codebase is fully
                        open-source and auditable — so you never have to take anyone&apos;s word for it. You define the permissions,
                        you set the boundaries, and you remain in complete control of every action the assistant takes.
                    </p>
                </div>
            </section>
        </>
    );
}