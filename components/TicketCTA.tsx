import Link from 'next/link';

export default function TicketCTA({ href }: { href: string }) {
  return (
    <div className="my-6">
      <Link href={href} className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-6 py-3 text-sm font-medium hover:bg-blue-700 transition-colors">
        Buy Tickets
      </Link>
    </div>
  );
}
