import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Image from '../components/Image'
import Navigation from '../components/Navigation'
import UniversitiesSelect from '../components/UniversitiesSelect'
import { getUser } from '../store/user/user.selectors'

const Hint = styled.div`
    text-align:${props => props.centered ? 'center' : ''};
    display:${props => props.show ? 'block' : 'none'};
    font-style:${props => props.italic ? 'italic' : ''};
    font-weight:${props => props.bold ? 'bold' : ''};
    font-size:${props => props.size};
`

const BtnContainer = styled.div`
    display:${props => props.show ? 'flex' : 'none'};
    justify-content:center;
    margin-top:10px;
`

const Alert = styled.div`
    background-color:#f7d7da;
    display:${props => props.show ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;
    border-radius:5px;
    padding:10px;
    margin-top:10px;
`


export default function Settings() {
    const [editMode, setEditMode] = useState(false)
    const user = useSelector(getUser)
    const [name, setName] = useState(user.name)
    const [university, setUniversity] = useState(user.uni)


    useEffect(() => {
        setName(user.name)
        setUniversity(user.uni)
    }, [user, editMode])

    return (
        <div>
            <Navigation />
            <Container className="p-3">
                <div className="d-flex justify-content-end">
                    {/* <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Edit</label>
                    </div> */}
                    <FontAwesomeIcon icon={['fas', 'user-edit']} onClick={() => setEditMode(!editMode)} />
                </div>

                <Image source={user.avatar} />
                <Hint show={editMode} centered bold size="1.5em">
                    Edit Mode
                </Hint>
                <Hint show={editMode} centered italic>
                    Update your profile photo and credentials
                </Hint>

                <Alert show={!user.uni && !university} onClick={() => setEditMode(true)}>
                    <FontAwesomeIcon icon={['fas', 'bomb']} />
                    Please Select your university!
                </Alert>
                <div className="py-2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control disabled={!editMode} value={editMode ? name : user.name} type="text" onChange={e => setName(e.target.value)} />
                </div>
                <div className="py-2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control disabled type="email" value={user.email} />
                    <Form.Text className="text-muted">
                        You can't edit your email!
                    </Form.Text>
                </div>
                <div className="py-2">
                    <UniversitiesSelect disabled={!editMode} label="Select a university" value={editMode ? university : user.uni} onChange={e => setUniversity(e.target.value)} />
                </div>

                <BtnContainer show={editMode}>
                    <Button>Save</Button>
                </BtnContainer>
            </Container>

        </div >
    )
}
