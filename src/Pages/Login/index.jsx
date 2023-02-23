import React from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {

	function handleClick(values) {
		axios.post('http://localhost:5000/api/auth/login', values).then(data => {
			console.log(data)
			localStorage.setItem('accessToken', data.accessToken)
		})
	}


	return (
		<section className='loginPage'>
			<div className='loginMain'>
				<Formik
					initialValues={{ username: "", password: "" }}
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
									<div id='loginDiv'>
										<label htmlFor="username"><i className="fa-solid fa-user"></i> Kullanıcı adı</label>
										<Field className={`inp ${errors.username && touched.username && "errorInp"}`} name="username" type="text" />
									</div>

									<div id='loginDiv'>
										<label htmlFor="password"><i className="fa-solid fa-lock"></i> Şifre</label>
										<Field className={`inp ${errors.password && touched.password && "errorInp"}`} name="password" type="password" />
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
	);
};



export default Login