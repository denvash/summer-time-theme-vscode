import PropTypes from "prop-types";
import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";

console.log("hello");

export default function JsonEditor({ width, height, ...props }) {
  const [value, setValue] = useState(props.value);
  return (
    <MonacoEditor
      {...props}
      width={width || 800}
      height={height || 600}
      language="json"
      value={value}
      onChange={(data) => {
        setValue(data);
        props.onChange && props.onChange(data);
      }}
    />
  );
}

JsonEditor.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  snippetEnabled: PropTypes.bool,
  showGutter: PropTypes.bool,
  style: PropTypes.object,
};
