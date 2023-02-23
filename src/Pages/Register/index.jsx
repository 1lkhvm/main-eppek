import React  , {useEffect} from 'react'
import Login from '.'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar'

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom';





export default function Index() {
    let navigate  = useNavigate()
	function handleClick(values) {
		axios.post('http://localhost:5000/api/auth/register', {
			username: values.username,
			password: values.password,
			email: values.email
		}).then(data => {
			localStorage.setItem('username', data.data.username)
			localStorage.setItem("token", data.data.token)
			navigate('/')
			console.log(data)
		})
	}

	useEffect(() => {
		if (localStorage.getItem('username')) {
			navigate("/")
		}
	}, [])

	return (
		<div className='login-page'>


			<Navbar />

			<section className='loginPage'>
				<div className='loginMain'>
					<Formik
						initialValues={{ username: "", password: "", email: "" }}
						validationSchema={Yup.object({
							username: Yup.string().required("*Kullanıcı adı boş olamaz"),
							password: Yup.string().required("*Şifre boş olamaz"),
						})}
						onSubmit={handleClick} >
						{({ errors, touched }) => (
							<div className='formDiv'>
								<h2 id='loginH2'>Giriş Yap</h2>
								<Form>
									<div className='login_usrname_password'>

										<div id='username'>
											<span> Username </span>
											<Field className={`inp ${errors.username && touched.username && "errorInp"}`} name="username" type="text" />

										</div>

										<div id='email'>
											<span> Email </span>
											<Field className={`inp ${errors.email && touched.email && "errorInp"}`} name="email" type="text" />
										</div>

										<div id='password'>
											<span> Password </span>
											<Field className={`inp ${errors.password && touched.password && "errorInp"}`} name="password" type="text" />
										</div>





									</div>

									<Link id='havenotaccount' to={'/register'}>Hesabın yok mu ?</Link>
									<button id='submitbtn' type="submit">Giriş Yap</button>
								</Form>
							</div>
						)}
					</Formik>
				</div>
			</section >
			<Footer />

		</div>

	)




}



