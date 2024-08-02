import React from 'react';
import { Button } from "@/components/ui/button";
import { GripVertical, Pencil, Trash2 } from 'lucide-react';

interface QuestionCardProps {
  number: number;
  title: string;
  type: string;
  onEdit: () => void;
  onDelete: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ number, title, type, onEdit, onDelete }) => {
  return (
    <div className="bg-[#f9fafb] p-4 rounded-lg shadow-sm flex items-start space-x-4">
      {/* <div className="flex-shrink-0">
        <GripVertical className="text-gray-400 cursor-move" />
      </div> */}
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{number}. {title}</h3>
        <p className="text-sm text-gray-500">{type}</p>
      </div>
      <div className="flex-shrink-0 flex items-center space-x-2">
        <Button variant="outline" size="sm" onClick={onEdit} className="h-8">
          <span className='font-semibold'>Edit</span>
        </Button>
        <Button variant="outline" size="sm" onClick={onDelete} className="h-8 w-8 p-0 bg-[#f4eded]">
          <Trash2 className="h-4 w-4 text-[#9b2929] font-semibold" />
        </Button>
        <div className="flex-shrink-0">
        <GripVertical className="text-foreground cursor-move" />
      </div>
      </div>
      {/* <div className="flex-shrink-0">
        <GripVertical className="text-foreground cursor-move" />
      </div> */}
    </div>
  );
};

export default QuestionCard;