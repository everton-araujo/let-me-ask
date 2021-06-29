import { ReactNode } from 'react';
import cx from 'classnames';

import { QuestionContainer } from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export function Question({ 
  content,
  author, 
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <QuestionContainer 
      // className={`question ${isAnswered ? 'answered' : ''} ${isHighlighted ? 'highlighted' : ''}`}
      // Same usage as above
      className={cx(
        'question',
        { answered: isAnswered},
        { highlighted: isHighlighted && !isAnswered},
      )}
    > 
      <p>{content}</p>

      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          {children}
        </div>
      </footer>
    </QuestionContainer>
  );
}
