import Links from '../components/Links'
import {questions} from './questions'
export const theme = {
    background: '#F1F1E6',
    fontFamily: 'Helvetica Neue',
    botBubbleColor: '#2059A7',
    botFontColor: '#F5F6F6',
    userBubbleColor: '#038592',
    userFontColor: '#F5F6F6'
  }

const removeQuestion=(previousValue, str)=>{
    questions.splice(
        questions.findIndex(({ value }) => value == previousValue),
        1
      )
    return str;
}
export const steps = [
    {
        id: 'Intro-1',
        message: 'Hello! My name is Ryan',
        trigger: 'Intro-2'
    },
    {
        id: 'Intro-2',
        message: 'I am a Software Engineer.',
        trigger: 'Intro-3'
    },
    {
        id: 'Intro-3',
        message: 'I have over 8 years software development experience.',
        trigger: 'Questions'
    },
    {
        id: 'Questions',
        options: questions
    },
    {
        id: 'Education-1',
        message :({previousValue})=>  removeQuestion(previousValue,'I graduated from the Chinese University of Hong Kong'),
        trigger: 'Education-2'
    },
    {
        id: 'Education-2',
        message: 'I have a M.Phil Degree in Mechanical and Automation Engineering',
        trigger: 'Education-3'
    },
    {
        id: 'Education-3',
        message: 'and a Bacholer Degree in Automation and Computer Aided Engineering',
        trigger: 'Questions'
    },
    {
        id: 'Skill-1',
        message: ({previousValue})=>  removeQuestion(previousValue,'I am specialized in developing mobile ( Android / iOS / ReactNaive / Flutter ) and web applicaton ( PHP / ReactJS ).'),
        trigger: 'Skill-2'
    },
    {
        id: 'Skill-2',
        message: 'I often write code in Java / ObjectiveC / C# / Javascript / PHP / (some) Python',
        trigger: 'Questions'
    },
    {
        id: 'Work-1',
        message: ({previousValue})=>  removeQuestion(previousValue, 'Currently i am working for a company to propose solutions based on user requirements and develop proof-of-concept application.'),
        trigger: 'Work-2'
    },
    {
        id: 'Work-2',
        message: 'I often need to learn new technologies including VR, AR, Blockchains and Deep Learning, etc',
        trigger: 'Questions'
    },
    {
        id: 'Links-1',
        message: ({previousValue})=>  removeQuestion(previousValue, 'Please check the links below : '),      
        trigger: 'Links-2'
    },
    {
        id: 'Links-2',
        component: <Links />,
        asMessage: true,
        trigger: 'Questions'
    }
  ]
  