import { X } from 'lucide-react';
import SearchBar from './SearchBar';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute inset-x-0 top-0 bg-white p-4 transform transition-transform duration-300 ease-in-out animate-slideDown">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Search</h2>
            <button onClick={onClose}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <SearchBar onClose={onClose} />
        </div>
      </div>
    </div>
  );
}