import React from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`cursor-pointer h-20 flex flex-col items-center justify-center`}
  ${tw`text-gray-500 border-2 border-dashed border-gray-400 p-2 m-2`}
`;

interface FileProp extends File {
  path?: string;
}

const ImageDropZone: React.FC = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: `image/*`,
  });

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drop Image</p>
      <aside>
        <ul>
          {acceptedFiles.map((file: FileProp) => (
            <li key={file.path}>{file.path}</li>
          ))}
        </ul>
      </aside>
    </Container>
  );
};

export default ImageDropZone;
