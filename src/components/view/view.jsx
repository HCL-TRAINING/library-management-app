import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import ConfirmationModal from "../delete-confirmation-modal/deleteConfirmationModal";

export default function View(props) {
  console.log('book list', props.books);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const [showEdit, setShowEdit] = useState(false);

  const showConfirmationModal = (value) => {
    setShowModal(value);
  }

  const submit = () => {
    console.log('subnit', selectedBook);
        showConfirmationModal(false);
        props.onDelete(selectedBook)
  }

  const onEditClick = (book) => {
    console.log('view edit', book);
      setSelectedBook(book);
      setShowEdit(true);
  }

  useEffect(() => {
    if (showEdit) {
      props.onEdit(selectedBook);
    }
  }, [selectedBook])

    return (
        <div>
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>SL No.</th>
      <th>Author Name</th>
      <th>Book Name</th>
      <th>User Type</th>
      <th>Book Code</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      props.books.map((book, i) => {
        return (
          <tr key={i}>
            <td>{i+1}</td>
            <td>{book.authorName}</td>
            <td>{book.bookName}</td>
            <td>{book.userType}</td>
            <td>{book.bookCode}</td>
            <td>
              <AiOutlineEdit fontSize={"1.5rem"} cursor="pointer" 
              onClick={() => onEditClick(book)}/>
              <AiFillDelete fontSize={"1.2rem"} className="ms-3" 
              onClick={() => {showConfirmationModal(true); setSelectedBook(book);}} cursor={"pointer"}/>
            </td>
        </tr>
        )
      })
    }

  </tbody>
</Table>
          <ConfirmationModal show={showModal} 
          onHide={() => showConfirmationModal(false)}
          onSuccess={() => submit()}
          />
      </div>
    )
}
 