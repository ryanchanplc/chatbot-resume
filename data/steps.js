import Links from '../components/Links'
import { questions } from './questions'

const removeAskedQuestion = (previousValue) => {
  questions.splice(
    questions.findIndex(({ value }) => value == previousValue),
    1
  )
}

export const steps = [
  {
    id: 'Intro-1',
    message: 'Hello! My name is Ryan',
    trigger: 'Intro-2',
  },
  {
    id: 'Intro-2',
    message: 'I am a Software Engineer.',
    trigger: 'Intro-3',
  },
  {
    id: 'Intro-3',
    message: 'I have over 9 years software development experience.',
    trigger: 'Questions',
  },
  {
    id: 'Questions',
    options: questions,
  },
  {
    id: 'Education-1',
    message: ({ previousValue }) => {
      removeAskedQuestion(previousValue)
      return 'I graduated from the Chinese University of Hong Kong'
    },
    trigger: 'Education-2',
  },
  {
    id: 'Education-2',
    message: 'I have a M.Phil Degree in Mechanical and Automation Engineering',
    trigger: 'Education-3',
  },
  {
    id: 'Education-3',
    message:
      'and a Bacholer Degree in Automation and Computer Aided Engineering',
    trigger: 'Questions',
  },
  {
    id: 'Skill-1',
    message: ({ previousValue }) => {
      removeAskedQuestion(previousValue)
      return 'I am specialized in developing front-end application like mobile ( Android / iOS / ReactNaive / Flutter ) and web applicaton ( React/Vue ). I am also familiar in backend development ( PHP / Nodejs )'
    },
    trigger: 'Skill-2',
  },
  {
    id: 'Skill-2',
    message:
      'I often write code in Typescript / Javascript / PHP / ObjectiveC / Java / C# / (some) Python',
    trigger: 'Questions',
  },
  {
    id: 'Work-1',
    message: ({ previousValue }) => {
      removeAskedQuestion(previousValue)
      return 'Currently i am working for a fintech startup as a Front-end Engineer.'
    },
    trigger: 'Work-2',
  },
  {
    id: 'Work-2',
    message:
      'My responsibilities are revamp a legacy wealth management platform from Java GWT to React, and maintain/develop existing/new features',
    trigger: 'Questions',
  },
  {
    id: 'Links-1',
    message: ({ previousValue }) => {
      removeAskedQuestion(previousValue)
      return 'Please check the links below : '
    },
    trigger: 'Links-2',
  },
  {
    id: 'Links-2',
    component: <Links />,
    asMessage: true,
    trigger: 'Questions',
  },
]
