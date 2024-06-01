import ReactMarkdown from 'react-markdown';
function Main({activeNote, updateNote, colorList}){
    const isLight = (color) => {
        const hex = color.replace("#", "");
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        const yiq = (r * 299 + g * 587 + b * 114) / 1000;
        return yiq >= 128;
    }
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
    return <div className="app-main" style={{ backgroundColor: activeNote.color }}>
                <div className="app-main-note-edit">
                    
                    <select className="color-picker"
                            id="note-color"
                            value={activeNote.color}
                            onChange={(event) => editField('color', event.target.value)}>

                        {colorList.map((colorItem) => (
                        <option key={colorItem.color} value={colorItem.color}>{colorItem.name}</option>
                        ))}
                    </select>

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