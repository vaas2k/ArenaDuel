'use client'
import React from 'react';
import Editor from '@monaco-editor/react';
import { Button } from '@radix-ui/themes';
import { PlayIcon, UploadIcon } from '@radix-ui/react-icons';

function CodeEditor() {
  const [theme, setTheme] = React.useState<any>('false'); // Initial theme state
  React.useEffect(()=>{
    const newtheme = typeof window !== undefined ? sessionStorage.getItem('theme') : null;
    setTheme(newtheme);
  })

  return (
    <div className="sm:w-[50%] w-[100%] h-[650px] mx-auto p-2 rounded-lg ">
        <div
        style={{ backgroundColor :theme == 'true' ? 'white' : '#1c1c1c'}} 
        className="flex items-center justify-center gap-[20px] mb-2 rounded-lg p-[10px] shadow-lg">
              <Button style={{cursor : 'pointer'}} variant='ghost' color='grass' className='flex gap-[10px]'><PlayIcon /> &nbsp; <p>Run</p></Button>
              <Button style={{cursor : 'pointer'}} variant='ghost' color='grass' className='flex gap-[10px]'><UploadIcon /> &nbsp; <p>Submit</p></Button>      
        </div>

      <Editor
        className='shadow-lg bg-gray-900'
        height="600px" // Adjust height based on container
        defaultLanguage="cpp"
        defaultValue={`class Solution { 
          public:
          void sortColors(vector<int>& nums) {
            
              }
            };`}
            theme={theme == 'true' ? 'active' : 'vs-dark'}
            options={{
              minimap: { enabled: true }, // Optional: Hide minimap
              scrollBeyondLastLine: false, // Prevent unnecessary vertical scrollbar
              fontSize: 16, // Adjust font size for readability
              lineHeight: 22, // Adjust line height for better spacing
              fontFamily: 'rubik', // Generic monospace font
            }}
            onMount={(editor) => {
              // Optional: Register custom font or other editor customizations
            }}
            />
      </div>

  );
}

export default CodeEditor;
