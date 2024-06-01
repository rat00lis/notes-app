import ReactMarkdown from 'react-markdown';
function Main({activeNote, updateNote}){
    const editField = (key, value) => {
        //update the active note with the new text
        const updatedNote = {
            ...activeNote,
            [key]: value,
            lastModified: Date.now()
        }
        //update the note in the notes array
        updateNote(updatedNote);
    }
    if(!activeNote) return <div className="no-active-note">No note selected</div>
    return <div className="app-main">
                <div className="app-main-note-edit">
                    <input type="text" 
                            id="title" 
                            autoFocus 
                            value={activeNote.title}
                            onChange = {(event) => editField('title', event.target.value)}
                            />
                    <textarea name="note-text" 
                            id="nody" 
                            placeholder="Today I..." 
                            value={activeNote.body}
                            onChange = {(event) => editField('body', event.target.value)}
                            >
                    </textarea>
                </div>
                <ReactMarkdown className="markdown-preview">
                    {`# ${activeNote.title}\n\n${activeNote.body}`}
                </ReactMarkdown>
            </div>
}
export default Main;