import React, { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/Notes';
import { RiAddBoxFill } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';

const Notes = () => {
  const [modal, setModal] = useState(false);
  const [notes, setNotes] = useState({ title: '', date: '', description: '', index: 0 });
  const [newNote, setNewNote] = useState([]);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(false);
    const updatedNotes = [...newNote, { ...notes, index: notes.index++ }];
    setNewNote(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const handleDelete = (index) => {
    const updatedNotes = newNote.filter((data) => data.index !== index);
    setNewNote(updatedNotes);
    console.log(updatedNotes);
  };

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      const item = JSON.parse(storedNotes);
      setNewNote(item);
    }
  }, []);

  return (
    <Wrapper className="container page">
      <div>
        <h1>notes</h1>
        <div>
          <h5>Add new notes</h5>
          <RiAddBoxFill onClick={openModal} />
        </div>
      </div>

      <div className="modal-notes" style={{ display: `${modal ? 'flex' : 'none'}` }}>
        <GrClose onClick={closeModal} />
        <h5>add new notes</h5>
        <form action="" onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="activity">Title Notes </label>
            <input name="title" type="text" id="activity" onChange={(e) => setNotes({ ...notes, title: e.target.value })} value={notes.title} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2rem' }}>
            <label htmlFor="date">Date </label>
            <input name="date" type="date" id="date" onChange={(e) => setNotes({ ...notes, date: e.target.value })} value={notes.date} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2rem' }}>
            <label htmlFor="desc">Description </label>
            <textarea name="description" id="desc" cols="30" rows="5" onChange={(e) => setNotes({ ...notes, description: e.target.value })} value={notes.description}></textarea>
          </div>
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </div>

      <div className="container-notes">
        {newNote.map((data, index) => {
          return (
            <article key={index} className="new-notes">
              <div>
                <h3>{data.title}</h3>
                <h4>{data.date}</h4>
              </div>
              <p>{data.description}</p>
              <button className="btn-danger btn" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Notes;
