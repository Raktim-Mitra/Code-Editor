import React,{useState} from 'react'
import { Box, Button,Text, useToast,useBreakpointValue } from '@chakra-ui/react'
import { executeCode } from '../api';


const CodeOutput = ({editorRef,language}) => {
    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const Height = useBreakpointValue({ base: "50%", md: "100vh" });
    const minHeight = useBreakpointValue({ base: "50vh", md: "75vh" });
    const toast=useToast()
    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;
        try {
            setIsLoading(true);
          const { run: result } = await executeCode(language, sourceCode);
          setOutput(result.output.split("\n"));
          result.stderr ? setIsError(true) : setIsError(false);
         
        } catch (error) {
            console.log(error);
            toast({
              title: "An error occurred.",
              description: error.message || "Unable to run code",
              status: "error",
              duration: 6000,
            });
        } finally {
            setIsLoading(false);
        }
      };


  return (
    <Box 
    flex="1"
    borderLeft={{ base: 'none', md: '4px' }}   
    borderTop={{ base: '4px', md: 'none' }}  
    borderColor= {{ base: 'gray.700', md: 'gray.700' }}  
    bg="gray.900"
    height={Height}
    color="white"
    p={4}
    
  >
    <Text fontSize="lg" mb={2}>Output</Text>
    <Button colorScheme="teal" size="sm" mb={6} onClick={runCode}>Run Code</Button>

    <Box   bg="grey.900" 
        p={4} 
        borderRadius="md" 
        border="1px" 
        color={isError ? "red.400" : "white"}
         
        minHeight={minHeight}
        borderColor={isError ? "red.500" : "#333"}
        >
       {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output here'}
    </Box>
  </Box>
  )
}

export default CodeOutput