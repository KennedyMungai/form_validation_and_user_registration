'use client'
import { useEffect, useRef, useState } from 'react'
import { FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa'

type Props = {}
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const Register = (props: Props) => {
	const userRef = useRef<HTMLInputElement>(null)
	const errRef = useRef<HTMLInputElement>(null)

	const [user, setUser] = useState<string>('')
	const [validName, setValidName] = useState<boolean>(false)
	const [userFocus, setUserFocus] = useState<boolean>(false)

	return <div>Register</div>
}

export default Register
