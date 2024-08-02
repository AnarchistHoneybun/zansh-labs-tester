import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import QuestionCard from './QuestionCard';
import AddQuestionModal from './AddQuestionModal';
import StarIcon from './StarIcon';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from '@dnd-kit/modifiers';

interface Question {
  id: number;
  text: string;
  type: string;
  limit: string;
  skippable: string;
}

const EditApplicationQuestions: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
  );

  const handleAddQuestion = (newQuestion: { text: string; type: string; limit: string; skippable: string }) => {
    setQuestions([...questions, { id: Date.now(), ...newQuestion }]);
  };

  const handleEditQuestion = (id: number) => {
    // Implement edit functionality
  };

  const handleDeleteQuestion = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setQuestions((prevQuestions) => {
        const oldIndex = prevQuestions.findIndex((q) => q.id === active.id);
        const newIndex = prevQuestions.findIndex((q) => q.id === over.id);

        return arrayMove(prevQuestions, oldIndex, newIndex);
      });
    }
  };

  return (
      <div className="space-y-4">
        {questions.length === 0 ? (
            <div className="text-center py-20">
              <StarIcon />
              <h2 className="text-2xl font-semibold mb-2">Let&apos;s add some questions to your applications</h2>
              <p className="text-gray-600 mb-4">Click the button below to get your survey up and running.</p>
              <Button onClick={() => setIsModalOpen(true)}>Add a question</Button>
            </div>
        ) : (
            <>
              <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                  modifiers={[restrictToVerticalAxis, restrictToParentElement]}
              >
                <SortableContext items={questions} strategy={verticalListSortingStrategy}>
                  {questions.map((question, index) => (
                      <QuestionCard
                          key={question.id}
                          id={question.id}
                          number={index + 1}
                          title={question.text}
                          type={question.type}
                          onEdit={() => handleEditQuestion(question.id)}
                          onDelete={() => handleDeleteQuestion(question.id)}
                      />
                  ))}
                </SortableContext>
              </DndContext>
              <div className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-300 text-center">
                <Button variant="outline" onClick={() => setIsModalOpen(true)}>
                  Add another question
                </Button>
              </div>
            </>
        )}
        <AddQuestionModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAddQuestion={handleAddQuestion}
        />
      </div>
  );
};

export default EditApplicationQuestions;