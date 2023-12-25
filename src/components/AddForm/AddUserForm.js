import React from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {addTodo} from "../../redux/action/todoAction";
import {addUser} from "../../redux/action/userAction";

const AddUserForm = () => {
    const dispatch=useDispatch()
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm();

    const onSubmit = (data) =>{
        dispatch(addUser(data))
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                    <div className={'add-form'}>
                        <input placeholder={'Name'} type="text"
                               {...register('name',{required: true,maxLength: 12, minLength:3})}
                        />
                        {errors.name?.type === 'required' && <p role="alert">First name is required</p>}

                        <input placeholder={'Email'} type="text"
                               {...register('email',{required: true})}
                        />
                        {
                            errors.email?.type==='required' &&
                            <span className={'text-danger'}>{errors.email.message}</span>
                        }
                        <input placeholder={'Phone'} type="text"
                               {...register('phone',{required: true})}
                        />
                        {
                            errors.phone?.type==='required' &&
                            <span className={'text-danger'}>{errors.phone.message}</span>
                        }
                        <input placeholder={'Address'} type="text"
                               {...register('address',{required: true})}
                        />
                        {
                            errors.address?.type==='required' &&
                            <span className={'text-danger'}>{errors.address.message}</span>
                        }
                        <input placeholder={'Job'} type="text"
                               {...register('address',{required: true})}
                        />
                        {
                            errors.job?.type==='required' &&
                            <span className={'text-danger'}>{errors.job.message}</span>
                        }
                        <button type={'submit'} className={'btn btn-primary'}>ADD USER</button>
                    </div>
            </form>
        </div>
    );
};

export default AddUserForm;