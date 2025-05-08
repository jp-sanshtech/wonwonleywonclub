// Reusable component for empty lines
export default function EmptyLines({ count, className = "empty-line" }: { count: number, className?: string }) {
  const emptyLines = Array(count).fill(null);
  
  return (
    <>
      {emptyLines.map((_, index) => (
        <div key={index} className={className}></div>
      ))}
    </>
  );
}
