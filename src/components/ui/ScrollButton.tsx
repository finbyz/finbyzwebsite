'use client';

export default function ScrollButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const handleClick = () => {
    const form = document.querySelector('.inquiry-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
