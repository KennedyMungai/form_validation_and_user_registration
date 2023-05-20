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

	const [pwd, setPwd] = useState<string>('')
	const [validPwd, setValidPwd] = useState<boolean>(false)
	const [pwdFocus, setPwdFocus] = useState<boolean>(false)

	const [matchPwd, setMatchPwd] = useState<string>('')
	const [validMatch, setValidMatch] = useState<boolean>(false)
	const [matchFocus, setMatchFocus] = useState<boolean>(false)

	const [errMsg, setErrMsg] = useState<string>('')
	const [success, setSuccess] = useState<boolean>(false)

	useEffect(() => {
		userRef.current?.focus()
	}, [])

	useEffect(() => {
		const result = USER_REGEX.test(user)
		console.log(result)
		console.log(user)
		setValidName(result)
	}, [user])
	
	useEffect(() => {
		const result = PWD_REGEX.test(pwd)
		console.log(result)
		console.log(pwd)
		setValidPwd(result)

		const match = pwd === matchPwd
		setValidMatch(match)
	}, [pwd, matchPwd])
	
	useEffect(() => {
		setErrMsg('')
	}, [user, pwd, matchPwd])

	return <section className='flex flex-col gap-2'>Register</section>
}

export default Register
