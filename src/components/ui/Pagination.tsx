import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        aria-label="Previous page"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded border border-white/10 bg-carbon text-white hover:border-gold hover:text-gold disabled:opacity-50 disabled:hover:border-white/10 disabled:hover:text-white transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 flex items-center justify-center rounded font-mono text-sm transition-colors ${
              isActive
                ? "bg-gold text-obsidian font-bold"
                : "border border-white/10 bg-carbon text-white hover:border-gold hover:text-gold"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        aria-label="Next page"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded border border-white/10 bg-carbon text-white hover:border-gold hover:text-gold disabled:opacity-50 disabled:hover:border-white/10 disabled:hover:text-white transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
