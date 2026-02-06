'use client';
import DynamicHero from '@/components/sections/dynamic-hero';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import CTA from '@/components/sections/cta';

export default function ProactiveAIAssistantPage() {
    return (
        <>
            {/* HERO SECTION */}
            <DynamicHero
                headline="Proactive AI Personal Assistant The Future of Life Management"
                highlightWords={['Proactive', 'AI Personal Assistant', 'Future']}
                description="Stop managing your tools. Let intelligent AI manage your life. Discover how proactive assistants like Moltbot eliminate decision fatigue, automate mundane tasks, and reclaimed your time through predictive intelligence and contextual awareness."
                heroImage={{
                    src: '/images/proactive-ai-assistant-hero.jpg',
                    alt: 'Proactive AI Assistant Life Organizer',
                }}
                primaryButton={{
                    text: 'Explore Moltbot',
                    action: () => {
                        const el = document.getElementById('what-is-proactive');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
                secondaryButton={{ text: 'Contact Us', action: '/contact' }}
            />

            {/* WHAT IS A PROACTIVE AI PERSONAL ASSISTANT */}
            <section id="what-is-proactive">
                <div className="container-custom py-8">
                    <h2 className="text-3xl font-bold mb-4 text-[#1A5276] drop-shadow-sm animate-fade-in-up">
                        What is a Proactive AI Personal Assistant?
                    </h2>
                    <p className="text-slate-700 text-base md:text-lg mb-6 text-justify">
                        Most AI tools today are &quot;on-demand.&quot; They wait for you to type a prompt or set a timer. A{' '}
                        <strong>Proactive Life Organizer Bot</strong>, however, uses predictive intelligence to manage your world autonomously.
                        It doesn&apos;t just store your schedule; it optimizes your life.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4 text-[#1A5276]">Key Differences: Reactive vs. Proactive</h3>

                    <div className="overflow-x-auto mb-8">
                        <table className="w-full border-collapse border border-slate-300 rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                                    <th className="p-4 text-left font-semibold border-r border-purple-400">Feature</th>
                                    <th className="p-4 text-left font-semibold border-r border-purple-400">Reactive Assistant (Standard)</th>
                                    <th className="p-4 text-left font-semibold">Proactive Assistant (Next-Gen)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white hover:bg-slate-50 transition">
                                    <td className="p-4 border border-slate-300 font-medium">Scheduling</td>
                                    <td className="p-4 border border-slate-300">Adds an event when you ask.</td>
                                    <td className="p-4 border border-slate-300 text-purple-700 font-medium">Suggests moving a meeting because you&apos;re low on sleep.</td>
                                </tr>
                                <tr className="bg-slate-50 hover:bg-slate-100 transition">
                                    <td className="p-4 border border-slate-300 font-medium">Reminders</td>
                                    <td className="p-4 border border-slate-300">Pings you at 5:00 PM.</td>
                                    <td className="p-4 border border-slate-300 text-purple-700 font-medium">Pings you when you are physically near the grocery store.</td>
                                </tr>
                                <tr className="bg-white hover:bg-slate-50 transition">
                                    <td className="p-4 border border-slate-300 font-medium">Communication</td>
                                    <td className="p-4 border border-slate-300">Drafts an email when prompted.</td>
                                    <td className="p-4 border border-slate-300 text-purple-700 font-medium">Flags an urgent email and suggests a draft response.</td>
                                </tr>
                                <tr className="bg-slate-50 hover:bg-slate-100 transition">
                                    <td className="p-4 border border-slate-300 font-medium">Problem Solving</td>
                                    <td className="p-4 border border-slate-300">Answers &quot;How is the traffic?&quot;</td>
                                    <td className="p-4 border border-slate-300 text-purple-700 font-medium">Alerts you to leave 15 mins early due to a sudden accident.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section >

            {/* CORE BENEFITS */}
            < section >
                <div className="container-custom py-8">
                    <ResponsiveCardGrid
                        data={{
                            title: 'Core Benefits of an AI Life Organizer',
                            subtitle: 'Transform how you manage your day with intelligent automation',
                            variant: 'iconCard',
                            cards: [
                                {
                                    id: 1,
                                    title: 'Eliminate Decision Fatigue',
                                    description: 'Stop wasting mental energy on mundane choices. Your AI handles the "when" and "where," leaving you the "how" and "why."',
                                    icon: 'Zap',
                                    iconColor: '#ffffff',
                                    iconBg: '#8B5CF6',
                                },
                                {
                                    id: 2,
                                    title: 'Predictive Scheduling',
                                    description: 'By analyzing your habits, the bot carves out "Deep Work" blocks during your most productive hours.',
                                    icon: 'Calendar',
                                    iconColor: '#ffffff',
                                    iconBg: '#6366F1',
                                },
                                {
                                    id: 3,
                                    title: 'Seamless Integration',
                                    description: 'It acts as the "connective tissue" between your calendar, email, fitness tracker, and smart home.',
                                    icon: 'Link',
                                    iconColor: '#ffffff',
                                    iconBg: '#A855F7',
                                },
                                {
                                    id: 4,
                                    title: 'Stress Reduction',
                                    description: 'Knowing that a digital brain is monitoring your deadlines allows you to stay present in the moment.',
                                    icon: 'Shield',
                                    iconColor: '#ffffff',
                                    iconBg: '#7C3AED',
                                },
                            ],
                        }}
                    />
                </div>
            </section >

            {/* HOW IT WORKS */}
            < section >
                <div className="container-custom py-8">
                    <h2 className="text-3xl font-bold mb-4 text-[#1A5276] drop-shadow-sm animate-fade-in-up">
                        How It Works: The Magic Behind the Bot
                    </h2>
                    <p className="text-slate-700 text-base md:text-lg mb-6 text-justify">
                        The secret sauce lies in <strong>Contextual Awareness</strong>. By securely synthesizing data from your ecosystem,
                        the AI understands your intent.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-white p-6 rounded-lg border shadow-sm">
                            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                                <span className="text-2xl font-bold text-purple-600">1</span>
                            </div>
                            <h3 className="font-semibold mb-2 text-[#1A5276]">Data Synthesis</h3>
                            <p className="text-sm text-slate-600">It looks at your past behavior and current goals.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border shadow-sm">
                            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                                <span className="text-2xl font-bold text-indigo-600">2</span>
                            </div>
                            <h3 className="font-semibold mb-2 text-[#1A5276]">Pattern Recognition</h3>
                            <p className="text-sm text-slate-600">It identifies that you usually struggle with Friday deadlines.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border shadow-sm">
                            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                                <span className="text-2xl font-bold text-purple-600">3</span>
                            </div>
                            <h3 className="font-semibold mb-2 text-[#1A5276]">Proactive Intervention</h3>
                            <p className="text-sm text-slate-600">It blocks out Thursday afternoon for &quot;Focus Time&quot; and silences your notifications automatically.</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-lg shadow-md">
                        <p className="text-white text-lg font-medium">
                            <strong>Privacy First:</strong> A true life organizer bot prioritizes end-to-end encryption, ensuring your
                            personal data stays yours. You set the boundaries; the AI does the heavy lifting.
                        </p>
                    </div>
                </div>
            </section >

            {/* WHY 2026 */}
            < section >
                <div className="container-custom py-8">
                    <h2 className="text-3xl font-bold mb-4 text-[#1A5276] drop-shadow-sm animate-fade-in-up">
                        Why You Need a Proactive Assistant in 2026
                    </h2>
                    <p className="text-slate-700 text-base md:text-lg mb-4 text-justify">
                        The &quot;hustle culture&quot; of the past is being replaced by <strong>Efficient Living</strong>. We no longer have time
                        to manage the tools that are supposed to be helping us. A proactive assistant isn&apos;t just a luxury; it&apos;s a necessity
                        for anyone looking to reclaim their time and mental clarity.
                    </p>
                    <p className="text-2xl font-bold text-purple-600 text-center my-8">
                        Stop managing your life. Start living it.
                    </p>
                </div>
            </section >

            {/* MOLTBOT SECTION */}
            < section className="bg-gradient-to-b from-slate-50 to-white" >
                <div className="container-custom py-8">
                    <h2 className="text-3xl font-bold mb-4 text-[#1A5276] drop-shadow-sm animate-fade-in-up">
                        The Ultimate Solution: Moltbot (Formerly Clawdbot)
                    </h2>
                    <p className="text-slate-700 text-base md:text-lg mb-6 text-justify">
                        If you want to move beyond basic automation, meet <strong>Moltbot</strong>. Often described as &quot;Claude with hands,&quot;
                        Moltbot is a viral, open-source personal AI agent that turns the dream of a &quot;24/7 Jarvis&quot; into a reality.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4 text-[#1A5276]">Why Moltbot is a Game-Changer</h3>
                    <p className="text-slate-700 text-base md:text-lg mb-6 text-justify">
                        Unlike standard chatbots that live in a browser tab, Moltbot is a <strong>self-hosted runtime</strong> that runs
                        on your hardware (Mac, Windows, Linux, or even a Raspberry Pi). This &quot;local-first&quot; architecture gives it unique superpowers:
                    </p>

                    <ResponsiveCardGrid
                        data={{
                            title: '',
                            variant: 'iconCard',
                            cards: [
                                {
                                    id: 1,
                                    title: 'Proactive Outreach (The "Heartbeat" Engine)',
                                    description: 'Moltbot doesn\'t wait for you. Using a "heartbeat" mechanism and cron jobs, it can message you first—sending morning briefings, alerting you to server downtime, or reminding you to leave for a meeting based on live traffic.',
                                    icon: 'Bell',
                                    iconColor: '#ffffff',
                                    iconBg: '#8B5CF6',
                                },
                                {
                                    id: 2,
                                    title: 'Multi-Channel Command Center',
                                    description: 'You don\'t need a new app. You interact with Moltbot through the messaging platforms you already use, including WhatsApp, Telegram, Discord, iMessage, and Slack.',
                                    icon: 'MessageSquare',
                                    iconColor: '#ffffff',
                                    iconBg: '#6366F1',
                                },
                                {
                                    id: 3,
                                    title: 'Persistent Memory',
                                    description: 'It stores your preferences, past conversations, and instructions as local Markdown files. It builds a "second brain" that remembers your context across days and weeks.',
                                    icon: 'Database',
                                    iconColor: '#ffffff',
                                    iconBg: '#A855F7',
                                },
                                {
                                    id: 4,
                                    title: 'Full System Execution',
                                    description: 'Given permission, it can execute terminal commands, manage local files, browse the web via Puppeteer to fill out forms, and even write its own code to learn new "skills."',
                                    icon: 'Terminal',
                                    iconColor: '#ffffff',
                                    iconBg: '#7C3AED',
                                },
                            ],
                        }}
                    />

                    {/* REAL-WORLD USE CASES */}
                    <h3 className="text-2xl font-semibold mb-4 mt-12 text-[#1A5276]">Real-World Use Cases with Moltbot</h3>

                    <div className="overflow-x-auto mb-8">
                        <table className="w-full border-collapse border border-slate-300 rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                                    <th className="p-4 text-left font-semibold border-r border-purple-400">Use Case</th>
                                    <th className="p-4 text-left font-semibold">How Moltbot Handles It</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white hover:bg-slate-50 transition">
                                    <td className="p-4 border border-slate-300 font-medium">Email Triage</td>
                                    <td className="p-4 border border-slate-300">Scans your inbox, summarizes urgent threads, and drafts replies for your approval—all sent to your WhatsApp.</td>
                                </tr>
                                <tr className="bg-slate-50 hover:bg-slate-100 transition">
                                    <td className="p-4 border border-slate-300 font-medium">Travel Assistant</td>
                                    <td className="p-4 border border-slate-300">Finds flight options, monitors price drops, and can even fill out check-in forms autonomously.</td>
                                </tr>
                                <tr className="bg-white hover:bg-slate-50 transition">
                                    <td className="p-4 border border-slate-300 font-medium">Smart Home & Health</td>
                                    <td className="p-4 border border-slate-300">Pulls data from wearables (like WHOOP) or controls smart lights based on your actual productivity schedule.</td>
                                </tr>
                                <tr className="bg-slate-50 hover:bg-slate-100 transition">
                                    <td className="p-4 border border-slate-300 font-medium">Developer Workflows</td>
                                    <td className="p-4 border border-slate-300">Monitors GitHub repos and autonomously opens pull requests or summarizes code changes while you sleep.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                        <p className="text-sm text-blue-900">
                            <strong>SEO Tip:</strong> Incorporating terms like <em>&quot;Self-hosted AI agent,&quot;</em> <em>&quot;Local-first AI,&quot;</em> and{' '}
                            <em>&quot;Open-source personal assistant&quot;</em> alongside <strong>Moltbot</strong> will help capture high-intent traffic
                            from users looking for privacy-focused and powerful automation tools.
                        </p>
                    </div>

                    {/* PRIVACY & SECURITY */}
                    <h3 className="text-2xl font-semibold mb-4 text-[#1A5276]">Privacy & Security: The &quot;Lobster Way&quot;</h3>
                    <p className="text-slate-700 text-base md:text-lg text-justify">
                        Moltbot uses a &quot;shell&quot; metaphor—the soft interior is the AI&apos;s reasoning, while the hard shell is the local code
                        you control. Because it is <strong>self-hosted</strong>, your sensitive data (emails, files, and API keys) stays
                        on your machine, not on a corporate server. You decide exactly what files the bot can read and what commands it can execute.
                    </p>
                </div>
            </section >

            {/* CTA SECTION */}
            < CTA
                data={{
                    subheading: { text: 'Ready to Transform Your Life?' },
                    title: 'Stop Managing Your Life. Start Living It.',
                    description: 'Discover how Moltbot and proactive AI assistants can eliminate decision fatigue, automate mundane tasks, and give you back your most valuable resource: time.',
                    primaryButton: {
                        text: 'Get Started with AI Automation',
                        action: '/contact',
                    },
                }
                }
            />
        </>
    );
}
