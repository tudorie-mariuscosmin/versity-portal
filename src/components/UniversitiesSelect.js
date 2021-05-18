import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUnis } from '../store/universities/universities'
import { getAllUnis } from '../store/universities/universities.selector'

export default function UniversitiesSelect({ label, value, onChange, disabled }) {
    const unis = useSelector(getAllUnis)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUnis())
    })
    console.log("render")
    return (
        <>
            <select className="form-select" value={value} onChange={onChange} disabled={disabled}>
                {
                    !value ? <option value="">{label}</option> : null
                }
                {
                    unis ? unis.map((uni, index) => <option key={index} value={uni}>{uni}</option>) : null
                }
            </select>
        </>
    )
}
