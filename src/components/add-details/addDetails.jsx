import React, {useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import './addDetails.css'
import Form from 'react-bootstrap/Form'

const AddDetails = ({screenState, addBook, bookDetails}) => {
    const [formValues, setFormValues] = useState({
        bookName: '',
        authorName: '',
        bookCode: '',
        userType: '', 
     });

    //  const [showPrefilledValues, setShowPrefilledValues] = useState(false);

     useEffect(() => {
        console.log('book details', bookDetails);
        if (bookDetails && Object.keys(bookDetails).length) {
            setFormValues(bookDetails);
            // setShowPrefilledValues(true);
        } else {
            // setShowPrefilledValues(false)
        }
     }, [bookDetails])

     const handleValueChanges = (event, key) => {
         setFormValues((values) => ({
             ...values,
             [key]: event.target.value,
         }));
         
        //  console.log('form value', formValues);
     }

     const handleSubmit = (e) => {
         console.log('form', formValues);
        addBook(formValues);
        backToListing();
        e.preventDefault();
     }

     const backToListing = () => {
        screenState('LISTING'); 
     }

    return (
        <div className="details">
            <div className="header d-flex align-items-center">
                <Button variant="outline-primary" className="ms-5" onClick={backToListing}>Back</Button>
                <h3 className="w-100">Add Book Details</h3>
            </div>

            <Form className="w-50 m-auto" onSubmit={e => handleSubmit(e)}>
                <Form.Group className="mb-4" id="formBasicBookName">
                    <Form.Label className="d-flex">Book Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" 
                    onChange={(e) => handleValueChanges(e, 'bookName')} 
                    value={formValues.bookName} />
                </Form.Group>

                <Form.Group className="mb-4" id="formBasicAuthorName">
                    <Form.Label className="d-flex">Author Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter author name"
                    onChange={(e) => handleValueChanges(e, 'authorName')}
                    value={formValues.authorName}/>
                </Form.Group>

                <Form.Group className="mb-4" id="formBasicBookCode">
                    <Form.Label className="d-flex">Book Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter code"
                    onChange={(e) => handleValueChanges(e, 'bookCode')}
                    value={formValues.bookCode} disabled={!!Object.keys(bookDetails).length}/>
                </Form.Group>
                
                <Form.Group className="mb-4" id="formBasicType">
                    <Form.Label className="d-flex">Select User</Form.Label>
                       <Form.Select aria-label="Default select example"
                       onChange={(e) => handleValueChanges(e, 'userType')}
                       placeholder="Select" value={formValues.userType}>
                       <option>Open this select menu</option>
                        <option value="Student">Student</option>
                        <option value="Faculty">Faculty</option>
                    </Form.Select>
                </Form.Group>

                <Button as="input" type="submit" value="Submit" />
            </Form>
        </div>
    );
}

export default AddDetails;