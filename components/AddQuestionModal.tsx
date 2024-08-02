import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Separator } from '@/components/ui/separator';

interface AddQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddQuestion: (question: {
    text: string;
    type: string;
    limit: string;
    skippable: string;
  }) => void;
}

const AddQuestionModal: React.FC<AddQuestionModalProps> = ({ isOpen, onClose, onAddQuestion }) => {
  const [questionText, setQuestionText] = useState('');
  const [questionType, setQuestionType] = useState('Text Based');
  const [limit, setLimit] = useState('120 Words');
  const [skippable, setSkippable] = useState('Yes');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddQuestion({ text: questionText, type: questionType, limit, skippable });
    setQuestionText('');
    setQuestionType('Text Based');
    setLimit('120 Words');
    setSkippable('Yes');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-[#f9fafb]">
        {/* <DialogHeader>
          <DialogTitle>Question</DialogTitle>
        </DialogHeader> */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="questionText" className='text-[#3b465a] font-semibold'>Question</Label>
            <Textarea
              id="questionText"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="Enter your question here"
              className="min-h-[80px] bg-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="questionType" className='text-[#3b465a] font-semibold' >Question Type</Label>
            <Select value={questionType} onValueChange={setQuestionType}>
              <SelectTrigger id="questionType" className='bg-white'>
                <SelectValue placeholder="Select question type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Text Based">Text Based</SelectItem>
                <SelectItem value="Photo Based">Photo Based</SelectItem>
                <SelectItem value="Video Based">Video Based</SelectItem>
                <SelectItem value="Audio Based">Audio Based</SelectItem>
                <SelectItem value="Document Based">Document Based</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="limit" className='text-[#3b465a] font-semibold'>Limit</Label>
              <Input
                id="limit"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                placeholder="e.g., 120 Words"
                className='bg-white'
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="skippable" className='text-[#3b465a] font-semibold'>Can this question be skipped</Label>
              <Select value={skippable} onValueChange={setSkippable}>
                <SelectTrigger id="skippable" className='bg-white'>
                  <SelectValue placeholder="Select skippable option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Separator/>
          <DialogFooter className="sm:justify-end">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary text-white hover:bg-[#222222] transition-colors">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddQuestionModal;