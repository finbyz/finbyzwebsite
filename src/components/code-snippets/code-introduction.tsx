interface CodeSnippetInstroductionProps {
    paragraphs: string[];
}

export default function CodeSnippetInstroduction({ paragraphs }: CodeSnippetInstroductionProps) {
    return (
        <section className="container-custom">
            <div className="rounded-xl mb-2 mt-2">
                {paragraphs.map((para, index) => (
                    <p key={index} className="leading-relaxed mb-4">
                        {para}
                    </p>
                ))}
            </div>
        </section>
    );
}
