import React ,{useState,useRef, useContext}from 'react'
import Editor from '@monaco-editor/react';
import { Box,VStack,useBreakpointValue } from '@chakra-ui/react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../constants';
import { CodeContext } from '../CodeContext/CodeContextProvider';
const CodeEditor = () => {
    const{value,setValue,language,setLanguage,editorRef}=useContext(CodeContext)
    const editorHeight = useBreakpointValue({ base: "50vh", md: "75vh" });
    const Height = useBreakpointValue({ base: "50%", md: "100vh" });
    const containerMaxWidth = useBreakpointValue({ base: "100%", md: "800px" });
    function handleEditorDidMount(editor) {
        editorRef.current = editor;
        editor.focus();
      }
    
    const onSelect=(language)=>{
        setLanguage(language)
        setValue(CODE_SNIPPETS[language])
    }
  return (
    <Box 
    bg="gray.800" 
    p={4} 
    height={Height}
    boxShadow="lg"
    maxWidth={containerMaxWidth} 
    mx="auto"
  >
    <VStack align="stretch" spacing={4} >
      <LanguageSelector onSelect={onSelect} language={language} />

      <Box border="1px" borderColor="gray.600" borderRadius="md">
        <Editor
          height={editorHeight}
          defaultLanguage={language}
          defaultValue={CODE_SNIPPETS[language]}
          value={value}
          onChange={(value) => setValue(value)}
          onMount={handleEditorDidMount}
          theme="vs-dark"
        />
      </Box>
    </VStack>
  </Box>
  )
}

export default CodeEditor