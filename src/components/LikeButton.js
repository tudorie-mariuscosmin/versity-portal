import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function LikeButton({ liked, onLike, onDislike }) {
    if (liked)
        return (
            <FontAwesomeIcon icon={['fas', 'heart']} style={{ color: 'tomato', fontSize: '1.5em' }} className="me-2" onClick={onDislike} />
        )
    else
        return (
            <FontAwesomeIcon icon={['far', 'heart']} style={{ color: 'tomato', fontSize: '1.5em' }} className="me-2" onClick={onLike} />
        )
}
