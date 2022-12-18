import './App.css'
import { Heading, HeadingWithChildren, Container, TextWithNumber, List, ClassHeading } from './components/TypescriptProps'

function App() {
  return (
    <div>
      {/* <Heading title={'H1 Title'} /> */}
      {/* <HeadingWithChildren>Children Title</HeadingWithChildren> */}
      <ClassHeading heading='header from class component' />
      {/* <Container>Container Children</Container> */}
      {/* <TextWithNumber header={(str: string) => <h2>Some heading {str}</h2>}>
        {(num: number) => <p>Some number {num}</p>}
      </TextWithNumber> */}
      {/* <List items={['Item N1', 'Item N2', 370]} renderer={(item: string | number) => <h2>{item}</h2>}></List> */}
    </div >
  )
}

export default App
