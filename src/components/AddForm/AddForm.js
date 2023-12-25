import React, {useState} from 'react';
import {addTodo} from "../../redux/action/todoAction";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

const AddForm = () => {
    const dispatch=useDispatch()
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm();

    const onSubmit = (data) =>{
        dispatch(addTodo(data))
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <div>
                    <div>
                        <input placeholder={'task'} type="text"
                               {...register('title',{required: true})}
                        />
                        {
                            errors.title?.type==='required' &&
                            <span className={'text-danger'}>{errors.title.message}</span>
                        }
                        <button type={'submit'} className={'btn btn-primary'}>Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddForm;