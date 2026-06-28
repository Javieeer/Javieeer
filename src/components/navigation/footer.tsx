export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-8">
      <div className="
      max-w-7xl
      mx-auto
      px-6 md:px-8
      flex
      flex-col
      md:flex-row
      items-center
      justify-between
      gap-3
      ">

        <p className="text-zinc-500 text-sm">
          © 2026 Javier Zapata
        </p>

        <p className="text-zinc-600 text-sm">
          Built with Next.js & Tailwind CSS
        </p>

      </div>
    </footer>
  );
}