'use client'

import Link from 'next/link';
import BlogHero from '@/components/ai_components/blog/BlogHero';
import BlogSection from '@/components/ai_components/blog/BlogSection';
import BlogSectionWithImage from '@/components/ai_components/blog/BlogSectionWithImage';
import BlogTableOfContents from '@/components/ai_components/blog/BlogTableOfContents';
import BlogContent from '@/components/ai_components/blog/BlogContent';
import BlogParagraph from '@/components/ai_components/blog/BlogParagraph';
import BlogCheckList from '@/components/ai_components/blog/BlogCheckList';

const heroProps = {
    title: 'Building Agentic Workflows with n8n 2.0 & LangChain: A 2026 Guide',
    description:
        'n8n 2.0 transforms the platform from a linear automation tool into an AI agent orchestrator. Learn how to leverage LangChain nodes, memory, and tools to build autonomous systems.',
    primaryCategory: 'Technical Guide',
    tags: ['n8n', 'LangChain', 'AI Agents', 'Tutorial', '2026'],
    author: {
        name: 'Finbyz Tech',
        title: 'Development Team',
    },
    publishDate: '2026-01-22',
    readTime: '15 min read',
};

const tocItems = [
    { id: 'introduction', title: 'From Automations to Agents' },
    { id: 'whats-new-n8n-2', title: 'What is New in n8n 2.0?' },
    { id: 'langchain-nodes', title: 'Understanding LangChain Nodes' },
    { id: 'building-an-agent', title: 'Tutorial: Building Your First Agent' },
    { id: 'memory-context', title: 'Handling Memory & Context' },
    { id: 'conclusion', title: 'The Future of AI on n8n' },
];

export default function Page() {
    return (
        <div className="min-h-screen bg-background">
            <BlogHero {...heroProps} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 mx-auto w-full bg-muted/30 border-b container-custom">
                <BlogTableOfContents items={tocItems} />
                <BlogContent>
                    {/* Introduction */}
                    <BlogSectionWithImage
                        id="introduction"
                        title="From Linear Automations to Autonomous Agents"
                        image={{
                            src: '/images/n8n-langchain.png',
                            alt: 'n8n 2.0 AI Agent Workflow',
                            width: 200,
                            height: 200,
                        }}
                        imagePosition="right"
                        imageSize="medium"
                    >
                        <BlogParagraph>
                            For years, <strong>n8n</strong> has been the champion of linear automation: <em>Trigger → Action A → Action B</em>. But modern problems require dynamic solutions.
                        </BlogParagraph>
                        <BlogParagraph>
                            Enter <strong>n8n 2.0</strong>, released in January 2026. With the integration of Native LangChain support, n8n has evolved into a powerful orchestration layer for <strong>AI Agents</strong>—systems that can reason, plan, and execute tasks using tools, rather than just following a pre-defined script.
                        </BlogParagraph>
                    </BlogSectionWithImage>

                    {/* What's New */}
                    <BlogSection id="whats-new-n8n-2" title="What is New in n8n 2.0?">
                        <BlogParagraph>
                            The 2.0 update is massive. beyond the UI refresh, the core engine has been upgraded to support stateful, long-running AI processes.
                        </BlogParagraph>
                        <div className="grid md:grid-cols-2 gap-6 my-6">
                            <div className="bg-card p-6 rounded-lg border shadow-sm">
                                <h4 className="font-bold mb-2">🧠 Native LangChain Integration</h4>
                                <p className="text-muted-foreground text-sm">
                                    No more hacking together HTTP requests to OpenAI. n8n now has first-class nodes for Chains, Agents, Memory, and Vector Stores.
                                </p>
                            </div>
                            <div className="bg-card p-6 rounded-lg border shadow-sm">
                                <h4 className="font-bold mb-2">🛠️ The "Tool" Node</h4>
                                <p className="text-muted-foreground text-sm">
                                    You can now designate any n8n workflow as a "Tool". An AI Agent can call this tool when it decides it needs it. This enables modular, reusable agent skills.
                                </p>
                            </div>
                            <div className="bg-card p-6 rounded-lg border shadow-sm">
                                <h4 className="font-bold mb-2">💾 Persistent Memory</h4>
                                <p className="text-muted-foreground text-sm">
                                    Agents can now remember context across different executions. Use Redis, Postgres, or in-memory storage to keep conversation history.
                                </p>
                            </div>
                            <div className="bg-card p-6 rounded-lg border shadow-sm">
                                <h4 className="font-bold mb-2">🚀 Autosave</h4>
                                <p className="text-muted-foreground text-sm">
                                    The most requested feature. Workflows are saved automatically as you build, preventing data loss during browser crashes.
                                </p>
                            </div>
                        </div>
                    </BlogSection>

                    {/* LangChain Nodes */}
                    <BlogSection id="langchain-nodes" title="Understanding the New Nodes">
                        <BlogParagraph>
                            If you open the n8n editor today, you will see a new "LangChain" category. Here are the key components:
                        </BlogParagraph>
                        <BlogCheckList
                            items={[
                                'Model Nodes: Connect to OpenAI (GPT-4o), Anthropic (Claude 3.5), or local models via Ollama.',
                                'Memory Nodes: manage conversation history (WindowBuffer, SummaryBuffer).',
                                'Chain Nodes: Pre-built logic like "Summarize", "QA with Documents", or "Structured Output Parser".',
                                'Vector Store Nodes: Connect to Pinecone, Qdrant, or Supabase specifically for RAG (Retrieval Augmented Generation).',
                            ]}
                        />
                    </BlogSection>

                    {/* Tutorial */}
                    <BlogSection id="building-an-agent" title="Tutorial: Building Your First Agent">
                        <BlogParagraph>
                            Let us build a simple "Customer Support Agent" that can answer questions and look up order status.
                        </BlogParagraph>

                        <h4 className="font-semibold text-lg mt-6 mb-2">Step 1: The Agent Node</h4>
                        <BlogParagraph>
                            Drag an <strong>AI Agent</strong> node onto the canvas. Connect a Chat Trigger to it. This node acts as the "brain".
                        </BlogParagraph>

                        <h4 className="font-semibold text-lg mt-6 mb-2">Step 2: Connect a Model</h4>
                        <BlogParagraph>
                            Connect an <strong>OpenAI Chat Model</strong> node to the Agent's "Model" input. Select GPT-4o for best reasoning capabilities.
                        </BlogParagraph>

                        <h4 className="font-semibold text-lg mt-6 mb-2">Step 3: Define Tools</h4>
                        <BlogParagraph>
                            This is the magic part. Create a separate workflow calling your database (e.g., Postgres) to "Get Order Status". In your main agent workflow, use the <strong>Tool</strong> node to expose this sub-workflow to the agent.
                        </BlogParagraph>
                        <BlogParagraph>
                            <em>Name the tool clearly, e.g., "look_up_order". The AI will use this name to decide when to call it!</em>
                        </BlogParagraph>

                        <h4 className="font-semibold text-lg mt-6 mb-2">Step 4: Test</h4>
                        <BlogParagraph>
                            Open the chat window. Ask: "Where is my order #12345?". The Agent will see it needs to use the "look_up_order" tool, execute it, get the data, and respond to you in natural language.
                        </BlogParagraph>
                    </BlogSection>

                    {/* Conclusion */}
                    <BlogSection id="conclusion" title="The Future is Semantic">
                        <BlogParagraph>
                            With n8n 2.0, we are moving away from rigid logic trees toward semantic routing. You tell the system <em>what</em> to do, and the Agent decides <em>how</em> to do it.
                        </BlogParagraph>
                        <BlogParagraph>
                            This reduces the complexity of maintaining massive "spaghetti" workflows with hundreds of if/else branches. Instead, you build small, modular tools and let the AI orchestrate them.
                        </BlogParagraph>

                        <div className="mt-8 p-6 bg-secondary/20 rounded-lg">
                            <h4 className="font-bold text-lg mb-2">Want to Compare Platforms?</h4>
                            <p className="mb-4">
                                See how n8n's new AI features stack up against Zapier and Make.
                            </p>
                            <Link
                                href="/n8n/insights/n8n-vs-zapier-vs-make-comparison"
                                className="text-primary font-bold hover:underline"
                            >
                                Read the 2026 Comparison Guide →
                            </Link>
                        </div>
                    </BlogSection>

                </BlogContent>
            </div>
        </div>
    );
}
