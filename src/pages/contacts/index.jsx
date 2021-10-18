import Link from 'next/link'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {useState} from 'react'
import {doc, setDoc} from 'firebase/firestore'
import {ref, uploadBytes} from 'firebase/storage'
import {db, storage} from 'firebaseConnect'
import {toast} from 'react-toastify'

import * as Styles from 'styles/contactsPageStyles'
import Layout from 'layout'
import Seo from 'components/Seo'
import BaseContainer from 'components/BaseContainer'
import Typography from 'components/Typography'
import ContactSources from 'components/ContactSources'
import CommonInput from 'components/Input'
import TextAreaInput from 'components/Input/TextArea'
import Button from 'components/Buttons'

import Arrow from '../../images/arrow.svg'
import FileIcon from '../../images/file-icon.svg'


const sendFormSchema = Yup.object().shape({
  customerName: Yup.string().min(2).max(50).required('Required'),
  contacts: Yup.string().min(2).max(50).required('Required'),
  taskInfo: Yup.string().min(12).max(200).required('Required')
})

const ContactPage = () => {
  const [selectedFile, setSelectedFile] = useState('')

  const sendData = async (values, resetForm) => {
    if (selectedFile !== '') {
      values = {...values, 'uploadedFilename': selectedFile.name}
      uploadBytes(ref(storage, selectedFile.name), selectedFile).then()
    } else {
      values = {...values, 'uploadedFilename': ''}
    }
    const timestamp = Date.now()
    await setDoc(doc(db, 'form-data', timestamp.toString()), values)
    resetForm()
    setSelectedFile('')
    toast.success('Your form has been sent, we will contact you within 24 hours!')
  }

  return (
    <>
      <Seo />
      <Layout>
        <Styles.ContactPageContainer>
          <BaseContainer>
            <Styles.Sidebar>
              <Typography size={4} fontWeight={700}>
                Fill out the Form and we will contact you
              </Typography>
              <ContactSources direction={'column'} />
              <Link href={'/'} passHref>
                <Styles.BackToHome>
                  <Arrow />
                  <Typography>Back to home page</Typography>
                </Styles.BackToHome>
              </Link>
            </Styles.Sidebar>

            <Styles.MainContent>

              <Formik
                initialValues={{
                  customerName: '',
                  contacts: '',
                  taskInfo: ''
                }}
                validationSchema={sendFormSchema}
                onSubmit={(values, {resetForm}) => sendData(values, resetForm)}
              >
                {({setFieldValue, values, errors, touched}) => {
                  return (
                    <Styles.ContactForm>
                      <CommonInput
                        name={'customerName'}
                        label={
                          <Typography size={3}>How can we contact you?
                            <Typography textColor={'var(--color-primary)'}> *</Typography>
                          </Typography>
                        }
                        placeholder={'Your name'}
                        error={`${errors.customerName && touched.customerName}`}
                      />

                      <CommonInput
                        name={'contacts'}
                        label={
                          <Typography size={3}>Your contact info
                            <Typography textColor={'var(--color-primary)'}> *</Typography>
                          </Typography>
                        }
                        placeholder={'email, phone number, telegram'}
                        error={`${errors.contacts && touched.contacts}`}
                      />

                      <TextAreaInput
                        name={'taskInfo'}
                        label={
                          <Typography size={3}>Briefly describe the task
                            <Typography textColor={'var(--color-primary)'}> *</Typography>
                          </Typography>
                        }
                        placeholder={'Your message'}
                        error={`${errors.taskInfo && touched.taskInfo}`}
                      />

                      <Styles.FormButtons>
                        <Styles.UploadLabel>
                          <FileIcon />
                          Attach file
                          <Styles.FieldUpload id={'userFile'} name={'userFile'} type={'file'}
                                              onChange={e => setSelectedFile(e.target.files[0])} />
                        </Styles.UploadLabel>

                        <Button type="submit">Submit form</Button>
                      </Styles.FormButtons>
                    </Styles.ContactForm>
                  )
                }}
              </Formik>

            </Styles.MainContent>
          </BaseContainer>
        </Styles.ContactPageContainer>
      </Layout>
    </>
  )
}

export default ContactPage
