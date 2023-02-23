import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.scss'
function ContactSection1() {
    return (
        <>

            <div className='form-container'>
                <div className='form'>
                    <div className='form-text'>
                        <h2>Bizimle iletişime geç</h2>
                        <p>Email. bilgi [at] eppek.net
                            <p> Tel. 0537 685 15 40</p> </p>


                    </div>
                    <div className='form-main'>
                        <Formik
                            initialValues={{ firstName: '', lastName: '', email: '', message: '' }}
                            validationSchema={Yup.object({

                                email: Yup.string().email('Invalid email address').required('Required'),
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            <Form>
                                <div className='firstname-name'>
                                    <div>
                                        <label htmlFor="firstName">First Name</label>
                                        <Field className="Field" name="firstName" type="text" />

                                    </div>
                                    <div>
                                        <label htmlFor="lastName">Last Name</label>
                                        <Field className="Field" name="lastName" type="text" />
                                    </div>
                                </div>
                                <div className='email-message'>
                                    <div>
                                        <label htmlFor="email">Email Address</label>
                                        <Field className="Field-email" name="email" type="email" />
                                        <ErrorMessage className='errormessage' name="email" style={{ color: 'red' }} />
                                    </div>

                                    <div>
                                        <label htmlFor="message">Message</label>
                                        <Field className="message" name="message" type="message" />

                                    </div>
                                </div>

                                <br />
                                <div className='btn-div'>
                                    <button className='button-86' type="submit">Submit</button>
                                </div>




                            </Form>
                        </Formik>
                    </div>




                </div>

                <div className='google-maps-text'>
                    <div className='google-maps'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.951648791215!2d29.03738405113601!3d40.98253957920172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab87bfa3a66e9%3A0x4431b038c9992e18!2seppek!5e0!3m2!1str!2saz!4v1677067211287!5m2!1str!2saz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='maps-text'>
                        <h2>Fenerbahçe, Itri Dede Sokağı No:22
                            <h2>34726 Kadıköy/İstanbul</h2>
                        </h2>
                        <p>Çarşamba  11:00 - 19:00</p>
                    </div>
                </div>
            </div>



        </>
    )
}

export default ContactSection1