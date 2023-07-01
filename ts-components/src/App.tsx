// import './App.css'
import { ChangeEvent, useState } from 'react'
import { Heading, HeadingWithChildren, Container, TextWithNumber, List, ClassHeading } from './components/TypescriptProps'
import { SuffixInput } from './components/suffixInput/SuffixInput'

function App() {
  const [input, setInput] = useState<string>('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }


  return (
    <div>
      {/* <Heading title={'H1 Title'} /> */}
      {/* <HeadingWithChildren>Children Title</HeadingWithChildren> */}
      {/* <ClassHeading heading='header from class component' /> */}
      {/* <Container>Container Children</Container> */}
      {/* <TextWithNumber header={(str: string) => <h2>Some heading {str}</h2>}>
        {(num: number) => <p>Some number {num}</p>}
      </TextWithNumber> */}
      {/* <List items={['Item N1', 'Item N2', 370]} renderer={(item: string | number) => <h2>{item}</h2>}></List> */}
      <SuffixInput placeholder='Some placeholder' suffix='suffix' value={input} onChange={onChange} />
    </div >
  )
}

export default App
