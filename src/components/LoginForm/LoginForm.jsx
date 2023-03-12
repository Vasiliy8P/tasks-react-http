import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

let userSchema = object({
  login: string().required(),
  password: string().min(6).max(12).required(),
});

const FormError = ({name}) => {
    return (
        <ErrorMessage
            name={name}
            render={message => <div style={{color:"#ff0000"}}>{message}</div>}
        />
    )
}

export const LoginForm = () => {
    const handleSubmit = (values, actions) => {
        console.log("handleSubmit  actions:", actions)
        console.log("handleSubmit  values:", values)
        actions.resetForm()        
    }

    return (
        <Formik
            initialValues={{ login: '', password: '' }}
            onSubmit={handleSubmit}
            validationSchema={userSchema}
        >            
            <Form autoComplete='off'>
                <label>
                    Login
                    <Field type="text" name="login" />
                    <FormError name="login" component="div"/>
                </label>
                <br />
                <label>
                    Password
                    <Field type="password" name="password" />
                    <FormError name="password" component="div"/>
                </label>
                <br />
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    
    )
}