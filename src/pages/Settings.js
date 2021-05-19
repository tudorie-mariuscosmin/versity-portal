import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import Image from '../components/Image'
import LoadingContainer from '../components/LoadingContainer'
import Navigation from '../components/Navigation'
import UniversitiesSelect from '../components/UniversitiesSelect'
import usePhotoPicker from '../hooks/usePhotoPicker'
import { updateUser, logout, deleteAccount } from '../store/user/user'
import { getUser, getUserLoadingStatus } from '../store/user/user.selectors'



const EditBtnContainer = styled.div`
    color:${props => props.isEditing ? '#0d6efd' : 'black'};
    position:absolute;
    right:20px;
    font-size:1.5em;
    cursor: pointer;
`
const ImageContainer = styled.div`
    cursor: ${props => props.isEditing ? 'pointer' : ''};;
`
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
    flex-direction:column;
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
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)
    const user = useSelector(getUser)
    const [name, setName] = useState(user.name)
    const [university, setUniversity] = useState(user.uni)

    const [photo, setPhoto] = useState(null)
    const [photoUpdated, setPhotoUpdated] = useState(false)
    const openPhotoPicker = usePhotoPicker(setPhoto)

    const history = useHistory()

    const loading = useSelector(getUserLoadingStatus)


    useEffect(() => {
        setName(user.name)
        setUniversity(user.uni)
        setPhoto(user.avatar)
        setPhotoUpdated(false)
    }, [user, editMode])

    const uploadPhotoHandler = () => {
        if (editMode) {
            openPhotoPicker()
            setPhotoUpdated(true);
        }
    }
    const onSave = () => {
        const payload = {}
        if (photoUpdated)
            payload.photo = photo;
        payload.user = {
            name: name, university: university
        }
        dispatch(updateUser(payload))
        setEditMode(false)
    }

    const onLogout = () => {
        dispatch(logout())
        history.push('/login')
    }

    const onDeleteAccount = () => {
        dispatch(deleteAccount())
    }
    return (
        <div style={{ marginBottom: '75px' }}>
            <Navigation />
            <LoadingContainer loading={loading} description="Loading...">
                <Container className="p-3">
                    <EditBtnContainer isEditing={editMode}>
                        <FontAwesomeIcon icon={['fas', 'user-edit']} onClick={() => setEditMode(!editMode)} size="lg" />
                    </EditBtnContainer>
                    <ImageContainer isEditing={editMode} onClick={uploadPhotoHandler}>
                        <Image source={photo} small />

                    </ImageContainer>
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
                        <Form.Control disabled={!editMode} value={name} type="text" onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="py-2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control disabled type="email" value={user.email} />
                        <Form.Text className="text-muted">
                            You can't edit your email!
                    </Form.Text>
                    </div>
                    <div className="py-2">
                        <Form.Label>University</Form.Label>
                        <UniversitiesSelect disabled={!editMode} label="Select a university" value={editMode ? university : user.uni} onChange={e => setUniversity(e.target.value)} />
                    </div>

                    <BtnContainer show={editMode}>
                        <Button onClick={onSave}>Save</Button>
                    </BtnContainer>

                    <BtnContainer show>
                        <Button className="btn-dark" onClick={onLogout} >
                            Logout
                        <FontAwesomeIcon icon={['fas', 'sign-out-alt']} className="ms-1" />
                        </Button>
                    </BtnContainer>
                    <hr />
                    <div className="h6">Danger zone!</div>
                    <BtnContainer show>
                        <Button className="btn-danger" onClick={onDeleteAccount}>
                            Delete Account
                        <FontAwesomeIcon icon={['fas', 'skull-crossbones']} className="ms-1" />
                        </Button>
                    </BtnContainer>

                </Container>
            </LoadingContainer>

        </div >
    )
}
