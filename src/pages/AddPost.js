import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import { Form, Container, Row, Col, Button } from 'react-bootstrap'
import styled from 'styled-components'
import Image from '../components/Image'
import { useSelector, useDispatch } from 'react-redux'
import { createPost } from '../store/post/post'
import LoadingContainer from '../components/LoadingContainer'
import { getUser } from '../store/user/user.selectors'

const StyledCol = styled(Col)`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:5px;
`
const StyledRow = styled(Row)`
    display:flex;
    justify-content:space-space-between;
    margin:5px;
    
`

const Input = styled.input`
    width:132px;
    &[type='file']{
        color:transparent;
    }

`

export default function AddPost() {

    const [photo, setPhoto] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [description, setDescription] = useState('')
    const [university, setUniversity] = useState('')
    const dispatch = useDispatch()

    const user = useSelector(getUser)
    const loadPhoto = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setPhoto(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);

        }
    }

    const addPost = () => {
        const payload = {
            post: {
                description, university, user
            }, photo
        }
        dispatch(createPost(payload))
        setLoading(true);
    }

    return (
        <div>
            <Navigation />
            <LoadingContainer loading={isLoading} description="Your post is being added right now!">
                <Container fluid>
                    <StyledRow>
                        <StyledCol xs={12} md={6}>
                            <Image source={photo} />
                        </StyledCol>
                        <StyledCol xs={12} md={6}>
                            <Input className="form-control form-control-lg" type="file" onChange={loadPhoto} />
                        </StyledCol>
                    </StyledRow>
                    <StyledRow>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </StyledRow>
                    <StyledRow>
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select" value={university} onChange={(e) => setUniversity(e.target.value)}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </StyledRow>
                    <StyledRow>
                        <Button variant="primary" className="mt-3" onClick={addPost}>
                            Post
                    </Button>
                    </StyledRow>
                </Container>
            </LoadingContainer>
        </div >
    )
}
