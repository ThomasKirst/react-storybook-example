import { action } from '@storybook/addon-actions';
import QuestionCard from './QuestionCard';

export default {
  title: 'Component/QuestionCard',
  component: QuestionCard,
};

const Template = (args) => <QuestionCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'Lene',
  text: 'Why Storybook?!',
  id: '1234abcd',
  isDone: false,
  hasPriority: false,
  onRemoveQuestion: action('Remove button was clicked!'),
};

export const CardIsDone = Template.bind({});

CardIsDone.args = {
  name: 'Thomas',
  text: 'What is a server? It is an App?',
  id: '2345bcde',
  isDone: true,
  onRemoveQuestion: action('Remove button was clicked!'),
};

export const CardHasPriority = Template.bind({});

CardHasPriority.args = {
  name: 'Merle',
  text: 'How do I write a good story?',
  id: '3456cdef',
  hasPriority: true,
  onRemoveQuestion: action('Remove button was clicked!'),
};
