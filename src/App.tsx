import { CodeNode } from '@lexical/code'
import { LinkNode } from '@lexical/link'
import { ListItemNode, ListNode } from '@lexical/list'
import { TRANSFORMERS } from '@lexical/markdown'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'

const editorConfig = {
  namespace: 'markdown-playground',
  onError(error: Error) {
    throw error
  },
  nodes: [HeadingNode, QuoteNode, ListNode, ListItemNode, CodeNode, LinkNode],
}

function App() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div style={{ position: 'relative', border: '1px solid #ccc', padding: 8 }}>
        <RichTextPlugin
          contentEditable={<ContentEditable style={{ minHeight: 200, outline: 'none' }} />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
      </div>
    </LexicalComposer>
  )
}

export default App
