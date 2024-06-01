function Sidebar({notes, addNote, deleteNote, activeNote, setActiveNote}){
  const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified);
    return (
    <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button onClick={addNote}>Add</button>
        </div>
        <div className="app-sidebar-notes">
        {
          sortedNotes.map((note) => {
            return (
            <div  className = {`app-sidebar-note ${note.id === activeNote && 'active'}`}
                  onClick={() => setActiveNote(note.id)}>
              <div className="sidebar-note-title">
                  <strong>{note.title}</strong>
                  <button onClick={() => deleteNote(note.id)} className="delete-button">Delete</button>
              </div>

          <p>{note.body && note.body.length > 100 ? note.body.substr(0,100) + '...' : note.body}</p>

              <small className="note-meta">
                  {new Date(note.lastModified).toLocaleDateString('en-GB', {
                      hour: '2-digit',
                      minute: '2-digit'
                  })}
              </small>
          </div>
            )
          })
        }
        </div>
    </div>
    )
}

export default Sidebar;