import { Formik, Form, Field, ErrorMessage } from 'formik';

export const MaterialEditorForm = ({onSubmit}) => {
    const handleSubmit = async (values, actions) => {
        await onSubmit(values);
        actions.setSubmitting(false);
        actions.resetForm();
    }

    return (
        <Formik
            initialValues={{ title: '', link: '' }}
            onSubmit={handleSubmit}
        >
            {({isSubmitting}) => (
                <Form autoComplete='off'>
                    <label>
                        Title
                        <Field type="text" name="title" />
                    </label>
                    <br />
                    <label>
                        Link
                        <Field type="text" name="link" />
                    </label>
                    <br />
                    <button type="submit" disabled={isSubmitting}>Add material</button>
                </Form>
            )}
            
        </Formik>

    )
}