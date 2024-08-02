import React from 'react';
import { Button } from "@/components/ui/button";
import { GripVertical, Trash2 } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface QuestionCardProps {
    id: number;
    number: number;
    title: string;
    type: string;
    onEdit: () => void;
    onDelete: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ id, number, title, type, onEdit, onDelete }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} className="bg-[#f9fafb] p-4 rounded-lg shadow-sm flex items-start space-x-4">
            <div className="flex-shrink-0 w-6 text-right">
                <span className="font-semibold leading-6">{number}.</span>
            </div>
            <div className="flex-grow">
                <p className="text-lg font-semibold leading-6 mt-0">{title}</p>
                <p className="text-sm text-gray-500 font-medium mt-1">{type}</p>
            </div>
            <div className="flex-shrink-0 flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={onEdit} className="h-8">
                    <span className='font-semibold'>Edit</span>
                </Button>
                <Button variant="outline" size="sm" onClick={onDelete} className="h-8 w-8 p-0 bg-[#f4eded]">
                    <Trash2 className="h-4 w-4 text-[#9b2929] font-semibold" />
                </Button>
                <div className="flex-shrink-0" {...attributes} {...listeners}>
                    <GripVertical className="text-foreground cursor-grab" />
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;