const SEGMENT = /(\*\*[^*]+\*\*)/g;

// Bullets mark their own emphasis with **double asterisks**, so what gets stressed
// is a content decision in profile.ts rather than a markup change here.
export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(SEGMENT).map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i} className="font-semibold text-fg">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
