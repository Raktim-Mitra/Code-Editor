import { useContext, useState } from 'react'
import './App.css'
import { HStack, VStack, Box, useBreakpointValue} from '@chakra-ui/react'
import CodeEditor from './Components/CodeEditor'
import CodeOutput from './Components/CodeOutput'
import { CodeContext } from './CodeContext/CodeContextProvider'

function App() {
  const Stack = useBreakpointValue({ base: VStack, md: HStack });
  const width=useBreakpointValue({base: "full" ,md:"50%"})
  const height=useBreakpointValue({base: "100vh" ,md:""})
  const{language,setLanguage,editorRef}=useContext(CodeContext)
  return (
    <Stack gap={"0"} MaxHeight={height}>
    <Box flex="1" width={width}>
      <CodeEditor />
    </Box>
    <Box flex="1" width={width}>
      <CodeOutput editorRef={editorRef} language={language} />
    </Box>
  </Stack>
  )
}

export default App
