import styles from './MainPageForm.module.css'
import { useForm } from 'react-hook-form'
import { SubmitButton } from '../../../shared/components/Button/Button'
import FormField from '../../../shared/components/FormFields/FormFields'
import formPetsJpg from '../../../assets/formPetsImage.svg'
import { sendSaleRequest } from '../../../shared/api/sales-api'
import { useState } from 'react'
const MainPageForm = ({ fields }) => {
    const [isFormSubmited, setIsFromSubmited] = useState(false)
    const { register, reset, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = async (values) => {
        try {
            setIsFromSubmited(true)
            await sendSaleRequest(values)
            console.log('Form is successfully send');
            reset();
        } catch (error) {
            console.error('something went wrong', error.message);

        }

    }

    return (
        <section className={styles.formGetDiscount}>
            <h2>5% off on the first order</h2>
            <div className={styles.imgForm}>
                <img src={formPetsJpg} alt="pets image" />

                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    {fields.map((field) => (
                        <FormField
                            key={field.name}
                            {...field}
                            register={register}
                            errors={errors}
                        />
                    ))}

                    {isFormSubmited ? <SubmitButton type='submit' className={styles.btnSubmited} disabled>Request Submitted</SubmitButton> :
                        <SubmitButton type='submit' className={styles.btnSubmit} >Get a discount</SubmitButton>}
                </form>
            </div>
        </section>
    )
}
export default MainPageForm