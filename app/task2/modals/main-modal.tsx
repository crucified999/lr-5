import { X } from "lucide-react";
import { useEffect } from "react";

export type ModalProps = {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
};

export const Modal = ({ title, children, onClose }: ModalProps) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-opacity-30 z-[50]"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-semibold">{title}</h1>
          <button onClick={onClose} className="cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
