import React, { useState, useRef } from "react";
import styled from "styled-components";
import DraftEditor from "draft-js-plugins-editor";
import { EditorState } from "draft-js";
// @ts-ignore
import createCounterPlugin from "draft-js-counter-plugin";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
// @ts-ignore
import createSideToolbarPlugin from "draft-js-side-toolbar-plugin";

import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "draft-js-side-toolbar-plugin/lib/plugin.css";

const counterPlugin = createCounterPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin();
const sideToolbarPlugin = createSideToolbarPlugin();

const plugins = [counterPlugin, inlineToolbarPlugin, sideToolbarPlugin];

const { SideToolbar } = sideToolbarPlugin;
const { InlineToolbar } = inlineToolbarPlugin;

const Editor: React.FC = () => {
  const [content, setContent] = useState(EditorState.createEmpty());
  const editor = useRef<DraftEditor | null>(null);

  const focusEditor = () => editor.current && editor.current.focus();

  return (
    <Wrapper onClick={focusEditor}>
      <DraftEditor
        ref={element => {
          editor.current = element;
        }}
        spellCheck
        editorState={content}
        onChange={setContent}
        plugins={plugins}
      />
      <SideToolbar />
      {/* 
        // @ts-ignore */}
      <InlineToolbar />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  padding: 5rem 10rem;
  cursor: text;
`;

export default Editor;
